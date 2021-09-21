import React, { useState } from 'react';
import { Grid } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Avatar from '@material-ui/core/Avatar';
//import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import { TextField } from '@material-ui/core';
import Checkbox from '@material-ui/core/Checkbox';
import axios from 'axios';
import { useParams } from 'react-router-dom'
import { Redirect } from 'react-router-dom';
import { backendUrl } from '../../../urlConfig';
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

const ResetPassword = () => {

  const notify = () => toast.sucess('Password Reset Successful!', {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });

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
    console.log(resetlink, newpassword)
    axios.post(`${backendUrl}/resetcustomerpassword`, {
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

  if (rstPassword) {
    
    return <Redirect to="/customersignin" />;

  }

 
  const paperStyle = { padding: 20, height: '500px', width: '400px', margin: "20px auto" }
  const avatarStyle = { backgroundColor: '#126e82' }
  const gridStyle = { padding: 20 }
  const buttonStyle = { color: '#efe3e3', backgroundColor: '#126e82', margin: '30px 0', width: '100%', left: '50%' }
  const headingStyle = { color: '#126e82' };
  const inputStyle = { width: '700px' }

  return (

    <Grid style={gridStyle}>
      <Paper style={paperStyle}>
        <Grid align='center' style={gridStyle}>

          <h1 style={headingStyle}>Reset Password</h1>
        </Grid>

        <Grid container spacing={2}>
          <Grid item xs={12}>

          </Grid>

          <Grid item xs={12}>


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
          </Grid>




          <Grid item xs={6}>
            <Button type='submit' variant="contained" onClick={resetPassword} style={buttonStyle} href="">Submit</Button>
          </Grid>


        </Grid>

        <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      {/* Same as */}
      <ToastContainer />

      </Paper>

      
    </Grid>
  )
}

export default ResetPassword