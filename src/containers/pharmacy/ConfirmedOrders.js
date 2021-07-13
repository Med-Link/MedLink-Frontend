import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

import clsx from 'clsx';
import Link from '@material-ui/core/Link';
// core components
import GridItem from "../../components/Dashboard/Grid/GridItem.js";
import GridContainer from "../../components/Dashboard/Grid/GridContainer.js";
import Table from "../../components/Dashboard/Table/Table.js";
import Card from "../../components/Dashboard/Card/Card.js";
import CardHeader from "../../components/Dashboard/Card/CardHeader.js";
import CardBody from "../../components/Dashboard/Card/CardBody.js";

import Switch from "../../components/Dashboard/CustomButtons/Switch";
import Button from "../../components/Dashboard//CustomButtons/Button";

const styles = {
  cardCategoryWhite: {
    "&,& a,& a:hover,& a:focus": {
      color: "rgba(255,255,255,.62)",
      margin: "0",
      fontSize: "14px",
      marginTop: "0",
      marginBottom: "0",
    },
    "& a,& a:hover,& a:focus": {
      color: "#FFFFFF",
    },
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
    "& small": {
      color: "#777",
      fontSize: "65%",
      fontWeight: "400",
      lineHeight: "1",
    },
  },
};

const useStyles = makeStyles(styles);

export default function TableList() {
  const classes = useStyles();
  return (
    <GridContainer>
      <GridItem xs={12} sm={12} md={12}>
        <Card>
          <CardHeader color="primary">
            <h4 className={classes.cardTitleWhite}>Order Requests</h4>
            {/* <p className={classes.cardCategoryWhite}>
              Here is a subtitle for this table
            </p> */}
          </CardHeader>
          <CardBody>
            <Table
              tableHeaderColor="primary"
              tableHead={["Order ID", "CustomerName", "View","Packed For Delivery"]}
              tableData={[
                [ "MO2001",
                  "Michelle Fernando",
                  <Link
                    variant="h6"
                    underline="none"
                    className={clsx(classes.rightLink)}
                    href="closeddealsdetails/"
                  >
                  <Button color="primary" round>View</Button></Link>,
                  <Switch color="secondary" inputProps={{ 'aria-label': 'primary checkbox' }} />],
                

                [ "MO2002",
                  "Sandali Perera",
                  <Link
                    variant="h6"
                    underline="none"
                    className={clsx(classes.rightLink)}
                    href="closeddealsdetails/"
                  >
                  <Button color="primary" round>View</Button></Link>,
                  <Switch color="secondary" inputProps={{ 'aria-label': 'primary checkbox' }} />],
                ]}
            />
          </CardBody>
        </Card>
      </GridItem>
      
    </GridContainer>
  );
}
