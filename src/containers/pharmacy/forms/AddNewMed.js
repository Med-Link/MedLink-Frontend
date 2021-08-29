import React from 'react';
import { Grid } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';
//import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import { TextField } from '@material-ui/core';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
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

const AddNewMed=()=>{

    const paperStyle={padding :20,height:'550px',width:'500px', margin:"20px auto"}
    const avatarStyle={backgroundColor: '#126e82'}
    const gridStyle={padding: 20}
    const buttonStyle={color: '#efe3e3',backgroundColor: '#126e82', margin: '30px 0', width: '50%', left:'50%', opacity:'0.9'}
     
    return(
        
        <Grid style={gridStyle}>
             
          
                <Grid align='center' style={gridStyle}>
                    
                    <h1>Add New Medicine</h1>
                </Grid>

               

                <Grid container spacing={2}> 
                    <Grid item xs={12} sm={6}>
                        <TextField
                            id="firstName"
                            label="Medicine Name"
                            defaultValue=""
                            InputProps={{
                                readOnly: false,
                            }}
                            variant="outlined"
                            fullWidth
                        />
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <TextField
                            id="lastName"
                            label="Brand Name"
                            defaultValue=""
                            InputProps={{
                                readOnly: false,
                            }}
                            variant="outlined"
                            fullWidth
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <TextField
                            id="email"
                            label="Re-Order Level"
                            defaultValue=""
                            InputProps={{
                                readOnly: false,
                            }}
                            variant="outlined"
                            fullWidth
                        />
                         
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            id="address"
                            label="Medicine ID"
                            defaultValue="M0082"
                            InputProps={{
                                readOnly: true,
                            }}
                            variant="outlined"
                            fullWidth
                        />
                         
                    </Grid>
                    


                     
                        <Button type='submit' variant="contained" style={buttonStyle} href="#">Add</Button>
                     
                </Grid> 

                 
                
            
           
        </Grid>
    )
}

export default AddNewMed
