import React from 'react';
import { Grid } from '@material-ui/core';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
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

export default function BuyingHistory(props){

    const classes = useStyles();
    const paperStyle={padding :20,height:'850px',width:'400px', margin:"10px auto"}
    const avatarStyle={backgroundColor: '#126e82'}
    const gridStyle={padding: 20, width:'500px',margin:"auto" }
    const buttonStyle={color: '#efe3e3',backgroundColor: '#126e82', margin: '30px 0', width: '25%', left:'75%', opacity:'0.9'}
    const headerStyle={color: '#126e82'}

    return(
        <Grid style={gridStyle}>
            <Grid align='center' style={gridStyle}>    
                <h1 style={headerStyle}>Order History</h1>
            </Grid>
            <Grid container spacing={2}> 
                <Grid item xs={12}>
                    <Typography variant="h6" gutterBottom style={headerStyle}>
                        Order summary
                    </Typography>
                    <List disablePadding>
                        {props.products.map((product) => (
                        <ListItem className={classes.listItem} key={product.medname}>
                            <ListItemText primary={product.medname} secondary={product.quantity} />
                                <Typography variant="body2">{product.price}</Typography>
                            </ListItem>
                        ))}
                        {products.length>0 ? <ListItem className={classes.listItem} key={products[0].totalprice}>
                            <ListItemText primary="Total (Without Delivery Charges)" />
                            <Typography variant="subtitle1" className={classes.total}>
                                {products[0].totalprice}
                            </Typography>
                            </ListItem>:<></>}
                    </List>
                </Grid>
            </Grid>
        </Grid>
    )
}
BuyingHistory.propTypes = {
    products: PropTypes.any,
    // costs:PropTypes.any,
    // children: PropTypes.node.isRequired,
    // classes: PropTypes.object.isRequired,
  };
// export default BuyingHistory