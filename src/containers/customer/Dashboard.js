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
import BugReport from "@material-ui/icons/BugReport";
import Code from "@material-ui/icons/Code";
import Cloud from "@material-ui/icons/Cloud";
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
import { Grid, Typography } from '@material-ui/core';
import Search from "@material-ui/icons/Search";
import CustomInput from "../../components/Dashboard/CustomInput/CustomInput.js";
import Button from "../../components/Dashboard/CustomButtons/Button.js";
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import ListSubheader from '@material-ui/core/ListSubheader';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import ForwardIcon from '@material-ui/icons/Forward';
import Link from '@material-ui/core/Link';
import IconButton from '@material-ui/core/IconButton';
import ForwardRoundedIcon from '@material-ui/icons/ForwardRounded';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import LabelImportantIcon from '@material-ui/icons/LabelImportant';

import { bugs, website, server } from "../../variables/general.js";

// import {
//   dailySalesChart,
//   emailsSubscriptionChart,
//   completedTasksChart,
// } from "../../variables/charts.js";

import styles from "../../assets/jss/material-dashboard-react/views/dashboardStyle";
import buttonStyle from "../../assets/jss/material-dashboard-react/components/buttonStyle.js";


const useStyles = makeStyles(styles);
const fontStyle = {fontSize: '20px',color: '#126e82'};
const titleStyle = {fontSize: '30px',color: '#126e82'};
const dropDownStyle = {width: '200px'};
const btStyle = {width: '10px',backgroundColor: '#126e82',color: '#efe3e3'}

export default function Dashboard() {
  const classes = useStyles();
  return (
    <div>
      {/*<GridContainer>
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="success" stats icon>
              <CardIcon color="success">
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
      </GridContainer>*/}
      <GridContainer item spacing={3}>
      <GridItem xs={12} sm={4}  >
          <Card >
            <CardHeader color="success" stats icon>
              <CardIcon color="success">
                <AddShoppingCartIcon/>
              </CardIcon>
              <p className={classes.cardCategory} style={fontStyle}>Search</p>
              <h3 className={classes.cardTitle} style={titleStyle}>Medicine</h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.searchWrapper}>
              <CustomInput
                
                formControlProps={{
                className: classes.margin + " " + classes.search,
                }}
                inputProps={{
                placeholder: "Search",
                inputProps: {
                "aria-label": "Search",
                },
                }}
              />
              <Button color="white" aria-label="edit" justIcon round>
                <Search />
              </Button>
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={4}  >
          <Card >
            <CardHeader color="info" stats icon>
              <CardIcon color="info">
                <AccountBalanceIcon/>
              </CardIcon>
              <p className={classes.cardCategory} style={fontStyle}>Search</p>
              <h3 className={classes.cardTitle} style={titleStyle}>Pharmacy</h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.searchWrapper}>
              <CustomInput
                formControlProps={{
                className: classes.margin + " " + classes.search,
                }}
                inputProps={{
                placeholder: "Search",
                inputProps: {
                "aria-label": "Search",
                },
                }}
              />
              <Button color="white" aria-label="edit" justIcon round>
                <Search />
              </Button>
              </div>
            </CardFooter>
          </Card>
        </GridItem>

        <GridItem xs={12} sm={4}>
          <Card >
            <CardHeader color="success" stats icon>
              <CardIcon color="success">
                <LocationOnIcon/>
              </CardIcon>
              <p className={classes.cardCategory} style={fontStyle}>Search Pharmacy By</p>
              <h3 className={classes.cardTitle} style={titleStyle}>Location</h3>
            </CardHeader>
            <CardFooter stats>
              <div> 
              <FormControl className={classes.formControl}>
              
              <Grid container spacing={4}> 
              <Grid item xs={8}> 
              <InputLabel htmlFor="grouped-native-select">Select Location</InputLabel>
              <Select style={dropDownStyle} native defaultValue="" id="grouped-native-select">
                <option aria-label="None" value="" />
                <option value={1}>All of Sri Lanka</option>
                <optgroup label="Colombo">
                <option value={2}>All of Colombo</option>
                <option value={3}>Nugegoda</option>
                <option value={4}>Malabe</option>
                </optgroup>
                <optgroup label="Matara">
                <option value={5}>All of Matara</option>
                <option value={4}>Hakmana</option>
                <option value={4}>Dikwella</option>
                </optgroup>
                
              </Select>
              
              </Grid>

              <Grid item xs={4}>
              {/*<Button
                variant="contained"
                style={{top: '30%',backgroundColor: '#126e82',color: '#efe3e3',width: '1px',height: '30px'}}
                size="sm"
              >
        <CheckCircleIcon style={{ fontSize: 'large' }} />
              </Button>*/}
              <IconButton aria-label="delete" style={{top: '30%',color: '#126e82'}}>
          <CheckCircleIcon fontSize="large" />
        </IconButton>
              </Grid>
              </Grid>
              </FormControl>
              </div>
              
            </CardFooter>
          </Card>
        </GridItem>
         
      </GridContainer>
      
      <GridContainer>
        <Grid item xs={12}>
          <Typography>
            Result
          </Typography>
        </Grid>
        <Grid item xs={12}>
        <Typography>
          <Link href="/Form/">
            Pharma, Nugegoda, Colombo
          </Link>
        </Typography>
        <Typography>
          <Link href="/Form/">
            Aruna Pharmacy, Nugegoda, Colombo
          </Link>
        </Typography>
        </Grid>
      </GridContainer>
             
         
       
    </div>
  );
}