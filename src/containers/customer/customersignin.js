import React, {useState} from 'react';



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

import axios from 'axios';


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

const Customersignin=()=>{
      const [email, setEmail] = useState("");
      const [password, setPassword] = useState("");
  
      const handleSubmit=(e)=>{
          e.preventDefault();
      }
      
      const signin =()=>{
          axios.post('http://localhost:4000/api/signin', {
              email:email,
              password:password
          }).then((response)=>{
              console.log(response);
          }).catch((err)=>{
              console.log(err);
          });
      }
  

    const paperStyle={padding :20,height:'450px',width:'300px', margin:"20px auto"}
    const avatarStyle={backgroundColor: '#2ab5b5'}
    const gridStyle={padding: 20}
    const buttonStyle={backgroundColor: '#2ab5b5', margin: '8px 0'}
     
    return(
        
        <Grid style={gridStyle}>
            <Paper elevation={10} style={paperStyle}>
                <Grid align='center' style={gridStyle}>
                    <Avatar style={avatarStyle}><LockOpenIcon/></Avatar>
                    <h1>Sign in</h1>
                </Grid>
                    <TextField value ={email} onChange={(e) => setEmail(e.target.value)} id="lastName" id="email" label="Email" placeholder="Enter Your Email" fullWidth required/>
                    <TextField value ={password} onChange={(e) => setPassword(e.target.value)} id="lastName" id="password" label="Password" placeholder="Enter Password" type='password' fullWidth required/>
                    <FormControlLabel  
                        control={
                            <Checkbox 
                            name="checkedB"
                            color="Primary"
                            />
                        }
                        label="Remember me"
                    />
                
                <Button type='submit' onSubmit= {handleSubmit} variant="contained" style={buttonStyle} href="" fullWidth>Sign in</Button>
                <Typography>
                    <Link href="#">
                        Forgot Password ?
                    </Link>
                </Typography>

                <Typography>Do you have an account ? 
                    <Link href="/customersignup">
                        Sign Up
                    </Link>
                </Typography>
                
            </Paper>
            <Box mt={5}>
                <Copyright />
            </Box>
        </Grid>
    )
}

export default Customersignin;