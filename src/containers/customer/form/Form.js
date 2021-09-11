import React,{useState} from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { backendUrl } from '../../../urlConfig';

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
import SendIcon from '@material-ui/icons/Send';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';


function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

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

  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
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


export default function Form(props){

   
    const paperStyle={padding :20, height:'500px',width:'400px', margin:"20px auto"}
    const avatarStyle={backgroundColor: '#2ab5b5'}
    const gridStyle={padding: 20}
    const buttonStyle={color: '#efe3e3',backgroundColor: '#126e82', margin: '8px 0'}
    const classes = useStyles();
    const textFeildStyle = {height: '150px', width: '390px',margin: '8px 0 16px 0'}
    const sendButtonStyle = {color: '#efe3e3',backgroundColor: '#126e82', width: '30%', left:'70%', opacity:'0.9'}
    const headerStyle = {color: '#126e82' }
    const [open, setOpen] = React.useState(false);
    
    
    
    const handleClick = () => {
      setOpen(true);
    };
    
    const handleClose = (event, reason) => {
      if (reason === 'clickaway') {
        return;
      }
      
      setOpen(false);
    };
  const [prescription, setPrescription] = useState([]);

  const [description, setDescription] = useState('');
  
  const prescriptionsend = async (e) => {
    const token = window.localStorage.getItem('token');

      // e.preventDefault();
      const form = new FormData();
      form.append("description", description);
      form.append("pharmacyid", props.pharmacy);
      // console.log(description)
      for (let pic of prescription) {
        form.append("prescription", pic);
      }
        // if(checked){
        axios.post(`${backendUrl}/order/create`, form,{headers: {
          'Authorization': token ? `Bearer ${token}` : ''
        },}).then((response)=>{
        console.log(response);
        console.log("aaaaa")

            // setSignedUp(true);

        }).catch((err)=>{
            console.log(err);
            // setError("Signup Failed");
        });
        
     
    };
    const handlePrescriptionDocs = (e) => {
      setPrescription([...prescription, e.target.files[0]]);
    };
    return(               
                <Grid container spacing={2}> 
                  <Grid item xs={12}>
                    <form> 
                      <Grid item xs={12}>
                        <p1>Description:</p1>
                      </Grid>
                      <Grid item xs={12}>
                        <TextareaAutosize 
                          aria-label="Description" 
                          style={textFeildStyle} 
                          onChange={(e) => setDescription(e.target.value) }

                          // minRows={3} 
                          placeholder="Description" 
                        />
                      </Grid>
                      <Grid item xs={12} >
                          <label>Upload Your Prescription:</label>
                        </Grid>
                        
                        <Grid item xs={12} sm={12}>
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
                                  onChange={handlePrescriptionDocs}

                                  startIcon={<CloudUploadIcon />}
                                  
                              />
                          </Button>
                        </Grid> 
                        <Grid item xs={12} sm={12} >
                          <div className={classes.root}>
                            <Button variant="contained" onClick={prescriptionsend} style={sendButtonStyle} startIcon={ <SendIcon/>}>
                              
                              Send 
                             
                            </Button>
                            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose} >
                              <Alert onClose={handleClose} severity="success">
                                Sending prescription successfully!
                              </Alert>
                            </Snackbar>
                          </div>
                      </Grid>
                    </form>
                  </Grid>   
                </Grid>
    )
}

Form.propTypes = {
  pharmacy: PropTypes.any,
  // costs:PropTypes.any,
  // children: PropTypes.node.isRequired,
  // classes: PropTypes.object.isRequired,
};