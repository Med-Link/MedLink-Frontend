import React, { useState } from 'react';

// material ui imports
import { Grid } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';
// import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import { TextField } from '@material-ui/core';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

import Card from '../../components/Dashboard/Card/Card.js';
import CardHeader from '../../components/Dashboard/Card/CardHeader.js';
import CardBody from '../../components/Dashboard/Card/CardBody.js';

// import { AST_SymbolBlockDeclaration } from 'terser';

const SignUpAdmin = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [checked, setChecked] = useState(false);
  const [error, setError] = useState('');
  const [signedUp, setSignedUp] = useState(false);

  const signup = (e) => {
    e.preventDefault();

    axios.post('http://localhost:4000/api/admin/addnewAdmin', {
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
    return <Redirect to="/admin" />;
  }

  const paperStyle = { padding: 20, width: '80%', margin: '20px auto ' };
  const avatarStyle = { backgroundColor: '#2ab5b5' };
  const gridStyle = { padding: 20 };
  const buttonStyle = {
    backgroundColor: '#126e82', margin: '8px 0', width: '30%', color: '#fff',
  };

  return (

    <Grid style={gridStyle}>
      <Card>
        <CardHeader color="primary">
          <h4>New Admin Registrations</h4>
          {/* <p className={classes.cardCategoryWhite}>
              Here is a subtitle for this table
            </p> */}
        </CardHeader>
        <CardBody>
          <Paper elevation={10} style={paperStyle}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6} padding={3}>
                <TextField value={firstName} onChange={(e) => setFirstName(e.target.value)} id="firstName" label="First Name" placeholder="Enter Your First Name" fullWidth required />
              </Grid>

              <Grid item xs={12} md={6} padding={3}>
                <TextField value={lastName} onChange={(e) => setLastName(e.target.value)} id="lastName" label="Last Name" placeholder="Enter Your Last Name" fullWidth required />
              </Grid>
            </Grid>
            <Grid container spacing={2} padding={3}>
              <Grid item xs={12} md={6}>
                <TextField value={email} onChange={(e) => setEmail(e.target.value)} id="email" label="Email" placeholder="Enter Your Email" fullWidth required />
              </Grid>

              <Grid item xs={12} md={6} padding={3}>
                <TextField value={password} onChange={(e) => setPassword(e.target.value)} id="password" label="Password" placeholder="Enter Password" type="password" fullWidth required />
              </Grid>
            </Grid>
            <Grid>
              {/* <Grid item xs={12}>
                        <TextField id="confirmPassword" variant="outlined" label="Confirm Password" placeholder="Re Enter Your Password" type='password' fullWidth required/>
                    </Grid> */}
            </Grid>
            <Box xs={12} md={12} padding={3} display="flex" justifyContent="center">
              <Button type="submit" variant="contained" style={buttonStyle} onClick={signup} fullWidth>Add</Button>
            </Box>

            <p>{error}</p>

          </Paper>
        </CardBody>
      </Card>
    </Grid>
  );
};

export default SignUpAdmin;
