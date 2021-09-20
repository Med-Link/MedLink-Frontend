import React, {useEffect, useState} from 'react';
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
import {isuserLoggedIn, login} from '../../actions';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Footer from "../../components/Dashboard/Footer/Footer.js";

const SignIn=(props)=>{
   
    const [email,setEmail] = useState ('');
    const [password,setPassword] = useState ('');
    const [error,setError] = useState ('');
    const auth = useSelector(state => state.auth);


    const dispatch = useDispatch();

    useEffect(() => {
        if(!auth.authenticate){
            dispatch(isuserLoggedIn());
        }
    }, []);
      
      const userLogin =(e) =>{

       e.preventDefault();


          const user ={
              email,password
            }
            console.log(user);
            dispatch(login(user));
      }   
      
      if (auth.authenticate){
          return <Redirect to={'/admin'} />
      }

    const paperStyle={padding :20,height:'450px',width:'300px', margin:"20px auto"}
    const avatarStyle={backgroundColor: '#2ab5b5'}
    const gridStyle={padding: 20}
    const buttonStyle={backgroundColor: '#2ab5b5', margin: '8px 0'}
    const foot={position: 'absolute', bottom: 0}

    return(
        
        <Grid style={gridStyle}>
            <Paper elevation={10} style={paperStyle}>
                <Grid align='center' style={gridStyle}>
                    <Avatar style={avatarStyle}><LockOpenIcon/></Avatar>
                    <h1>Sign in</h1>
                </Grid>
                    <TextField value ={email} onChange={(e) => setEmail(e.target.value)} id="email" label="Email" placeholder="Enter Your Email" fullWidth required/>
                    <TextField value ={password} onChange={(e) => setPassword(e.target.value)} id="password" label="Password" placeholder="Enter Password" type='password' fullWidth required/>
                    <FormControlLabel  
                        control={
                            <Checkbox 
                            name="checkedB"
                            color="Primary"
                            />
                        }
                        label="Remember me"
                    />
                
                <Button type='submit' onClick= {userLogin} variant="contained" style={buttonStyle} href="" fullWidth>Sign in</Button>
                <Typography>
                    <Link href="#">
                        Forgot Password ?
                    </Link>
                </Typography>
            </Paper>
            <Box mt={5}>
                <Footer style={foot}/>
            </Box>
        </Grid>
    )
}

export default SignIn