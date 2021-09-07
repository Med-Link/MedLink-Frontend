/* eslint-disable react/jsx-key */
import React,{useState} from "react";
import axios from 'axios';
import { backendUrl } from "../../urlConfig.js";
import ChartistGraph from "react-chartist";

// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import Store from "@material-ui/icons/Store";
import DateRange from "@material-ui/icons/DateRange";
import Update from "@material-ui/icons/Update";
import Accessibility from "@material-ui/icons/Accessibility";
import ArrowUpward from "@material-ui/icons/ArrowUpward";
import AccessTime from "@material-ui/icons/AccessTime";
import AnnouncementIcon from '@material-ui/icons/Announcement';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
// core components
import GridItem from "../../components/Dashboard/Grid/GridItem.js";
import GridContainer from "../../components/Dashboard/Grid/GridContainer.js";
import Table from "../../components/Dashboard/Table/Table.js";
import Card from "../../components/Dashboard/Card/Card";
import CardHeader from "../../components/Dashboard/Card/CardHeader.js";
import CardIcon from "../../components/Dashboard/Card/CardIcon.js";
import CardBody from "../../components/Dashboard/Card/CardBody.js";
import CardFooter from "../../components/Dashboard/Card/CardFooter.js";
import Button from "../../components/Dashboard/CustomButtons/Button";
import {dailySalesChart} from "../../components/admin/DailySalesChart";
import styles from "../../assets/jss/material-dashboard-react/views/dashboardStyle";

const useStyles = makeStyles(styles);

export default function Dashboard() {
  const classes = useStyles();
  const [data, setData] = useState();
  const [datapharm, setDatapharm] = useState();
  const [datapharmreq, setDatapharmReq] = useState();

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
  React.useEffect(()=>{
    getdata();
    getdata1();
    getdata2();

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
              <h3 className={classes.cardTitle}>$34,245</h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <DateRange />
                Last 24 Hours
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
                <AnnouncementIcon />
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
      <GridItem xs={12} sm={6} md={6}>
          <Card>
            <CardHeader color="success" stats icon>
            <ChartistGraph
                className="ct-chart"
                data={dailySalesChart.data}
                type="Line"
                options={dailySalesChart.options}
                listener={dailySalesChart.animation}
              />
            </CardHeader>
            <CardBody>
              <h4 className={classes.cardTitle}>Daily Sales</h4>
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
        </GridItem>
      </GridContainer>
    </div>
  );
}




// <GridItem xs={12} sm={12} md={6}>
//           <Card>
//             <CardHeader color="primary">
//               <h4 className={classes.cardTitleWhite}>Pharmacy Registration Requests</h4>
//               <p className={classes.cardCategoryWhite}>
//                 on July 2021
//               </p>
//             </CardHeader>
//             <CardBody>
//               <Table
//                 tableHeaderColor="primary"
//                 tableHead={["ID", "Name", "District", "Action"]}
//                 tableData={[
//                   ["1", "Micael Medcare", "Colombo",
//                   <Link variant="h6" underline="none" href="pharmacyrequests/">
//                     <Button color="primary" >View</Button>
//                   </Link> ],
//                   ["2", "Minerva Pharmacy", "Puttalam",
//                   <Link variant="h6" underline="none" href="pharmacyrequests/">
//                     <Button color="primary">View</Button>
//                   </Link> ],
//                 ]}
//               />
//             </CardBody>
//           </Card>
//         </GridItem>
