/* eslint-disable react/jsx-key */
import React from "react";
// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridItem from "../../components/Dashboard/Grid/GridItem.js";
import GridContainer from "../../components/Dashboard/Grid/GridContainer.js";
import Table from "../../components/Dashboard/Table/Table.js";
import Card from "../../components/Dashboard/Card/Card";
import CardHeader from "../../components/Dashboard/Card/CardHeader.js";
import CardBody from "../../components/Dashboard/Card/CardBody.js";
import AddNewAdmin from "./AddNewAdmin"

import styles from "../../assets/jss/material-dashboard-react/views/dashboardStyle";

const useStyles = makeStyles(styles);

export default function Dashboard() {
  const classes = useStyles();
  return (
    <div>
      
      <GridContainer>
        <GridItem xs={12} sm={12} md={6}>
            <Card>
              <CardHeader color="primary">
                <h4 className={classes.cardTitleWhite}>Registered Admin Accounts</h4>
              </CardHeader>
              <CardBody>
              <Table
                  tableHeaderColor="primary"
                  tableHead={["ID", "Name"]}
                  tableData={[
                    ["Admin2", "Sandali Perera"],
                    ["Admin3", "Akila De Silva"],
                    ["Admin4", "Piyumi Senarath"],
                  ]}
                />
              </CardBody>
            </Card>
        </GridItem>

        <GridItem xs={12} sm={12} md={6}>
          <AddNewAdmin/>
        </GridItem>
      </GridContainer>
    </div>
  );
}
