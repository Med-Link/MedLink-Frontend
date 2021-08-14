import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';

// material ui imports
import { makeStyles } from "@material-ui/core/styles";
import { Grid} from '@material-ui/core';
import { TextField } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import { MenuList } from '@material-ui/core';
import MenuItem from '@material-ui/core/MenuItem';

import GridItem from "../Dashboard/Grid/GridItem.js";
import GridContainer from "../Dashboard/Grid/GridContainer.js";
import Card from '../Dashboard/Card/Card.js';
import CardHeader from '../Dashboard/Card/CardHeader.js';
import CardBody from '../Dashboard/Card/CardBody.js';
import styles from "../../assets/jss/material-dashboard-react/views/dashboardStyle";

const useStyles = makeStyles(styles);

const AddNewBrand = () => {
  const classes = useStyles();

  const buttonStyle = {
    backgroundColor: '#126e82', margin: '8px 0', width: '30%', color: '#fff',
  };

  return (
    <Grid>
      <Card>
        <CardHeader color="primary">
          <h4 className={classes.cardTitleWhite}>Add New Brand</h4>
        </CardHeader>
        <CardBody>
          <GridContainer>
            <GridItem xs={6} sm={6} md={6}>
              <TextField id="brandname" label="Brand Name" placeholder="Enter Brand Name" fullWidth required />
            </GridItem>
          </GridContainer>
          <Box xs={12} md={12} padding={3} display="flex" justifyContent="center">
            <Button type="submit" variant="contained" style={buttonStyle} fullWidth>Add</Button>
          </Box>
        </CardBody>
      </Card>
    </Grid>
  );
};

export default AddNewBrand;

// <FormControl className={classes2.formControl}>
//                 <InputLabel id="demo-simple-select-label" className={classes2.menuitem}>Brand</InputLabel>
//                 <Select
//                   labelId="demo-simple-select-label"
//                   id="demo-simple-select"
//                 >
//                   <MenuItem value='Brand1'>Brand1</MenuItem>
//                   <MenuItem value="Brand2">Brand2</MenuItem>
//                   <MenuItem value='Brand3'>rrand3</MenuItem>
                  
//                 </Select>
//               </FormControl>