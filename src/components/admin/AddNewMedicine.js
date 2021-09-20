import React, { useState } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import { backendUrl } from "../../urlConfig.js";
// material ui imports
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import { TextField } from "@material-ui/core";
import Box from "@material-ui/core/Box";

import GridItem from "../../components/Dashboard/Grid/GridItem.js";
import GridContainer from "../../components/Dashboard/Grid/GridContainer.js";
import Card from "../../components/Dashboard/Card/Card.js";
import CardHeader from "../../components/Dashboard/Card/CardHeader.js";
import CardBody from "../../components/Dashboard/Card/CardBody.js";
import Button from "../../components/Dashboard/CustomButtons/Button"
import styles from "../../assets/jss/material-dashboard-react/views/dashboardStyle";

const useStyles = makeStyles(styles);

const AddNewMedicine = (props) => {
  const { getdata } = props;

  const classes = useStyles();

  const [brand, setBrand] = useState("");
  const [medname, setMedname] = useState("");
  
  const submit = (e) => {
    e.preventDefault();
    const token = window.localStorage.getItem("token");
    axios.post(`${backendUrl}/admin/addmedicine`, {brand: brand, medname: medname},{
        
        headers: {
          Authorization: token ? `Bearer ${token}` : "",
        },
      })
      .then((response) => {
        console.log(response);
        getdata();
        // return <Redirect to={'/admin/medicine'} />
      });
  };
 
  return (
    <Grid>
      <Card>
        <CardHeader color="success">
          <h4 className={classes.cardTitleWhite}>Add New Medicine</h4>
        </CardHeader>
        <CardBody>
          <GridContainer>
            <GridItem xs={6} sm={6} md={6}>
              <TextField
                id="medname"
                value={medname}
                onChange={(e) => setMedname(e.target.value)}
                label="Medicine Name"
                placeholder="Enter Medicine Name"
                fullWidth
                required
              />
            </GridItem>
            <GridItem xs={6} sm={6} md={6}>
              <TextField
                id="brandname"
                value={brand}
                onChange={(e) => setBrand(e.target.value)}
                label="Brand Name"
                placeholder="Enter Brand Name"
                fullWidth
                required
              />
            </GridItem>
          </GridContainer>
          <Box
            xs={12}
            md={12}
            padding={3}
            display="flex"
            justifyContent="center"
          >
            <Button
              type="submit"
              onClick={submit}
              variant="contained"
              color="success"
            >
              Add
            </Button>
          </Box>
        </CardBody>
      </Card>
    </Grid>
  );
};

export default AddNewMedicine;

AddNewMedicine.propTypes = {
  getdata:PropTypes.func,
};
