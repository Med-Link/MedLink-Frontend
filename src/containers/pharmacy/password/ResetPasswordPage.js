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

   
  //const [currentPassword, setCurrentPassword] = useState('');
  //const [newPassword, setNewPassword] = useState('');
  const [newpassword, setNewpassword] = useState('');
  const [checked, setChecked] = useState(false);
  const [error, setError] = useState('');
  const [rstPassword, setResetPassword] = useState(false);

  const resetPassword = async () => {
    // e.preventDefault();
      console.log(resetlink,newpassword)
        axios.post(`${backendUrl}/pharmacy/resetpassword`,{ 
          resetlink,
          newpassword,
        }).then((response) => {
          console.log(response);
          // setResetPassword(true);
        }).catch((err) => {
          if (err.response && err.response.data) {
            console.log(err);// some reason error message
          }
        });
      
    //else {
      //console.log('Unchecked');
    //}
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
                        {/*<TextField
                            id="currentPassword"
                            label="Current Password"
                            type='password'
                            variant="outlined"
                            fullWidth
                        /> 
                        <FormControl className={clsx(classes.margin, classes.textField)} variant="outlined">
                            <InputLabel style={inputStyle} htmlFor="outlined-adornment-password">Current Password</InputLabel>
                            <OutlinedInput
                            id="outlined-adornment-password"
                            type={values.showPassword ? 'text' : 'password'}
                            value={values.password}
                            onChange={handleChange('password')}
                            
                            endAdornment={
                                <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                    edge="end"
                                >
                                {values.showPassword ? <Visibility /> : <VisibilityOff />}
                                </IconButton>
                                </InputAdornment>
                            }
                            labelWidth={200}
                        />
                        </FormControl>*/}
                    </Grid>

                    <Grid item xs={12}>
                        {/*<TextField
                            id="currentPassword"
                            label="Current Password"
                            type='password'
                            variant="outlined"
                            fullWidth
                        />*/}
                        {/* <FormControl className={clsx(classes.margin, classes.textField)} variant="outlined"> */}
                            <InputLabel style={inputStyle} htmlFor="outlined-adornment-password">New Password</InputLabel>
                            <TextField
                              variant="outlined"
                              // value={password}
                              onChange={(e) => setNewpassword(e.target.value)}
                              required
                              fullWidth
                              name="password"
                              label="Password"
                              type="password"
                              id="password"
                              size="small"
                            />
                        {/* </FormControl> */}
                    </Grid>

                    <Grid item xs={12}>
                        {/*<TextField
                            id="currentPassword"
                            label="Current Password"
                            type='password'
                            variant="outlined"
                            fullWidth
                        />*/}
                        {/* <FormControl className={clsx(classes.margin, classes.textField)} variant="outlined">
                            <InputLabel style={inputStyle} htmlFor="outlined-adornment-password">Confirm New Password</InputLabel>
                            <OutlinedInput
                            id="outlined-adornment-password"
                            type={values.showPassword ? 'text' : 'password'}
                            // value={password}
                            // onChange={(e) => setNewpassword(e.target.value)}
                            
                            endAdornment={
                                <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                    edge="end"
                                >
                                {values.showPassword ? <Visibility /> : <VisibilityOff />}
                                </IconButton>
                                </InputAdornment>
                            }
                            labelWidth={200}
                        />
                        </FormControl> */}
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