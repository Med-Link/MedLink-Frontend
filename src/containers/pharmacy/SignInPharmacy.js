import React from 'react';
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
import GridContainer from '../../components/Dashboard/Grid/GridContainer';
import GridItem from '../../components/Dashboard/Grid/GridItem';

import Hidden from '@material-ui/core/Hidden';

import pharmacist from '../../assets/images/pharmacist2.jpg';

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
    backgroundColor : '#eee',
  },
  paper: {
    marginTop: theme.spacing(15),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding:theme.spacing(4),
    borderRadius: '25px',
    boxShadow: `2px 2px 2px 2px #ccc`,
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.primary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(2),
  },
  submit: {
    margin: theme.spacing(3, 0, 1),
    width:'70%',
  },
  /*label:{
    marginLeft:theme.spacing(0),
  // },*/
  // back:{
  //   backgroundColor: "#eee",
  //   marginTop:theme.spacing(1),
  //   margin:theme.spacing(1,1,1),
  //   height:'small',
  // },
  input: {
    display: 'none',
  },
  image: {
    alignItems: 'center',
    justifyContent: 'center',
    width:"100%",
    // height:'auto',
    // maxHeight:'400px',
    
    padding:theme.spacing(4),
    maxWidth:'600px',
  },
  

}));

export default function SignUp() {
  const classes = useStyles();

  return (
    <div>
    <GridContainer spacing={0} >
    <Hidden smDown>
      <GridItem xs={12} sm={12} md={7}>
        <img src={pharmacist} className={classes.image} />
      </GridItem>
      </Hidden>
      <GridItem xs={12} sm={12} md={4} spacing={3}  borderRadius={10}>

      <div className={classes.paper}>
        
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        
        <Typography component="h1" variant="h5">
          Pharmacy SignIn
        </Typography>
        
        <form className={classes.form} noValidate>
          
          <Grid container spacing={2}>
            
            
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                size="small"
              />
            </Grid>
            
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                size="small"
              />
            </Grid>
            
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="Remember Me"
              />
            </Grid>

          </Grid>
          <Box xs={12} sm={12} md={12}
          alignItems="center" 
          display="flex" 
          justifyContent="center"
          direction="column"
          justify="center">
            <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}

          >
            Sign In
          </Button>
          </Box>
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="/pharmacysignup" variant="body2">
                Do not have an account? Sign Up
              </Link>
            </Grid>
          </Grid>
          
        </form>
      </div>
      
      
      </GridItem>
      
      </GridContainer>
      <Box xs={12} sm={12} md={12} >
        <Copyright />
      </Box>
      </div>
  );
}
