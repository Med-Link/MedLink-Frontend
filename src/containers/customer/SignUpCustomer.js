import React, { useState } from 'react';
import { backendUrl } from '../../urlConfig';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';

import Hidden from '@material-ui/core/Hidden';

import axios from 'axios';
import { Redirect } from 'react-router-dom';
import * as yup from 'yup';
import cust from '../../assets/images/cust.jpg';
import GridItem from '../../components/Dashboard/Grid/GridItem';
import GridContainer from '../../components/Dashboard/Grid/GridContainer';
import { customerSchema } from '../../validations/customerValidation';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="/">
        Medlink
      </Link>
      {' '}
      {new Date().getFullYear()}
      .
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(10),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(4),
    borderRadius: '25px',
    boxShadow: '2px 2px 2px 2px #ccc',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.primary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    backgroundColor: theme.palette.primary.main,
    margin: theme.spacing(2, 0, 1),
    width: '70%',
  },
  input: {
    display: 'none',
  },
  image: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '70%',
    // height:'auto',
    // maxHeight:'400px',
    margin: theme.spacing(4, 10),
    maxWidth: '600px',
  },

}));

const SignUpCustomer = () => {
  const notify = () => toast.error(' Signup Error!', {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });

  
  const classes = useStyles();

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [checked, setChecked] = useState(false);
  const [error, setError] = useState('');
  const [signedUp, setSignedUp] = useState(false);

  const signup = async (e) => {
    e.preventDefault();
    if (checked) {
      const form = {
        firstName,
        lastName,
        email,
        password,
      };
      const isValid = await customerSchema.isValid(form);
      if (isValid === true) {
        axios.post(`${backendUrl}/signup`, {
          firstName,
          lastName,
          email,
          password,
        }).then((response) => {
          console.log(response);
          setSignedUp(true);
        }).catch((err) => {
          if (err.response && err.response.data) {
            console.log(err);// some reason error message
          }
        });
      } else {
        // console.log(err);
        notify();
        setError('Signup Failed');
      }
    } else {
      console.log('Unchecked');
      notify();
    }
  };

  if (signedUp) {
    
    return <Redirect to="/customersignin" />;
    
  }

  return (
    <div>
      <GridContainer spacing={0}>
        <Hidden smDown>
          <GridItem xs={12} sm={12} md={7}>
            <img src={cust} className={classes.image} />
          </GridItem>
        </Hidden>
        <GridItem xs={12} sm={12} md={4} borderRadius={10}>

          <div className={classes.paper}>

            <Avatar className={classes.avatar}>
              <LockOutlinedIcon />
            </Avatar>

            <Typography component="h1" variant="h5">
              Customer Sign up
            </Typography>

            <form className={classes.form} noValidate>

              <Grid container spacing={2}>

                <Grid item xs={12}>
                  <TextField
                    autoComplete="pname"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    name="firstName"
                    variant="outlined"
                    required
                    fullWidth
                    id="fName"
                    label="First Name"
                    autoFocus
                    size="small"
                  />
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    required
                    fullWidth
                    id="Lname"
                    label="Last Name"
                    name="lName"
                    size="small"
                  />
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    size="small"
                  />
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    size="small"
                  />
                </Grid>
                <p>{Error}</p>

                {/* <Grid item xs={12}>
              <TextField
                variant="outlined"
                value ={location} onChange={(e) => setLocation(e.target.value)}
                required
                fullWidth
                id="location"
                label="Location URL"
                name="location"
                size="small"
              />
            </Grid> */}

                <Grid item xs={12}>
                  <FormControlLabel
                    onChange={(e) => setChecked(e.target.checked)}
                    control={<Checkbox value="allowExtraEmails" color="primary" />}
                    label="I agree to the Terms and Conditions"
                  />
                </Grid>

              </Grid>
              <Box
                xs={12}
                sm={12}
                md={12}
                alignItems="center"
                display="flex"
                justifyContent="center"
                direction="column"
                justify="center"
              >
                <Button
                  type="button"
                  fullWidth
                  variant="contained"
                  color="primary"
                  onClick={signup}
                  className={classes.submit}
                >
                  Sign Up
                </Button>
              </Box>
              <Grid container justify="flex-end">
                <Grid item>
                  <Link href="/customersignin" variant="body2">
                    Already have an account? Sign in
                  </Link>
                </Grid>
              </Grid>

            </form>
          </div>

        </GridItem>

      </GridContainer>
      <Box xs={12} sm={12} md={12}>
        <Copyright />
      </Box>
      <ToastContainer position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />


    </div>
  );
};
export default SignUpCustomer;
