import React, {useState} from 'react';

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

import axios from 'axios';
import { Redirect } from 'react-router-dom';

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
    marginTop: theme.spacing(1),
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
    justifyContent: 'flex-end',
    height:'100%',
    // height:'auto',
    // maxHeight:'400px',
    
    padding:theme.spacing(4),
    maxWidth:'900px',
  },
  

}));

const SignUpPharmacy=()=>{


  const classes = useStyles();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [password, setPassword] = useState("");
  const [location, setLocation] = useState("");
  const [registrationDocs, setRegistrationDocs] = useState("");
  const [registrationDocs1, setRegistrationDocs1] = useState("");
  const [registrationDocs2, setRegistrationDocs2] = useState("");



  const [checked, setChecked] = useState(false);
  const [error, setError] = useState("");
  const [signedUp, setSignedUp] = useState(false);
  
  const Signup =(e)=>{
      e.preventDefault();
      if(checked){
      axios.post('http://localhost:4000/api/pharmacy/signup', {
          name: name,
          email:email,
          contactNumber:contactNumber,
          password:password,
          registrationDocs:registrationDocs,
          registrationDocs:registrationDocs1,
          registrationDocs:registrationDocs2,

      }).then((response)=>{
          console.log(response);
          setSignedUp(true);

      }).catch((err)=>{
          console.log(err);
          setError("Signup error");
      });
      
  }else{
      console.log("Unchecked");
  }
  }

  if(signedUp){
      return <Redirect to={'/pharmacysignin'} />
  }

  
  return (
    <div>
    <GridContainer spacing={0} >
    <Hidden smDown>
      <GridItem xs={12} sm={12} md={7}>
        <img src={pharmacist} className={classes.image} />
      </GridItem>
      </Hidden>
      <GridItem xs={12} sm={12} md={5} spacing={3}  borderRadius={10}>

      <div className={classes.paper}>
        
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        
        <Typography component="h1" variant="h5">
          Pharmacy Sign up
        </Typography>
        
        <form className={classes.form} noValidate>
          
          <Grid container spacing={2}>
            
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="pname"
                value ={name} onChange={(e) => setName(e.target.value)}
                name="pharmacyName"
                variant="outlined"
                required
                fullWidth
                id="pharmacyName"
                label="Pharmacy Name"
                autoFocus
                size="small"
              />
            </Grid>
            
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                value ={contactNumber} onChange={(e) => setContactNumber(e.target.value)}
                required
                fullWidth
                id="pNumber"
                label="Mobile Number"
                name="pNumber"
                autoComplete="pnumber"
                size="small"
              />
            </Grid>
            
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                value ={email} onChange={(e) => setEmail(e.target.value)}
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
                value ={password} onChange={(e) => setPassword(e.target.value)}
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
              <TextField
                variant="outlined"
                value ={location} onChange={(e) => setLocation(e.target.value)}
                required
                fullWidth
                id="location"
                label="Location URL"
                name="location"
                autoComplete="location"
                size="small"
              />
            </Grid>
            
            <Grid item xs={12} sm={12} md={8} >
              <Typography variant="body2" display="block">
                Medical Council Certificate *
              </Typography>                
            </Grid>
            <Grid item xs={12}  sm={12} md={4}>
            <input
              accept="image/*"
              value ={registrationDocs} onChange={(e) => setRegistrationDocs(e.target.value)}
              className={classes.input}
              id="contained-button-file"
              multiple
              type="file"
            />
            <label htmlFor="contained-button-file">
              <Button 
                variant="contained" 
                component="span" 
                color="default"
                startIcon={<CloudUploadIcon />}>
              Upload
              </Button>
            </label>             
            </Grid>
            
            <Grid item xs={12} sm={12} md={8}>
              <Typography variant="body2" display="block" >
                Pharmaciest Licence *
              </Typography>                
            </Grid>
            <Grid item xs={12} sm={12} md={4}>
              <input
                accept="image/*"
                value ={registrationDocs1} onChange={(e) => setRegistrationDocs1(e.target.value)}
                className={classes.input}
                id="contained-button-file"
                multiple
                type="file"
              />
              <label htmlFor="contained-button-file">
                <Button 
                  variant="contained" 
                  component="span" 
                  color="default"
                  startIcon={<CloudUploadIcon />}>
                Upload
                </Button>
              </label>                 
            </Grid>

            <Grid item xs={12} sm={12} md={8}>
              <Typography variant="body2" display="block">
                Business Registration Certificate *
              </Typography>                
            </Grid>
            <Grid item xs={12} sm={12} md={4}>
              <input
                accept="image/*"
                value ={registrationDocs2} onChange={(e) => setRegistrationDocs2(e.target.value)}
                className={classes.input}
                id="contained-button-file"
                multiple
                type="file"
              />
              <label htmlFor="contained-button-file">
                <Button 
                  variant="contained" 
                  component="span" 
                  color="default"
                  startIcon={<CloudUploadIcon />}>
                Upload
                </Button>
              </label>                
            </Grid>
            
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="I agree to the Terms and Conditions"
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
            Sign Up
          </Button>
          </Box>
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="/pharmacysignin" variant="body2">
                Already have an account? Sign in
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
export default SignUpPharmacy ;