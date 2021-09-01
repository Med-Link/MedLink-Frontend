import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Map from '../../../components/customer/Map'
import PropTypes from 'prop-types';


// const products = [
//   { name: 'Panadol', desc: '1 Card', price: 'Rs.20.00' },
//   { name: 'Citrazine', desc: '2 Cards', price: 'Rs.100.00' },
//   { name: 'Siddhalepa', desc: '1', price: 'Rs.150.00' },
  
// ];
const addresses = ['No: 2', 'Gall Road', 'Colombo'];
//const payments = [
  //{ name: 'Card type', detail: 'Visa' },
  //{ name: 'Card holder', detail: 'Mr John Smith' },
  //{ name: 'Card number', detail: 'xxxx-xxxx-xxxx-1234' },
  //{ name: 'Expiry date', detail: '04/2024' },
//];

const useStyles = makeStyles((theme) => ({
  listItem: {
    padding: theme.spacing(1, 0),
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

  const shareButtonStyle={color: '#efe3e3', backgroundColor: '#126e82', marginTop: '35px',width: '100%', padding: '2px', opacity:'0.9'}

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Order summary
      </Typography>
      <List disablePadding>
        {products.map((product) => (
          <ListItem className={classes.listItem} key={product.medname}>
            <ListItemText primary={product.medname} secondary={product.quantity} />
            <Typography variant="body2">{product.price}</Typography>
          </ListItem>
        ))}

        {/* {products.map((product) => ( */}
        {products.length>0 ? <ListItem className={classes.listItem} key={products[0].totalprice}>
          <ListItemText primary="Total (Without Delivery Charges)" />
          <Typography variant="subtitle1" className={classes.total}>
            {products[0].totalprice}
          </Typography>
        </ListItem>:<></>}

        {/* ))}  */}
      </List>
      <Grid container spacing={2}>
        {/*<Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom className={classes.title}>
            Delivery to :
          </Typography>
          <Typography gutterBottom>Kamal Perera</Typography>
          <Typography gutterBottom>{addresses.join(', ')}</Typography>
        </Grid>*/}
        <Grid item xs={12}>
          <Typography variant="h6" gutterBottom className={classes.title}>
            Please Share Your Location To Calculate Delivery Charges (Compulsary):
          </Typography>
        </Grid>
        <Grid item xs={12}>
          {/*<Button variant="contained" style={shareButtonStyle} href="#">Share Location</Button>
          */}
          <Map
            center={{lat: 6.9271, lng: 79.8612}}
            height='230px'
            width='100%'
            zoom={7} />
        </Grid>
        <Grid item container direction="column" xs={12} sm={6}>
          {/*<Typography variant="h6" gutterBottom className={classes.title}>
            Payment details
          </Typography>
          <Grid container>
            {payments.map((payment) => (
              <React.Fragment key={payment.name}>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payment.name}</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payment.detail}</Typography>
                </Grid>
              </React.Fragment>
            ))}
            </Grid>*/}
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

Review.propTypes = {
  products: PropTypes.any,
  // children: PropTypes.node.isRequired,
  // classes: PropTypes.object.isRequired,
};