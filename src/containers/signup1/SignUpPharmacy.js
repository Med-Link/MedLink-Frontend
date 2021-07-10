import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';


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

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.primary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  /*label:{
    marginLeft:theme.spacing(0),
  },*/
  back:{
    backgroundColor: "#eee",
    marginTop:theme.spacing(1),
  },
  input: {
    display: 'none',
  },

}));

export default function SignUp() {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        
        <Typography component="h1" variant="h5">
          Pharmacy Sign up
        </Typography>
        
        <form className={classes.form} noValidate>
          
          <Grid container spacing={2}>
            
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="pname"
                name="pharmacyName"
                variant="outlined"
                required
                fullWidth
                id="pharmacyName"
                label="Pharmacy Name"
                autoFocus
              />
            </Grid>
            
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="pNumber"
                label="Mobile Number"
                name="pNumber"
                autoComplete="pnumber"
              />
            </Grid>
            
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
              />
            </Grid>
            
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
            </Grid>
            
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="location"
                label="Location"
                name="location"
                autoComplete="location"
              />
            </Grid>
            
            <Grid item xs={12} sm={8} className={classes.back}>
              <Typography variant="body2" display="block" className={classes.label}>
                Medical Council Certificate *
              </Typography>                
            </Grid>
            <Grid item xs={12} sm={4}className={classes.back}>
            <input
              accept="image/*"
              className={classes.input}
              id="contained-button-file"
              multiple
              type="file"
            />
            <label htmlFor="contained-button-file">
              <Button 
                variant="contained" 
                component="span" 
                color="default"
                startIcon={<CloudUploadIcon />}>
              Upload
              </Button>
            </label>             
            </Grid>
            
            <Grid item xs={12} sm={8} className={classes.back}>
              <Typography variant="body2" display="block" className={classes.label} >
                Pharmaciest Licence *
              </Typography>                
            </Grid>
            <Grid item xs={12} sm={4} className={classes.back}>
              <input
                accept="image/*"
                className={classes.input}
                id="contained-button-file"
                multiple
                type="file"
              />
              <label htmlFor="contained-button-file">
                <Button 
                  variant="contained" 
                  component="span" 
                  color="default"
                  startIcon={<CloudUploadIcon />}>
                Upload
                </Button>
              </label>                 
            </Grid>

            <Grid item xs={12} sm={8} className={classes.back}>
              <Typography variant="body2" display="block"  className={classes.label}>
                Business Registration Certificate *
              </Typography>                
            </Grid>
            <Grid item xs={12} sm={4} className={classes.back}>
              <input
                accept="image/*"
                className={classes.input}
                id="contained-button-file"
                multiple
                type="file"
              />
              <label htmlFor="contained-button-file">
                <Button 
                  variant="contained" 
                  component="span" 
                  color="default"
                  startIcon={<CloudUploadIcon />}>
                Upload
                </Button>
              </label>                
            </Grid>
            
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="I agree to the Terms and Conditions"
              />
            </Grid>

          </Grid>

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign Up
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="/signin" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
    
  );
}





