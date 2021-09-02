import React,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Paper from '@material-ui/core/Paper';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import AddressForm from './AddressForm';
import PaymentForm from './PaymentForm';
import Review from './Review';
import TotalBill from './TotalBill'
import { Grid } from '@material-ui/core';
import PropTypes from 'prop-types';
import axios from 'axios';
import { backendUrl } from '../../../urlConfig';
import { getInitialGridColumnsState } from '@material-ui/data-grid';



function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="">
        MedLink
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: 'relative',
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 600,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
  },
  stepper: {
    padding: theme.spacing(3, 0, 5),
  },
  buttons: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },
}));

const steps = ['Review your order', 'Total Bill','Delivery address' ];

function getStepContent(step,props,costdata) {

  switch (step) {
    case 0:
      return <Review products={props.products} />;
    case 1:
      return <TotalBill costs={costdata} />;
      // console.log(props)
      // // return 
    case 2:
      return <AddressForm />;
    // case 3:
    //   return <PaymentForm />;
    default:
      throw new Error('Unknown step');
  }
}

export default function Checkout(props) {
  const toolBarStyle = {backgroundColor: '#126e82' }
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const headerStyle = {color: '#efe3e3',fontWeigth: 'bold'}
  const btStyle = {color: '#efe3e3',backgroundColor: '#126e82'}
  const subHeaderStyle = {color: '#126e82',fontWeigth: 'bold'}

const [costdata, setCostdata] = useState([]);
  
  const calculatetotal = async() => {
    // const { costs } = props;

    const token = window.localStorage.getItem('token');
    
    console.log(token)
    const latitude = window.sessionStorage.getItem("latitude");
    const longitude = window.sessionStorage.getItem("longitude");
    
    axios.post(`${backendUrl}/order/findtotal`, {latitude:latitude, longitude:longitude, pharmacyid:props.products[0].pharmacyid, totalprice:props.products[0].totalprice}, {
      headers: {
        'Authorization': token ? `Bearer ${token}` : ''
      },
  }).then((response)=>{
      console.log(response);
      setCostdata(response.data);
      // costs();

  }).catch((err)=>{
      console.log(err);
  });
  // console.log(token)
  };

  const handleNext = () => {
    if(activeStep == 0){
      calculatetotal();
    }
    
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="absolute" color="default" className={classes.appBar}>
        <Toolbar style={toolBarStyle}>
          <Grid container>
          <Grid item xs={6} align='left'>
          <Typography variant="h6" style={headerStyle} noWrap>
            MedLink
          </Typography>
           
          </Grid>

          <Grid item xs={6} align='right'>
            <Button variant="outlined" href="/customer/RespondingOrders/" style={btStyle}>Back</Button>
          </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Typography component="h1" variant="h4" align="center" style={subHeaderStyle}>
            Checkout
          </Typography>
          <Stepper activeStep={activeStep} className={classes.stepper}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <React.Fragment>
            {activeStep === steps.length ? (
              <React.Fragment>
                <Typography variant="h5" gutterBottom style={subHeaderStyle}>
                  Thank you for your order.
                </Typography>
                <Typography variant="subtitle1">
                  Your order number is #2001539. We have emailed your order confirmation, and will
                  send you an update when your order has delivered.
                </Typography>
              </React.Fragment>
            ) : (
              <React.Fragment>
                {getStepContent(activeStep, props, costdata)}
                <div className={classes.buttons}>
                  {activeStep !== 0 && (
                    <Button style={btStyle} onClick={handleBack} className={classes.button}>
                      Back
                    </Button>
                  )}
                  <Button
                    variant="contained"
                    style={btStyle}
                    onClick={handleNext}
                    className={classes.button}
                  >
                    {activeStep === steps.length - 1 ? 'Place order' : 'Next'}
                  </Button>
                </div>
              </React.Fragment>
            )}
          </React.Fragment>
        </Paper>
        <Copyright />
      </main>
    </React.Fragment>
  );
}
Checkout.propTypes = {
  products: PropTypes.any,
  costs:PropTypes.any,
  // children: PropTypes.node.isRequired,
  // classes: PropTypes.object.isRequired,
};