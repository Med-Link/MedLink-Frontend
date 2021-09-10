import React from "react";

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
          <OutOfStockTable/>
        </GridItem>
        <GridItem xs={12} sm={12} md={6}>
          <Card>
            <CardHeader color="primary">
              <h4 className={classes.cardTitleWhite}>Monthly Sales Chart</h4>
              <p className={classes.cardCategoryWhite}>
              {new Date().toLocaleString("en-US", { month: "long" })}
              </p>
            </CardHeader>
            <CardBody>
              
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}
