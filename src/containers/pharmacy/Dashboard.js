import React from "react";
// react plugin for creating charts

// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import CheckIcon from '@material-ui/icons/Check';
import DateRange from "@material-ui/icons/DateRange";
import Update from "@material-ui/icons/Update";

import HourglassEmptyIcon from '@material-ui/icons/HourglassEmpty';
import CancelPresentationIcon from '@material-ui/icons/CancelPresentation';


import Accessibility from "@material-ui/icons/Accessibility";
import Link  from "@material-ui/core/Link";


// core components
import GridItem from "../../components/Dashboard/Grid/GridItem.js";
import GridContainer from "../../components/Dashboard/Grid/GridContainer.js";
import Table from "../../components/Dashboard/Table/Table.js";

import CustomTabs from "../../components/Dashboard/CustomTabs/CustomTabs.js";
import Card from "../../components/Dashboard/Card/Card";
import CardHeader from "../../components/Dashboard/Card/CardHeader.js";
import CardIcon from "../../components/Dashboard/Card/CardIcon.js";
import CardBody from "../../components/Dashboard/Card/CardBody.js";
import CardFooter from "../../components/Dashboard/Card/CardFooter.js";
import Button from "../../components/Dashboard//CustomButtons/Button";
import ReceiptIcon from '@material-ui/icons/Receipt';

import { bugs, website, server } from "../../variables/general.js";

// import {
//   dailySalesChart,
//   emailsSubscriptionChart,
//   completedTasksChart,
// } from "../../variables/charts.js";

import styles from "../../assets/jss/material-dashboard-react/views/dashboardStyle";

const useStyles = makeStyles(styles);

export default function Dashboard() {
  const classes = useStyles();
  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="success" stats icon>
              <CardIcon color="danger">
                <ReceiptIcon />
              </CardIcon>
              <p className={classes.cardCategory}>Orders</p>
              <h3 className={classes.cardTitle}>1</h3>
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
                <CheckIcon />
              </CardIcon>
              <p className={classes.cardCategory}>Confirmed</p>
              <h3 className={classes.cardTitle}>+2</h3>
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
            <CardHeader color="info" stats icon>
              <CardIcon color="success">
                <CancelPresentationIcon />
              </CardIcon>
              <p className={classes.cardCategory}>Closed Deals</p>
              <h3 className={classes.cardTitle}>3</h3>
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
        <GridItem xs={12} sm={12} md={6}>
          <CustomTabs
            headerColor="primary"
            tabs={[
              {
                tabName: "Re-Order Items",
                // tabIcon: BugReport,
                tabContent: (
                  <Card>
                    <CardBody>
                      <Table
                        tableHeaderColor="warning"
                        tableHead={["MedID", "Med Name", "Current Quantity"]}
                        tableData={[
                          ["M004", "Panadene 10mg", "20" ],
                          ["M008", "Domperidone 5mg", "20" ],
                          ["M010", "Siddalepa 50ml", "5" ],
                        ]}
                      />
                    </CardBody>
                  </Card>
                ),
              },
              {
                tabName: "Out of Stock Items",
                // tabIcon: BugReport,
                tabContent: (
                  <Card>
                    <CardBody>
                      <Table
                        tableHeaderColor="warning"
                        tableHead={["MedID", "Med Name"]}
                        tableData={[
                          ["M003", "Ventoline 2mg"],
                          ["M005", "Bandage"],
                          ["M006", "Insuline Syringes 40 ui"],
                        ]}
                      />
                    </CardBody>
                  </Card>
                ),
              },
            ]}
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={6}>
          <Card>
            <CardHeader color="primary">
              <h4 className={classes.cardTitleWhite}>New Orders</h4>
              <p className={classes.cardCategoryWhite}>
                Today
              </p>
            </CardHeader>
            <CardBody>
              <Table
                tableHeaderColor="primary"
                tableHead={["Order ID", "CustomerName"]}
                tableData={[
                  ["MO2001",
                    "Michelle Fernando",
                    
                  ],
                ]}
              />
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}
