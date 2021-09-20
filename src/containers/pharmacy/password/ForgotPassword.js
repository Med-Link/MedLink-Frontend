import React, { useState } from 'react';
import axios from 'axios';
import { backendUrl } from '../../../urlConfig.js';
import { Redirect } from 'react-router-dom';
import { Grid } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import GridItem from "../../../components/Dashboard/Grid/GridItem.js";
import GridContainer from "../../../components/Dashboard/Grid/GridContainer.js";
import { TextField } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
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

const ForgotPassword = () => {

  const paperStyle = { padding: 20, height: '500px', width: '340px', margin: "20px auto" }
  const gridStyle = { padding: 20 }
  const buttonStyle = { color: '#efe3e3', backgroundColor: '#126e82', margin: '10px 0', width: '340px' }
  const headingStyle = { color: '#126e82', fontSize: '20px' };
  const paragraphStyle = { color: '#126e82', margin: '50px 0 0 0' };
  const paragraphStyle1 = { color: '#126e82' };
  const grid2Style = { padding: 10 }
  const iconStyle = { color: '#126e82', height: '50px', width: '50px' }
  const textFeildStyle = { height: '50px' }

  const [email, setEmail] = useState("");

  const forgotpassword = () => {

    const token = window.localStorage.getItem('token');

    axios.post(`${backendUrl}/pharmacy/forgotpassword`, { email: email }, {
      headers: {
        'Authorization': token ? `Bearer ${token}` : ''
      },
    }).then((response) => {
      console.log(response);
      return <Redirect to="/" />;

    }).catch((err) => {
      console.log(err);

    });

  };

  return (

    <Grid style={gridStyle}>

      <Paper elevation={10} style={paperStyle}>
        <Grid align='center' style={gridStyle}>
          <VpnKeyIcon style={iconStyle} />
          <h1 style={headingStyle}>Forgot Your Password?</h1>
        </Grid>

        <GridContainer>
          <GridItem xs={12}>
            <p style={paragraphStyle1}>Enter Your Email Address Which Is Send The Verification Code :</p>
          </GridItem>
          <GridItem xs={12}>
            <TextField
              id="email"
              label="email"
              style={textFeildStyle}
              InputProps={{
                readOnly: false,
              }}
              onChange={(e) => setEmail(e.target.value)}
              variant="outlined"
              fullWidth
            />
          </GridItem>
        </GridContainer>

        <Grid align='center' style={grid2Style}>

          <p style={paragraphStyle}>Click here to send password reset link to your email.</p>
        </Grid>


        <Grid item xs={6}>
          <Button type='submit' onClick={() => forgotpassword()} variant="contained" style={buttonStyle} href="">Send Recovery Link</Button>
        </Grid>
      </Paper>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Grid>
  )
}

export default ForgotPassword