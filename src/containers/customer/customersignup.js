import React, {useState} from 'react';



//material ui imports
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
import { AST_SymbolBlockDeclaration } from 'terser';

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

const Customersignup=()=>{
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit=(e)=>{
        e.preventDefault();
    }
    
    const signup =()=>{
        axios.post('http://localhost:4000/api/signup', {
            firstName: firstName,
            lastName:lastName,
            email:email,
            password:password
        }).then((response)=>{
            console.log(response);
        }).catch((err)=>{
            console.log(err);
        });
    }

    const paperStyle={padding :20,height:'620px',width:'400px', margin:"20px auto "}
    const avatarStyle={backgroundColor: '#2ab5b5'}
    const gridStyle={padding: 20}
    const buttonStyle={backgroundColor: '#2ab5b5', margin: '8px 0'}
     
    return(
        
        <Grid style={gridStyle}>
            <Paper elevation={10} style={paperStyle}>
                <Grid align='center' style={gridStyle}>
                    <Avatar style={avatarStyle}><LockOpenIcon/></Avatar>
                    <h1>Sign Up</h1>
                </Grid>
                <Grid container spacing={2}> 
                    <Grid item xs={12}>
                        <TextField value ={firstName} onChange={(e) => setFirstName(e.target.value)} type="text" className="form-control" TextField id="firstName" variant="outlined"  placeholder="Enter Your First Name" fullWidth required/>
                    </Grid>

                    <Grid item xs={12}>
                    <TextField value ={lastName} onChange={(e) => setLastName(e.target.value)} id="lastName" variant="outlined" label="Last Name" placeholder="Enter Your Last Name" fullWidth required/>
                    </Grid>

                    <Grid item xs={12}>
                        <TextField value ={email} onChange={(e) => setEmail(e.target.value)} id="email" variant="outlined" label="Email" placeholder="Enter Your Email" fullWidth required/>
                    </Grid>

                    <Grid item xs={12}>
                        <TextField value ={password} onChange={(e) => setPassword(e.target.value)}id="password" variant="outlined" label="Password" placeholder="Enter Password" type='password' fullWidth required/>
                    </Grid>

                    {/* <Grid item xs={12}> 
                        <TextField id="confirmPassword" variant="outlined" label="Confirm Password" placeholder="Re Enter Your Password" type='password' fullWidth required/>
                    </Grid> */}
                </Grid>

                <Grid item xs={12}> 
                    <FormControlLabel  
                        control={
                            <Checkbox 
                            name="checkedB"
                            color="Primary"
                            />
                        }
                        label="I agree to the Terms and Conditions"
                    />
                </Grid>
                
                <Button type='submit' onSubmit= {handleSubmit} variant="contained" style={buttonStyle} onClick={signup} fullWidth>Sign Up</Button>

                <Grid container justify="center">
                    <Grid item> 
                        <Typography>Already have an account? 
                            <Link href="/customersignin">
                                Sign In
                            </Link>
                        </Typography>
                    </Grid>
                </Grid>

            </Paper>
            <Box mt={5}>
                <Copyright />
            </Box>
        </Grid>
    )
}

export default Customersignup