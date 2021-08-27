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
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles } from '@material-ui/core/styles';
//import headerStyle from '../../../assets/jss/material-dashboard-react/components/headerStyle';

const products = [
    { name: 'Panadol', desc: '1 Card', price: 'Rs.20.00' },
    { name: 'Citrazine', desc: '2 Cards', price: 'Rs.100.00' },
    { name: 'Siddhalepa', desc: '1', price: 'Rs.150.00' },
    
];

const useStyles = makeStyles((theme) => ({
    listItem: {
      padding: theme.spacing(1, 0),
    },
     
  }));

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

const BuyingHistory=()=>{

    const classes = useStyles();
    const paperStyle={padding :20,height:'850px',width:'400px', margin:"10px auto"}
    const avatarStyle={backgroundColor: '#126e82'}
    const gridStyle={padding: 20}
    const buttonStyle={color: '#efe3e3',backgroundColor: '#126e82', margin: '30px 0', width: '50%', left:'50%', opacity:'0.9'}
    const headerStyle={color: '#126e82'}

    return(
        
        <Grid style={gridStyle}>
             
            <Paper elevation={10} style={paperStyle}>
                <Grid align='center' style={gridStyle}>
                     
                    <h1 style={headerStyle}>Order History</h1>
                </Grid>

                <Grid container spacing={2}> 
                    <Grid item xs={12} sm={6}>
                        <TextField
                            id="fullName"
                            label="Full Name"
                            defaultValue="Kamal Perera"
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

                    <Grid item xs={12}>
                        <Typography variant="h6" gutterBottom style={headerStyle}>
                            Order summary
                        </Typography>
                        <List disablePadding>
                            {products.map((product) => (
                            <ListItem className={classes.listItem} key={product.name}>
                                <ListItemText primary={product.name} secondary={product.desc} />
                                <Typography variant="body2">{product.price}</Typography>
                            </ListItem>
                            ))}
                            <ListItem className={classes.listItem}>
                            <ListItemText primary="Total" />
                            <Typography variant="subtitle1" className={classes.total}>
                            Rs.270.00
                            </Typography>
                            </ListItem>
                        </List>
                    </Grid>
                     
                        <Button type='submit' variant="contained" style={buttonStyle} href="/customer/buyingHistory">Back</Button>
                     
                </Grid> 

                 
                
            </Paper>
            <Box mt={5}>
                <Copyright />
            </Box>
        </Grid>
    )
}

export default BuyingHistory