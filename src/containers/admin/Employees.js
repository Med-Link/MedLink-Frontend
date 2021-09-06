/* eslint-disable react/jsx-key */
import React from "react";
import GridItem from "../../components/Dashboard/Grid/GridItem.js";
import GridContainer from "../../components/Dashboard/Grid/GridContainer.js";

import AddNewAdmin from "../../components/admin/AddNewAdmin"
import ViewEmployees from "../../components/admin/ViewEmployees"

export default function Employees() {
  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={7}>
                <ViewEmployees/>
        </GridItem>

        <GridItem xs={12} sm={12} md={5}>
          <AddNewAdmin/>
        </GridItem>
      </GridContainer>
    </div>
  );
}


