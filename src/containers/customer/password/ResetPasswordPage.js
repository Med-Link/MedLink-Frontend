import React,{ useState } from 'react';
import { Grid } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import { TextField } from '@material-ui/core';
import axios from 'axios';
import { useParams } from 'react-router-dom'
import { backendUrl } from '../../../urlConfig';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import InputLabel from '@material-ui/core/InputLabel';
import { makeStyles } from '@material-ui/core/styles';

function Copyright() {
    return (
      <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © '}
        <Link color="inherit" href="/">
          Medlink
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }

  const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    margin: {
      margin: theme.spacing(1),
    },
    withoutLabel: {
      marginTop: theme.spacing(3),
    },
    textField: {
      width: '95%',
    },
  }));

const ResetPassword=()=>{
  const { resetlink } = useParams();

  const classes = useStyles();
  const [values, setValues] = React.useState({
    amount: '',
    password: '',
    weight: '',
    weightRange: '',
    showPassword: false,
  });

  const [newpassword, setNewpassword] = useState('');
  const [checked, setChecked] = useState(false);
  const [error, setError] = useState('');
  const [rstPassword, setResetPassword] = useState(false);

  const resetPassword = async () => {
     
      console.log(resetlink,newpassword)
        axios.post(`${backendUrl}/resetcustomerpassword`,{ 
          resetlink,
          newpassword,
        }).then((response) => {
          console.log(response);
           
        }).catch((err) => {
          if (err.response && err.response.data) {
            console.log(err);// some reason error message
          }
        });
      
  };

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

    const paperStyle={padding :20,height:'500px',width:'400px', margin:"20px auto"}
    const avatarStyle={backgroundColor: '#126e82'}
    const gridStyle={padding: 20}
    const buttonStyle={color: '#efe3e3',backgroundColor: '#126e82', margin: '30px 0', width: '100%', left:'50%'}
    const headingStyle = {color: '#126e82'};
    const inputStyle = {width: '700px'}

    return(
        
        <Grid style={gridStyle}>
             <Paper style={paperStyle}> 
                <Grid align='center' style={gridStyle}>
                     
                    <h1 style={headingStyle}>Reset Password</h1>
                </Grid>

                <Grid container spacing={2}> 

                    <Grid item xs={12}>
                         
                            <InputLabel style={inputStyle} htmlFor="outlined-adornment-password">New Password</InputLabel>
                            <TextField
                              variant="outlined"
                              onChange={(e) => setNewpassword(e.target.value)}
                              required
                              fullWidth
                              name="password"
                              label="Password"
                              type="password"
                              id="password"
                              size="small"
                            />
                         
                    </Grid>

                    <Grid item xs={6}>
                        <Button type='submit' variant="contained" onClick={resetPassword} style={buttonStyle} href="">Submit</Button>
                    </Grid>
    
                </Grid>      
        </Paper>  
        </Grid>
    )
}

export default ResetPassword