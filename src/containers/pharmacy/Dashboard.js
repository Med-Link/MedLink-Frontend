import React, { useState } from "react";
import { backendUrl } from "../../urlConfig.js";
import axios from "axios";
// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import CheckIcon from '@material-ui/icons/Check';
import DateRange from "@material-ui/icons/DateRange";
import Update from "@material-ui/icons/Update";
import CancelPresentationIcon from '@material-ui/icons/CancelPresentation';
import ReceiptIcon from '@material-ui/icons/Receipt';

// core components
import GridItem from "../../components/Dashboard/Grid/GridItem.js";
import GridContainer from "../../components/Dashboard/Grid/GridContainer.js";
import Card from "../../components/Dashboard/Card/Card";
import CardHeader from "../../components/Dashboard/Card/CardHeader.js";
import CardIcon from "../../components/Dashboard/Card/CardIcon.js";
import CardBody from "../../components/Dashboard/Card/CardBody.js";
import CardFooter from "../../components/Dashboard/Card/CardFooter.js";
import styles from "../../assets/jss/material-dashboard-react/views/dashboardStyle";
import OutOfStockTable from "../../components/pharmacy/OutOfStockTable.js";
import IncomeGrowthChart from "../../components/pharmacy/IncomeGrowthChart.js";
import OrderRequestsRateChart from "../../components/pharmacy/OrderRequestRate.js";

const useStyles = makeStyles(styles);



export default function Dashboard() {
  const classes = useStyles();

  //calculate monthly income
 const [monthlyIncome, setmonthlyIncome] = useState([]);

 const getmonthlyIncome= () => {
  const token = window.localStorage.getItem('token');
  axios.get(`${backendUrl}/pharmacy/monthlyincome`, {
    headers: {
      Authorization: token ? `Bearer ${token}` : "",
    },
  }).then(res => {
    if(res.data.result==0){
      setmonthlyIncome(0);
  }else{
    const results = res.data.result[0];
    // console.log(results);
    setmonthlyIncome(results);
    }
  })
}


 //count order requests backend connection
 const [newOrders, setNewOrders] = useState([]);

 const getNewOrders= () => {
   const token = window.localStorage.getItem('token');
   axios.get(`${backendUrl}/pharmacy/getOrderReqs`, {
     headers: {
       Authorization: token ? `Bearer ${token}` : "",
     },
   }).then(res => {
     const results = res.data.allOrders.rows;
    //  console.log(results);
     setNewOrders(results.length);
   })
 }

 //count confirmed orders backend connection
 const [acceptedOrders, setAcceptedOrders] = useState([]);

const getAcceptedOrders = () => {
  const token = window.localStorage.getItem('token');
  axios.get(`${backendUrl}/pharmacy/countacceptedorders`, {
    headers: {
      Authorization: token ? `Bearer ${token}` : "",
    },
  }).then(res => {
    const results = res.data.acceptcount.rows[0];
    // console.log(results);
    setAcceptedOrders(results);
  })
}
//count complete orders backend connection
const [completeOrders, setCompleteOrders] = useState([]);

const getCompleteOrders = () => {
  const token = window.localStorage.getItem('token');
  axios.get(`${backendUrl}/pharmacy/countcloseddeals`, {
    headers: {
      Authorization: token ? `Bearer ${token}` : "",
    },
  }).then(res => {
    const results = res.data.alldeals.rows[0];
    // console.log(results);
    setCompleteOrders(results);
  })
}

React.useEffect(() => {
  getmonthlyIncome();
  getNewOrders();
  getAcceptedOrders();
  getCompleteOrders();
  

}, []);

  return (
    <div>
      <GridContainer>
      <GridItem item={true} xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="success" stats icon>
              <CardIcon color="warning">
                <ReceiptIcon />
              </CardIcon>
              <p className={classes.cardCategory}>Monthly Income</p>
              <h3 className={classes.cardTitle}>{monthlyIncome.sum}</h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <DateRange />
                {new Date().toLocaleString("en-US", { month: "long" })}
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem item={true} xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="success" stats icon>
              <CardIcon color="danger">
                <ReceiptIcon />
              </CardIcon>
              <p className={classes.cardCategory}>New Orders</p>
              <h3 className={classes.cardTitle}>{newOrders}</h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <DateRange />
                Just Updated
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem item={true} xs={12} sm={6} md={3}>
        <Card>
            <CardHeader color="info" stats icon>
              <CardIcon color="info">
                <CheckIcon />
              </CardIcon>
              <p className={classes.cardCategory}>Confirmed Orders</p>
              <h3 className={classes.cardTitle}>{acceptedOrders.count}</h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <Update />
                Just Updated
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem item={true} xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="info" stats icon>
              <CardIcon color="success">
                <CancelPresentationIcon />
              </CardIcon>
              <p className={classes.cardCategory}>Closed Deals</p>
              <h3 className={classes.cardTitle}>{completeOrders.count}</h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <Update />
                Just Updated
              </div>
            </CardFooter>
          </Card>
        </GridItem>
      </GridContainer>

      <GridContainer>
        <GridItem item={true} xs={12} sm={3} md={3}>
          <OutOfStockTable/>
        </GridItem>
        <GridItem item={true} xs={12} sm={6} md={4}>
          <Card>
            <CardHeader >
            </CardHeader>
            <CardBody>
              <IncomeGrowthChart/>
            </CardBody>
            <CardFooter chart>
            <h4 className={classes.cardTitle}>
            Transaction Growth during the Month {new Date().toLocaleString("en-US", { month: "long" })}</h4>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem item={true} xs={12} sm={6} md={4}>
          <Card>
            <CardHeader >
            </CardHeader>
            <CardBody>
              <OrderRequestsRateChart/>
            </CardBody>
            <CardFooter chart>
            <h4 className={classes.cardTitle}>
            Order Request Rate Growth during the Month {new Date().toLocaleString("en-US", { month: "long" })}</h4>
            </CardFooter>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}
