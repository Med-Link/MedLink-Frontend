import React from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { backendUrl } from '../../urlConfig';
import { ToastContainer, toast } from 'react-toastify';
import { Grid } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';

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

const VerifyEmail = () => {
  const { token } = useParams();

  const classes = useStyles();
  const paperStyle = { padding: 20, height: '400px', width: '340px', margin: "20px auto" }
  const gridStyle = { padding: 20 }
  const buttonStyle = { color: '#efe3e3', backgroundColor: '#126e82', margin: '10px 0', width: '340px' }
  const headingStyle = { color: '#126e82', fontSize: '20px' };
  const paragraphStyle = { color: '#126e82', margin: '50px 0 0 0' };
  const grid2Style = { padding: 10 }
  const iconStyle = { color: '#126e82', height: '50px', width: '50px' }

  const verifyemail = async () => {
    const notify = () => toast.success(' Email Verified!', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

    axios.post(`${backendUrl}/verifyemail`, {
      token
    }).then((response) => {
      notify();
      console.log(response);
    }).catch((err) => {
      if (err.response && err.response.data) {
        console.log(err);// some reason error message
      }
    });
  };
  return (

    <Grid style={gridStyle}>

      <Paper elevation={10} style={paperStyle}>
        <Grid align='center' style={gridStyle}>
          <VerifiedUserIcon style={iconStyle} />
          <h1 style={headingStyle}>Verify Your Email Address</h1>
        </Grid>



        <Grid align='center' style={grid2Style}>

          <p style={paragraphStyle}>Click to verify your email.</p>
        </Grid>


        <Grid item xs={6}>
          <Button type='submit' onClick={verifyemail} variant="contained" style={buttonStyle} href="">Verify</Button>
        </Grid>
      </Paper>
      <Box mt={5}>
        <Copyright />
      </Box>

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
    </Grid>
  )
}

export default VerifyEmail