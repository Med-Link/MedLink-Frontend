import React from "react";
// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import Store from "@material-ui/icons/Store";
import DateRange from "@material-ui/icons/DateRange";
import Update from "@material-ui/icons/Update";
import Accessibility from "@material-ui/icons/Accessibility";
import BugReport from "@material-ui/icons/BugReport";
import Code from "@material-ui/icons/Code";
import Cloud from "@material-ui/icons/Cloud";
import Link  from "@material-ui/core/Link";
// core components
import GridItem from "../../components/Dashboard/Grid/GridItem.js";
import GridContainer from "../../components/Dashboard/Grid/GridContainer.js";
import Table from "../../components/Dashboard/Table/Table.js";
import Tasks from "../../components/Dashboard/Tasks/Tasks.js";
import CustomTabs from "../../components/Dashboard/CustomTabs/CustomTabs.js";
import Card from "../../components/Dashboard/Card/Card";
import CardHeader from "../../components/Dashboard/Card/CardHeader.js";
import CardIcon from "../../components/Dashboard/Card/CardIcon.js";
import CardBody from "../../components/Dashboard/Card/CardBody.js";
import CardFooter from "../../components/Dashboard/Card/CardFooter.js";
import Button from "../../components/Dashboard//CustomButtons/Button";
import Switch from "../../components/Dashboard/CustomButtons/Switch";



import { bugs, website, server } from "../../variables/general.js";

import styles from "../../assets/jss/material-dashboard-react/views/dashboardStyle";

const useStyles = makeStyles(styles);

export default function Dashboard() {
  const classes = useStyles();
  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="primary" stats icon>
              <CardIcon color="primary">
                <Store />
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
                <Accessibility />
              </CardIcon>
              <p className={classes.cardCategory}>Pharmacies</p>
              <h3 className={classes.cardTitle}>+245</h3>
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
              <CardIcon color="info">
                <Accessibility />
              </CardIcon>
              <p className={classes.cardCategory}>Customers</p>
              <h3 className={classes.cardTitle}>+245</h3>
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
          <Card>
            <CardHeader color="primary">
              <h4 className={classes.cardTitleWhite}>Pharmacy Registration Requests</h4>
              <p className={classes.cardCategoryWhite}>
                on July 2021
              </p>
            </CardHeader>
            <CardBody>
              <Table
                tableHeaderColor="warning"
                tableHead={["ID", "Name", "District", "Action"]}
                tableData={[
                  ["1", "Micael Medcare", "Colombo",
                  <Link variant="h6" underline="none" href="pharmacyrequests/">
                    <Button color="primary" >View</Button>
                  </Link> ],
                  ["2", "Minerva Pharmacy", "Puttalam",
                  <Link variant="h6" underline="none" href="pharmacyrequests/">
                    <Button color="primary">View</Button>
                  </Link> ],
                ]}
              />
            </CardBody>
          </Card>
        </GridItem>
          <GridItem xs={12} sm={12} md={6}>
          <Card>
            <CardHeader color="info">
              <h4 className={classes.cardTitleWhite}>Employees Stats</h4>
              <p className={classes.cardCategoryWhite}>
                on July 2021
              </p>
            </CardHeader>
            <CardBody>
              <Table
                tableHeaderColor="warning"
                tableHead={["ID", "Name","Activate"]}
                tableData={[
                  ["Admin2", "Sandali Perera",<Switch color="primary" inputProps={{ 'aria-label': 'primary checkbox' }} />],
                  ["Admin3", "Akila De Silva",<Switch color="primary" inputProps={{ 'aria-label': 'primary checkbox' }} />],
                  ["Admin4", "Piyumi Senarath",<Switch color="primary" inputProps={{ 'aria-label': 'primary checkbox' }} />],
                ]}
              />
            </CardBody>
          </Card>
        </GridItem>
        
      </GridContainer>
    </div>
  );
}
