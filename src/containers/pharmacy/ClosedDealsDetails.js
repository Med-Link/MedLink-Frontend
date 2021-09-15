/* eslint-disable react/jsx-key */
import React, { useState } from "react";
import { backendUrl } from "../../urlConfig.js";
import axios from "axios";

// react plugin for creating charts
import ChartistGraph from "react-chartist";
// @material-ui/core

import { makeStyles } from "@material-ui/core/styles";
import { Table, TableHead, TableBody, TableCell, TableRow } from "@material-ui/core";
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

  const toolBarStyle = { backgroundColor: '#126e82' }

  const [activeStep, setActiveStep] = React.useState(0);
  const headerStyle = { color: '#efe3e3', fontWeigth: 'bold' }
  const btStyle = { color: '#efe3e3', backgroundColor: '#126e82' }
  const subHeaderStyle = { color: '#126e82', fontWeigth: 'bold' }

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  // --------------------------------

  const [data, setData] = useState([]);
  const getdata = () => {
    const token = window.localStorage.getItem('token');

    axios.get(`${backendUrl}/pharmacy/viewallcloseddeals`, {
      headers: {
        Authorization: token ? `Bearer ${token}` : "",
      },
    }).then(res => {
      const results = res.data.result;
      console.log(results);
      setData(results);
    })
  }

  React.useEffect(() => {
    getdata();
  }, []);

  // ------------------------------------

  const columns = [
    { id: 'medname', label: 'Order ID' },
    { id: 'quanity', label: 'Description' },
    { id: 'price', label: 'Customer ID' },
  ];
  const rows = data;

  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={6}>

          <Card>
            <CardBody color="secondary" stats icon >

              <div className={classes.stats}>
                <h1>{data.orderid}</h1>


              </div>
              <div className={classes.stats} style={{ fontSize: 20 }}>
                <p>{data.description}</p>
              </div>
            </CardBody>
            <CardFooter stats>
              <div className={classes.stats}>
                <DateRange />
                {data.date}
              </div>
            </CardFooter>
          </Card>


          <PhotoSteps />
        </GridItem>
        <GridItem xs={12} sm={12} md={6}>
          <Card>
            <CardBody color="primary" stats icon>
              <React.Fragment padding={2}>
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
                        {data.date}
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
                      <Table>
                        <TableHead>
                          <TableRow>
                            {columns.map((column) => (
                              <TableCell style={{ color: '#213458', backgroundColor: "white" }}
                                key={column.id}
                                align={column.align}
                              >
                                {column.label}
                              </TableCell>
                            ))}
                          </TableRow>
                        </TableHead>
                        <TableBody >
                          {data.map((row) => {
                            return (
                              <TableRow>
                                <TableCell align="left">
                                  {row.name}
                                </TableCell>
                                <TableCell align="left">
                                  {row.email}
                                </TableCell>
                                <TableCell align="left">
                                  {row.contactnumber}
                                </TableCell>

                              </TableRow>
                            );
                          }
                          )
                          }
                        </TableBody>

                      </Table>
                    </Grid>
                  </Grid>
                </React.Fragment>
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
                      {data.firstname+" "+data.lastname}
                    </Typography>
                    <Typography variant="body2" >
                      {data.location}
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
