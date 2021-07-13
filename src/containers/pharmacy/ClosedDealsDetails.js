import React from "react";
// react plugin for creating charts
import ChartistGraph from "react-chartist";
// @material-ui/core

import { makeStyles } from "@material-ui/core/styles";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Store from "@material-ui/icons/Store";
import DateRange from "@material-ui/icons/DateRange";
import Update from "@material-ui/icons/Update";
import Accessibility from "@material-ui/icons/Accessibility";
import AddShoppingCartIcon from "@material-ui/icons/BugReport";
import Code from "@material-ui/icons/Code";
import Cloud from "@material-ui/icons/Cloud";
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import TextField from '@material-ui/core/TextField';
import { Button } from "@material-ui/core";

// core components
import GridItem from "../../components/Dashboard/Grid/GridItem.js";
import GridContainer from "../../components/Dashboard/Grid/GridContainer.js";
import Table from "../../components/Dashboard/Table/Table.js";
import Tasks from "../../components/Dashboard/Tasks/Tasks.js";
import CustomTabs from "../../components/Dashboard/CustomTabs/CustomTabs.js";
import PhotoSteps from "../../components/pharmacy/PhotoSteps"

import Card from "../../components/Dashboard/Card/Card";
import CardHeader from "../../components/Dashboard/Card/CardHeader.js";
import CardIcon from "../../components/Dashboard/Card/CardIcon.js";
import CardBody from "../../components/Dashboard/Card/CardBody.js";
import CardFooter from "../../components/Dashboard/Card/CardFooter.js";

import { bugs, website, server } from "../../variables/general.js";

import styles from "../../assets/jss/material-dashboard-react/views/dashboardStyle";

const useStyles = makeStyles(styles);


export default function ClosedDealsDetails() {
  const classes = useStyles();

  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={6}>
          
          
          <Card>
                <CardBody color="primary" stats icon>
                <div className={classes.stats}>
                  <h1>Michelle Fernando - 0768757722</h1>
                </div>
                <div className={classes.stats}>
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
              <PhotoSteps/>
        </GridItem>

        
      </GridContainer>
      
    </div>
  );
}
