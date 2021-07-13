import React, {useEffect, useState} from 'react';




import { Grid } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';
import Hidden from '@material-ui/core/Hidden';
import LockOpenOutlinedIcon from '@material-ui/icons/LockOpenOutlined';

//import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import { TextField } from '@material-ui/core';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';

import GridContainer from '../../components/Dashboard/Grid/GridContainer';
import GridItem from '../../components/Dashboard/Grid/GridItem';

import axios from 'axios';
import {isuserLoggedIn, login} from '../../actions/auth.actionspharmacy';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

import pharmacist from '../../assets/images/pharmacist2.jpg';


function Copyright() {
    return (
      <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright ©️ '}
        <Link color="inherit" href="/">
          Medlink
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }
  const useStyles = makeStyles((theme) => ({
    root: {
      backgroundColor : '#eee',
    },
    paper: {
      marginTop: theme.spacing(15),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding:theme.spacing(4),
      borderRadius: '25px',
      boxShadow: `2px 2px 2px 2px #ccc`,
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.primary.main,
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(2),
    },
    submit: {
      backgroundColor: theme.palette.primary.main,

      margin: theme.spacing(3, 0, 1),
      width:'70%',
    },
    /*label:{
      marginLeft:theme.spacing(0),
    // },*/
    // back:{
    //   backgroundColor: "#eee",
    //   marginTop:theme.spacing(1),
    //   margin:theme.spacing(1,1,1),
    //   height:'small',
    // },
    input: {
      display: 'none',
    },
    image: {
      alignItems: 'center',
      justifyContent: 'center',
      width:"75%",
      // height:'auto',
      // maxHeight:'400px',
      
      padding:theme.spacing(4),
      marginTop:theme.spacing(5),
      maxWidth:'600px',
    },
    
  
  }));

const SignInPharmacy=()=>{
  const classes = useStyles();

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
          return <Redirect to={'/pharmacy'} />
      }

      
    // const paperStyle={padding :20,height:'450px',width:'300px', margin:"20px auto"}
    // const avatarStyle={backgroundColor: '#2ab5b5'}
    // // const gridStyle={padding: 20}
    // const buttonStyle={backgroundColor: '#2ab5b5', margin: '8px 0'}

    return(
        <div>
        <GridContainer>
          <Hidden smDown>
              <GridItem xs={12} sm={12} md={7}>
                  <img src={pharmacist} className={classes.image} />
              </GridItem>
          </Hidden>
        <GridItem xs={12} sm={12} md={4}  borderRadius={10}>

          <div className={classes.paper}>
            <Avatar className={classes.avatar}>
              <LockOpenOutlinedIcon />
            </Avatar>
          
            <Typography component="h1" variant="h5">
              Pharmacy SignIn
            </Typography>
            <form className={classes.form} noValidate>
              <Grid container spacing={3}>
                <Grid item xs={12}>
                          <TextField value ={email} onChange={(e) => setEmail(e.target.value)}  id="email" label="Email" placeholder="Enter Your Email" variant="outlined" size="small" fullWidth required/>
                </Grid>
                <Grid item xs={12}>            
                          <TextField value ={password} onChange={(e) => setPassword(e.target.value)} id="password" label="Password" placeholder="Enter Password" type='password' variant="outlined" size="small" fullWidth required/>
                </Grid> 
              </Grid>
              <Grid container spacing={3}>
                <Grid item xs={12}>         
                            <FormControlLabel  
                                control={
                                    <Checkbox 
                                    name="checkedB"
                                    color="Primary"
                                    />
                                }
                                label="Remember me"
                            />
                </Grid> 
              </Grid>  
              <Box xs={12} sm={12} md={12}
                alignItems="center" 
                display="flex" 
                justifyContent="center"
                direction="column"
                justify="center">    
                      <Button 
                        type='submit' 
                        onClick= {userLogin} 
                        variant="contained" href="" 
                        fullWidth
                        className={classes.submit}>
                          Sign in</Button>
                </Box>
                <Grid container justify="flex-end">
                  <Grid item>
                    <Typography>
                            <Link href="#">
                                Forgot Password ?
                            </Link>
                    </Typography>
                  </Grid>
                  </Grid>
                  <Grid container justify="left">
                    <Grid item>
                      <Typography>Do not have an account ? 
                            <Link href="/pharmacysignup">
                                Sign Up
                            </Link>
                      </Typography>
                    </Grid>
                  </Grid>     
              </form>
          </div> 
        </GridItem>
      
        </GridContainer>
        <Box xs={12} sm={12} md={12} >
          <Copyright />
        </Box>
      </div>
    )
}

export default SignInPharmacy;