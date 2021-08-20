import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { backendUrl } from '../../urlConfig.js';

// material ui imports
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from '@material-ui/core';
import { TextField } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';

import GridItem from "../Dashboard/Grid/GridItem.js";
import GridContainer from "../Dashboard/Grid/GridContainer.js";
import Card from '../Dashboard/Card/Card.js';
import CardHeader from '../Dashboard/Card/CardHeader.js';
import CardBody from '../Dashboard/Card/CardBody.js';

import styles from "../../assets/jss/material-dashboard-react/views/dashboardStyle";

import axios from 'axios';

// import { AST_SymbolBlockDeclaration } from 'terser';

const useStyles = makeStyles(styles);

const SignUpAdmin = () => {
  const classes = useStyles();

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [checked, setChecked] = useState(false);
  const [error, setError] = useState('');
  const [signedUp, setSignedUp] = useState(false);

  const signup = (e) => {
    e.preventDefault();

    axios.post(`${backendUrl}/admin/addnewAdmin`, {
      firstName,
      lastName,
      email,
      password,
    }).then((response) => {
      console.log(response);
      setSignedUp(true);
    }).catch((err) => {
      console.log(err);
      setError('error');
    });
  };

  if (signedUp) {
    return <Redirect to="/admin/employees" />;
  }

  const buttonStyle = {
    backgroundColor: '#126e82', margin: '8px 0', width: '30%', color: '#fff',
  };

  return (

    <Grid>
      <Card>
        <CardHeader color="primary">
              <h4 className={classes.cardTitleWhite}>Add New Admin </h4>  
        </CardHeader>
        <CardBody>
          <GridContainer>
                {/* {data.email} */}
            <GridItem xs={12} sm={12} md={6}>
              <TextField value={firstName} onChange={(e) => setFirstName(e.target.value)} id="firstName" label="First Name" placeholder="Enter Your First Name" fullWidth required />
            </GridItem>

            <GridItem xs={12} sm={12} md={6}>
              <TextField value={lastName} onChange={(e) => setLastName(e.target.value)} id="lastName" label="Last Name" placeholder="Enter Your Last Name" fullWidth required />
            </GridItem>
          </GridContainer>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <TextField value={email} onChange={(e) => setEmail(e.target.value)} id="email" label="Email" placeholder="Enter Your Email" fullWidth required />
            </GridItem>
            <GridItem xs={12} sm={12} md={6}>
              <TextField value={password} onChange={(e) => setPassword(e.target.value)} id="password" label="Password" placeholder="Enter Password" type="password" fullWidth required />
            </GridItem>
          </GridContainer>
          <Box xs={12} md={12} padding={3} display="flex" justifyContent="center">
            <Button type="submit" variant="contained" style={buttonStyle} onClick={signup} fullWidth>Add</Button>
          </Box>
          <p>{error}</p>
        </CardBody>
      </Card>
    </Grid>
  );
};

export default SignUpAdmin;
