import React from 'react';
import { Grid } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';
//import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import { TextField } from '@material-ui/core';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import FilledInput from '@material-ui/core/FilledInput';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import VpnKeyIcon from '@material-ui/icons/VpnKey';

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
      width: '85%',
    },
  }));

const ForgotPassword=()=>{

    const classes = useStyles();
/*const [values, setValues] = React.useState({
    amount: '',
    password: '',
    weight: '',
    weightRange: '',
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };*/

    const paperStyle={padding :20,height:'500px',width:'340px', margin:"20px auto"}
    const avatarStyle={backgroundColor: '#126e82'}
    const gridStyle={padding: 20}
    const buttonStyle={color: '#efe3e3',backgroundColor: '#126e82', margin: '30px 0', width:'340px'}
    const headingStyle = {color: '#126e82',fontSize: '20px'};
    const paragraphStyle = {color: '#126e82'};
    const inputStyle = {width: '700px'}
    const grid2Style={padding: 10}
    const iconStyle = {color: '#126e82',height:'50px',width:'50px'}

    return(
        
        <Grid style={gridStyle}>
             
            <Paper elevation={10} style={paperStyle}>
                <Grid align='center' style={gridStyle}>
                    <VpnKeyIcon style={iconStyle}/>
                    <h1 style={headingStyle}>Forgot Your Password?</h1>
                </Grid>

                <Grid align='center' style={grid2Style}>
                     
                    <p style={paragraphStyle}>Click here to send password reset link to your email.</p>
                </Grid>

                 
                     
                     

                    <Grid item xs={6}>
                        <Button type='submit' variant="contained" style={buttonStyle} href="">Send Recovery Link</Button>
                    </Grid>

                     
                

                 
                
            </Paper>
            <Box mt={5}>
                <Copyright />
            </Box>
        </Grid>
    )
}

export default ForgotPassword