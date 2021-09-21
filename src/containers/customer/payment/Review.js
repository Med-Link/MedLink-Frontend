import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Map from '../../../components/customer/CustomerLocationSelection'
import PropTypes from 'prop-types';
import GridContainer from '../../../components/Dashboard/Grid/GridContainer';
import GridItem from '../../../components/Dashboard/Grid/GridItem';


const useStyles = makeStyles((theme) => ({
  listItem: {
    padding: theme.spacing(0, 2),
  },
  total: {
    fontWeight: 700,
  },
  title: {
    marginTop: theme.spacing(2),
  },
}));

export default function Review(props) {
  const classes = useStyles();
  const products= props.products;

  return (
    <div>
      <GridContainer spacing={2}>
        <GridItem xs={12} sm={12} md={12}>
          <Typography variant="body1">
            <b>Order summary</b>
          </Typography>
        </GridItem>
        <GridItem xs={12} sm={12} md={12}>
          <List disablePadding>
            {products.map((product) => (
              <ListItem className={classes.listItem} key={product.medname}>
                <ListItemText 
                  primary={
                    <Typography variant="overline" gutterBottom="false">{product.medname}</Typography>} 
                  secondary={product.quantity}/>
                <Typography variant="body2">{product.price}</Typography>
              </ListItem>
            ))}

            {products.length>0 ? <ListItem className={classes.listItem} key={products[0].totalprice}>
              <ListItemText primary={
                <Typography variant="overline" gutterBottom="false">Total (Without Delivery Charges)</Typography> }/>
              <Typography variant="body2" className={classes.total}>
                {products[0].totalprice}
              </Typography>
            </ListItem>:<></>}

          </List>
        </GridItem>
        </GridContainer>
        <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <Typography variant="body1" gutterBottom className={classes.title}>
            <b>Move the marker to Pin Your Delivery Location (Compulsary for Calculating Delivery Charges ):</b>
          </Typography>
        </GridItem>
        <GridItem xs={12} sm={12} md={12}>
          <Map
            center={{lat: 6.9271, lng: 79.8612}}
            height='350px'
            width='100%'
            zoom={7} />
        </GridItem>
      </GridContainer>
      </div>
  );
}

Review.propTypes = {
  products: PropTypes.any,
   
};