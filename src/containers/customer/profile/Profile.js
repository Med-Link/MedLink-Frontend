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
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import EditProfile from './EditProfile';

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

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
    setOpen(true);
    };

    const handleClose = () => {
    setOpen(false);
    };

    const paperStyle={padding :20,height:'550px',width:'500px', margin:"20px auto"}
    const avatarStyle={backgroundColor: '#126e82'}
    const gridStyle={padding: 20}
    const buttonStyle={color: '#efe3e3',backgroundColor: '#126e82', margin: '30px 0 0 0', width: '100%'}
    const headingStyle={color: '#126e82'}

    return(
        
        <Grid style={gridStyle}>
             
            <Paper elevation={10} style={paperStyle}>
                <Grid align='center' style={gridStyle}>
                    <Avatar style={avatarStyle}><AccountBoxIcon/></Avatar>
                    <h1 style={headingStyle}>Kamal Perera</h1>
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
                    <Grid container spacing={2}> 
                    <Grid item xs={6}>
                        <Button type='submit' fullWidth variant="contained" style={buttonStyle} onClick={handleClickOpen}>Edit Profile</Button>
                        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                        <DialogTitle id="form-dialog-title">
                             
                        </DialogTitle>
                        <DialogContent>
                            <DialogContentText>
                            <EditProfile/>
                            </DialogContentText>
                        </DialogContent>
                        </Dialog>
                    </Grid> 
                    <Grid item xs={6}>
                        <Button type='submit' fullWidth variant="contained" style={buttonStyle} href="/ResetPassword/">Reset Password</Button>
                    </Grid> 
                    </Grid>
                </Grid> 

                 
                
            </Paper>
            <Box mt={5}>
                <Copyright />
            </Box>
        </Grid>
    )
}

export default Profile