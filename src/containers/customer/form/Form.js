import React from 'react';
import { Grid } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import { TextField } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import { makeStyles } from '@material-ui/core/styles';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';

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

const Form=()=>{

    const paperStyle={padding :20, height:'500px',width:'400px', margin:"20px auto"}
    const avatarStyle={backgroundColor: '#2ab5b5'}
    const gridStyle={padding: 20}
    const buttonStyle={backgroundColor: '#2ab5b5', margin: '8px 0'}
    const classes = useStyles();
    const textFeildStyle = {height: '150px', width: '390px',margin: '8px 0 16px 0'}
    const sendButtonStyle = {color: '#efe3e3',backgroundColor: 'green', margin: '30px 0', width: '50%', left:'50%', opacity:'0.9'}
    const headerStyle = {color: '#4e4e90'}

    return(
        
        <Grid style={gridStyle}>
            <Paper elevation={10} style={paperStyle}>
                <Grid align='center' style={gridStyle}>
                    
                    <h1 style={headerStyle}>Send Prescription</h1>
                </Grid>
                
                <Grid container spacing={2}> 
                    <Grid item xs={12}>
                        <form>
                             
                            <Grid item xs={12}>
                            <p1>Description:</p1>
                            </Grid>
                            <TextareaAutosize 
                                aria-label="Description" 
                                style={textFeildStyle} 
                                minRows={3} 
                                placeholder="Description" 
                            />
                            <Grid item xs={12}>
                                <label>Upload Your Prescription:</label>
                            </Grid>
                            <Grid item xs={12} sm={4}className={classes.back}>
                                <Button
                                    variant="contained"
                                    component="label"
                                    startIcon={<CloudUploadIcon />}
                                    style={buttonStyle}
                                >
                                    Upload
                                    <input
                                        type="file"
                                        hidden
                                        startIcon={<CloudUploadIcon />}
                                        
                                    />
                                </Button>
                             
                                
                            </Grid> 

                            <Button type='submit' variant="contained" style={sendButtonStyle} href="#">Send</Button>
   
                        </form>
                         
                    </Grid>

                     
                </Grid>

                
            </Paper>
            <Box mt={5}>
                <Copyright />
            </Box>
        </Grid>
    )
}

export default Form