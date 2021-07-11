import React from 'react';
import { Grid } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';
//import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { TextField } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import AccountBoxIcon from '@material-ui/icons/AccountBox';

function Copyright() {
    return (
      <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © '}
        <Link color="inherit" href="/">
          Medlink
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }

const Profile=()=>{

    const paperStyle={padding :20,height:'550px',width:'500px', margin:"20px auto"}
    const avatarStyle={backgroundColor: '#2ab5b5'}
    const gridStyle={padding: 20}
    const buttonStyle={backgroundColor: '#2ab5b5', margin: '30px 0', width: '50%', left:'50%', opacity:'0.9'}
     
    return(
        
        <Grid style={gridStyle}>
             
            <Paper elevation={10} style={paperStyle}>
                <Grid align='center' style={gridStyle}>
                    <Avatar style={avatarStyle}><AccountBoxIcon/></Avatar>
                    <h1>Kamal Perera</h1>
                </Grid>

                <Grid container spacing={2}> 
                    <Grid item xs={12} sm={6}>
                        <TextField
                            id="firstName"
                            label="First Name"
                            defaultValue="Kamal"
                            InputProps={{
                                readOnly: true,
                            }}
                            variant="outlined"
                        />
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <TextField
                            id="lastName"
                            label="Last Name"
                            defaultValue="Perera"
                            InputProps={{
                                readOnly: true,
                            }}
                            variant="outlined"
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <TextField
                            id="email"
                            label="Email"
                            defaultValue="kamalperera@gmail.com"
                            InputProps={{
                                readOnly: true,
                            }}
                            variant="outlined"
                            fullWidth
                        />
                         
                    </Grid>

                    <Grid item xs={12}>
                        <TextField
                            id="address"
                            label="Address"
                            defaultValue="No: 2, Galle Road, Colombo"
                            InputProps={{
                                readOnly: true,
                            }}
                            variant="outlined"
                            fullWidth
                        />
                         
                    </Grid>

                    <Grid item xs={12}>
                        <TextField
                            id="mobileNumber"
                            label="Mobile Number"
                            defaultValue="0711234567"
                            InputProps={{
                                readOnly: true,
                            }}
                            variant="outlined"
                        />
                    </Grid>

                     
                        <Button type='submit' variant="contained" style={buttonStyle} href="#">Edit Profile</Button>
                     
                </Grid> 

                 
                
            </Paper>
            <Box mt={5}>
                <Copyright />
            </Box>
        </Grid>
    )
}

export default Profile