import React from "react";
// react plugin for creating charts
import ChartistGraph from "react-chartist";
// @material-ui/core

import { makeStyles } from "@material-ui/core/styles";

import DateRange from "@material-ui/icons/DateRange";

import { Button } from "@material-ui/core";

// core components
import GridItem from "../../components/Dashboard/Grid/GridItem.js";
import GridContainer from "../../components/Dashboard/Grid/GridContainer.js";

import PhotoSteps from "../../components/pharmacy/PhotoSteps"

import Card from "../../components/Dashboard/Card/Card";
import CardBody from "../../components/Dashboard/Card/CardBody.js";
import CardFooter from "../../components/Dashboard/Card/CardFooter.js";



import styles from "../../assets/jss/material-dashboard-react/views/dashboardStyle";

import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Paper from '@material-ui/core/Paper';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';

import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import AddressForm from '../customer/payment/AddressForm';
import PaymentForm from '../customer/payment/PaymentForm';

import Review from '../customer/payment/Review';
import { Grid } from '@material-ui/core';


const useStyles = makeStyles(styles);

const steps = [''];

function getStepContent(step) {
  switch (step) {
    case 0:
      return <Review />;

    case 1:
      return <AddressForm />;
    case 2:
      return <PaymentForm />;
    default:
      throw new Error('Unknown step');
  }
}
export default function ClosedDealsDetails() {
  const classes = useStyles();

  const toolBarStyle = {backgroundColor: '#126e82' }

  const [activeStep, setActiveStep] = React.useState(0);
  const headerStyle = {color: '#efe3e3',fontWeigth: 'bold'}
  const btStyle = {color: '#efe3e3',backgroundColor: '#126e82'}
  const subHeaderStyle = {color: '#126e82',fontWeigth: 'bold'}

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={6}>

          <Card>
            <CardBody color="secondary" stats icon >
              <div className={classes.stats}>
                <h1>Michelle Fernando - 0768757722</h1>
              </div>
              <div className={classes.stats} style={{fontSize:20}}>
                <p>I Need this medicine except Codein Zulphet</p>
              </div>
            </CardBody>
            <CardFooter stats>
              <div className={classes.stats}>
                <DateRange />
                36 mins Ago
              </div>
            </CardFooter>
          </Card>


          <PhotoSteps />
        </GridItem>
        <GridItem xs={12} sm={12} md={6}>
          <Card>
            <CardBody color="primary" stats icon>
              <React.Fragment  padding={2}>
                <React.Fragment>
                  <GridItem>
                    <Typography component="h1" variant="h4" align="center" style={subHeaderStyle}>
                      Order Details
                    </Typography>
                  </GridItem>
                </React.Fragment>
                <React.Fragment>
                  <Grid container>
                    <Grid item md={6} sm={6} xs={6} >
                      <Typography variant="h6" style={subHeaderStyle}>
                        Date :
                      </Typography>
                      <Typography variant="h7" gutterBottom>
                        14/07/2021
                      </Typography>
                    </Grid>
                  </Grid>
                </React.Fragment>  
                <React.Fragment>
                  <Grid item >
                    <Typography variant="h6" gutterBottom style={subHeaderStyle}>
                      Order Summary :
                    </Typography>
                  </Grid>
                </React.Fragment>  
                <React.Fragment>
                  <Grid container>
                    <Grid item md={6} sm={6} xs={6} >
                      <Typography variant="body1">
                        Penadol
                      </Typography>
                    </Grid>
                    <Grid item md={6} sm={6} xs={6} >
                      <Typography variant="body1">
                        Rs.20.00
                      </Typography>
                    </Grid>
                  </Grid>
                  <Grid container>
                    <Grid item md={6} sm={6} xs={6} >
                      <Typography variant="body2" gutterBottom>
                        Card 1
                      </Typography>
                    </Grid>
                  </Grid>
                </React.Fragment>
                <React.Fragment>
                  <Grid container>
                    <Grid item md={6} sm={6} xs={6} >
                      <Typography variant="body1">
                        Amoxiline
                      </Typography>
                    </Grid>
                    <Grid item md={6} sm={6} xs={6} >
                      <Typography variant="body1">
                        Rs.50.00
                      </Typography>
                    </Grid>
                  </Grid>
                  <Grid container>
                    <Grid item md={6} sm={6} xs={6} >
                      <Typography variant="body2" gutterBottom>
                        Card 2
                      </Typography>
                    </Grid>
                  </Grid>
                </React.Fragment>
                <React.Fragment>
                  <Grid container>
                    <Grid item md={6} sm={6} xs={6} >
                      <Typography variant="body1">
                        Sitrizine
                      </Typography>
                    </Grid>
                    <Grid item md={6} sm={6} xs={6} >
                      <Typography variant="body1" >
                        Rs.50.00
                      </Typography>
                    </Grid>
                  </Grid>
                  <Grid container>
                    <Grid item md={6} sm={6} xs={6} >
                      <Typography variant="body2" gutterBottom>
                        14 tablets
                      </Typography>
                    </Grid>
                  </Grid>
                </React.Fragment>
              </React.Fragment>
              <React.Fragment >
                <Grid container  >
                  <Grid item md={6} sm={6} xs={6} >
                    <Typography variant="h6" gutterBottom>
                      Total
                    </Typography>
                  </Grid>
                  <Grid item md={6} sm={6} xs={6} >
                    <Typography variant="h6" gutterBottom>
                      Rs.120.00
                    </Typography>
                  </Grid>
                </Grid>
              </React.Fragment>
              <React.Fragment>
                <Grid container>
                  <Grid item md={6} sm={6} xs={6} >
                    <Typography variant="h6" gutterBottom style={subHeaderStyle}>
                      Delivery To :
                    </Typography>
                  {/* </Grid>
                  <Grid item md={6} sm={6} xs={6} > */}
                  <Typography variant="body2">
                      Michelle Fernando
                    </Typography>
                    <Typography variant="body2" >
                      Chapel Road, Colombo 04
                    </Typography>
                  </Grid>
                </Grid>
              </React.Fragment>
              


            </CardBody>
          </Card>
        </GridItem>


      </GridContainer>

    </div>
  );
}
