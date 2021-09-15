import React, {useState} from 'react';
import { Redirect,useHistory } from 'react-router-dom';
import { backendUrl } from "../../urlConfig.js";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Hidden from '@material-ui/core/Hidden';

import GridContainer from '../../components/Dashboard/Grid/GridContainer';
import GridItem from '../../components/Dashboard/Grid/GridItem';
import Footer from '../../components/Dashboard/Footer/Footer';
import Map from '../../components/pharmacy/Map'

import pharmacist from '../../assets/images/pharmacist2.jpg';

import axios from 'axios';
import * as yup from 'yup';
import {pharmacySchema} from '../../validations/pharmacyValidation'
// import GoogleApiWrapper from '../../components/pharmacy/MapComponent'

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor : '#eee',
  },
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding:theme.spacing(3),
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
    margin: theme.spacing(2, 0, 1),
    width:'70%',
  },
  input: {
    // display: 'none',
    marginLeft:theme.spacing(5),
  },
  image: {
    alignItems: 'center',
    justifyContent: 'center',
    width:"75%",
    marginLeft:theme.spacing(8),
    padding:theme.spacing(2),
    marginTop:theme.spacing(3),
    maxWidth:'600px',
  },
  para:
  {
    marginTop:theme.spacing(4),
  },
  backButton: {
    marginRight: theme.spacing(3),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  loc:{
    marginTop: theme.spacing(-4),
  },
  

}));

const SignUpPharmacy=()=>{
  const notify = () => toast.error(' Signup Error!', {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    });
  let history = useHistory();

  const classes = useStyles();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [password, setPassword] = useState("");
  const [location, setLocation] = useState("");
  const [registrationDocs, setRegistrationDocs] = useState([]);
  



  const [checked, setChecked] = useState(false);
  const [error, setError] = useState("");
  const [signedUp, setSignedUp] = useState(false);
  
  const Signup =async(e)=>{
    

      e.preventDefault();
    const latitude = window.sessionStorage.getItem("pharmacylatitude");
    const longitude = window.sessionStorage.getItem("pharmacylongitude");
    const city = window.sessionStorage.getItem("pharmacycity");


      let form ={
        name: name,
        email:email,
        contactNumber:contactNumber,
        password:password,
        latitude:latitude,
        longitude:longitude,
        city:city,

        // registrationDocs:registrationDocs,
      };
      const isValid = await pharmacySchema.isValid(form);
      if(isValid===true){

            const form = new FormData();
          form.append("name", name);
          form.append("email", email);
          form.append("contactNumber", contactNumber);
          form.append("password", password );
          form.append("latitude", latitude);
          form.append("longitude", longitude);
          form.append("city", city);


          for (let pic of registrationDocs) {
            form.append("registrationDocs", pic);
          }
            if(checked){
            axios.post(`${backendUrl}/pharmacy/signup`, form).then((response)=>{
                console.log(response);
                // setSignedUp(true);
                history.push("/pharmacysignin");
            }).catch((err)=>{
                console.log(err);
                notify();
                setError("Signup Failed");
            });
            
        }else{
            console.log("Unchecked");
        }
      }else{
        console.log('signup error');
        notify()
      }  
  }

  // if(signedUp){
  //   // console.log("hhhhhhhhhhhhhhhhhhhhhhhhhh")
  //     return <Redirect to={'/pharmacysignin'} />
  // }

  const handleRegisterDocs = (e) => {
    setRegistrationDocs([...registrationDocs, e.target.files[0]]);
  };

  function getSteps() {
    return ['Enter Details', 'Select Location', 'Upload Documents','Complete Registration'];
  }
  
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  function getStepContent(stepIndex) {
    
    switch (stepIndex) {
        case 0:
            return (
                <div>
                    {/* <form className={classes.form} noValidate> */}
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
                                size="small"
                                />
                            </Grid>                            
                        </Grid>
                    {/* </form> */}
                </div>
            )
        case 1:
            return (
                <div>
                    {/* <form className={classes.form} noValidate> */}
                        <Grid container sm={12} className={classes.loc}>
                                <Map
                                center={{lat: 6.9271, lng: 79.8612}}
                                height='230px'
                                width='100%'
                                zoom={7} />
                        </Grid>
                    {/* </form> */}
                </div>
            )
        case 2:
            return (
                <div>
                {/* <form className={classes.form} noValidate> */}
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={5} md={5}>
                            <Typography variant="body2" display="block">
                            Medical Council Certificate *
                            </Typography>                
                        </Grid>
                        <Grid item xs={12}  sm={7} md={7}>
                            <input
                                accept="image/*"
                                onChange={handleRegisterDocs}
                                className={classes.input}
                                id="contained-button-file"
                                multiple
                                type="file"
                            />
                        </Grid>
                        
                        <Grid item xs={12} sm={5} md={5}>
                            <Typography variant="body2" display="block" >
                            Pharmaciest Licence *
                            </Typography>                
                        </Grid>
                        <Grid item xs={12} sm={7} md={7}>
                            <input
                            accept="image/*"
                            onChange={handleRegisterDocs}
                            className={classes.input}
                            id="contained-button-file"
                            multiple
                            type="file"
                            />
                        </Grid>

                        <Grid item xs={12} sm={5} md={5}>
                            <Typography variant="body2" display="block">
                            Business Registration Certificate *
                            </Typography>                
                        </Grid>
                        <Grid item xs={12} sm={7} md={7}>
                            <input
                            accept="image/*"
                            onChange={handleRegisterDocs}
                            className={classes.input}
                            id="contained-button-file"
                            multiple
                            type="file"
                            />
                        </Grid>
                    </Grid>
                    
                {/* </form> */}
                </div>
            )
        case 3:
            return (
              <div>
                {/* <form className={classes.form} noValidate> */}
                    <Grid container spacing={2}>
                      <Grid item xs={12}>
                        <FormControlLabel
                          onChange={(e) => setChecked(e.target.checked)}
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
                type="button"
                fullWidth
                variant="contained"
                color="primary"
                onClick={Signup}
                className={classes.submit}

              >
                Sign Up
              </Button>
              </Box>
                {/* </form> */}
              </div>
                
            )
    }
  }


  return (
    <div style={{overflow: "hidden"}}>
      <GridContainer spacing={0} >
        <Hidden smDown>
          <GridItem xs={12} sm={12} md={6}>
            <img src={pharmacist} className={classes.image} />
          </GridItem>
        </Hidden>
        <GridItem xs={12} sm={12} md={5}  borderRadius={10}>
          <div className={classes.paper}>
            <Avatar className={classes.avatar}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Pharmacy Sign up
            </Typography>
            <Stepper activeStep={activeStep} alternativeLabel>
                {steps.map((label) => (
                <Step key={label}>
                    <StepLabel>{label}</StepLabel>
                </Step>
                ))}
            </Stepper>
            <div>
            {activeStep === steps.length ? 
                    (
                        <div>
                            <Typography className={classes.instructions}>All steps completed</Typography>
                            <Button onClick={handleReset}>Reset</Button>
                        </div>
                    ) : 
                    (
                        <div>
                            <Typography className={classes.instructions}>
                            <form className={classes.form} noValidate>
                            {getStepContent(activeStep)}
                            </form>
                            </Typography>
                            <div>
                                <Button
                                    disabled={activeStep === 0}
                                    onClick={handleBack}
                                    className={classes.backButton}
                                >
                                    Back
                                </Button>
                                {/* <Button variant="contained" color="primary" onClick={handleNext}>
                                    {activeStep === steps.length - 1 ? 'Reset' : 'Next'}
                                </Button> */}
                                {activeStep === steps.length - 1 ?
                                (
                                  
                                    <Button type="button" variant="contained" color="primary" onClick={handleReset}>
                                        Reset
                                    </Button>
                                ) : 
                                (   
                                    <Button variant="contained" color="primary" onClick={handleNext}>
                                        Next
                                    </Button>)}
                            </div>
                        </div>
                    )
                }
            </div>
            <Grid container justify="flex-end" className={classes.para}>
                    <Grid item>
                        <Link href="/pharmacysignin" variant="body2">
                        Already have an account? Sign in
                        </Link>
                    </Grid>
            </Grid>
          </div>
        </GridItem>
      </GridContainer>
      <Box xs={12} sm={12} md={12} >
        <Footer />
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
}
export default SignUpPharmacy ;