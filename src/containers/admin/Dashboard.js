/* eslint-disable react/jsx-key */
import React,{useState} from "react";
import axios from 'axios';
import { backendUrl } from "../../urlConfig.js";

// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import Store from "@material-ui/icons/Store";
import DateRange from "@material-ui/icons/DateRange";
import Update from "@material-ui/icons/Update";
import Accessibility from "@material-ui/icons/Accessibility";
import Notifications from "@material-ui/icons/Notifications";

import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
// core components
import GridItem from "../../components/Dashboard/Grid/GridItem.js";
import GridContainer from "../../components/Dashboard/Grid/GridContainer.js";
import Card from "../../components/Dashboard/Card/Card";
import CardHeader from "../../components/Dashboard/Card/CardHeader.js";
import CardIcon from "../../components/Dashboard/Card/CardIcon.js";
import CardBody from "../../components/Dashboard/Card/CardBody.js";
import CardFooter from "../../components/Dashboard/Card/CardFooter.js";
import SalesChart from "../../components/admin/SalesChart.js";
import styles from "../../assets/jss/material-dashboard-react/views/dashboardStyle";

const useStyles = makeStyles(styles);

export default function Dashboard() {
  const classes = useStyles();
  const [data, setData] = useState();
  const [datapharm, setDatapharm] = useState();
  const [datapharmreq, setDatapharmReq] = useState();
  const [totalIncome, setTotalIncome] = useState();

  const getdata =() =>{
    const token = window.localStorage.getItem('token');
      axios.get(`${backendUrl}/admin/countcustomer`,{
        headers: {
          'Authorization': token ? `Bearer ${token}` : ''
        }
        })
      .then(res =>{

        const results =  res.data.row;
        //  console.log(results);
        setData(results);
      })
    
  }
  const getdata1 =async() =>{
    const token = window.localStorage.getItem('token');
    // console.log('xxxxx')
     await axios.get(`${backendUrl}/admin/countpharmacy`,{
        headers: {
          'Authorization': token ? `Bearer ${token}` : ''
        }
        })
      .then(res =>{
        const results =  res.data.row;
        //  console.log(results);
        setDatapharm(results);
      },[])
    
  }
  const getdata2 =async() =>{
    const token = window.localStorage.getItem('token');
     await axios.get(`${backendUrl}/admin/viewpharmacyrequests`,{
        headers: {
          'Authorization': token ? `Bearer ${token}` : ''
        }
        })
      .then(res =>{
        const results =  res.data.result.length; 
        setDatapharmReq(results);
      },[])
    
  }
  const gettotalincome =() =>{
    const token = window.localStorage.getItem('token');
      axios.get(`${backendUrl}/admin/totalmonthlyincome`,{
        headers: {
          'Authorization': token ? `Bearer ${token}` : ''
        }
        })
      .then(res =>{
        const results =res.data.result[0];
        // console.log(results);
        setTotalIncome(results.sum);
      })
  }
  
  React.useEffect(()=>{
    getdata();
    getdata1();
    getdata2();
    gettotalincome();
  });
  
  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="primary" stats icon>
              <CardIcon color="primary">
                <MonetizationOnIcon />
              </CardIcon>
              <p className={classes.cardCategory}>Revenue</p>
              <h3 className={classes.cardTitle}>Rs.{totalIncome}/=</h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <DateRange />
                {new Date().toLocaleString("en-US", { month: "long" })}
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={3}>
        <Card>
            <CardHeader color="info" stats icon>
              <CardIcon color="info">
                <Store />
              </CardIcon>
              <p className={classes.cardCategory}>Pharmacies</p>
              <h3 className={classes.cardTitle}>{datapharm}</h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <Update />
                Just Updated
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="success" stats icon>
              <CardIcon color="success">
                <Accessibility />
              </CardIcon>
              <p className={classes.cardCategory}>Customers</p>
              <h3 className={classes.cardTitle}>{data}</h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <Update />
                Just Updated
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="success" stats icon>
              <CardIcon color="rose">
                <Notifications />
              </CardIcon>
              <p className={classes.cardCategory}>New Pharmacy Requests</p>
              <h3 className={classes.cardTitle}>{datapharmreq}</h3>
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
      <GridItem xs={12} sm={5} md={5}>
          <Card>
            <CardHeader>
            <h4 className={classes.cardTitle}>Monthly Sales of Each Registered Pharmacy</h4>

            </CardHeader>
            <CardBody>
            <SalesChart/>

            </CardBody>
          </Card>
        </GridItem>
        {/* <GridItem xs={12} sm={6} md={6}>
          <Card>
            <CardHeader color="success" stats icon>
            <SalesChart/>
            </CardHeader>
            <CardBody>
              <h4 className={classes.cardTitle}>Monthly Sales</h4>
              <p className={classes.cardCategory}>
                <span className={classes.successText}>
                  <ArrowUpward className={classes.upArrowCardCategory} /> 55%
                </span>{" "}
                increase in today sales.
              </p>
            </CardBody>
            <CardFooter chart>
              <div className={classes.stats}>
                <AccessTime /> updated 4 minutes ago
              </div>
            </CardFooter>
          </Card>
        </GridItem> */}
      </GridContainer>
    </div>
  );
}
