import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import GridContainer from "../../../components/Dashboard/Grid/GridContainer.js";
import Button from '@material-ui/core/Button';
import Map from '../../../components/customer/Map'

const products = [
  { name: 'Panadol', desc: '1 Card', price: 'Rs.20.00' },
  { name: 'Citrazine', desc: '2 Cards', price: 'Rs.100.00' },
  { name: 'Siddhalepa', desc: '1', price: 'Rs.150.00' },
  
];
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

export default function Review() {
    const classes = useStyles();

    const shareButtonStyle={color: '#efe3e3', backgroundColor: '#126e82', marginTop: '35px',width: '100%', padding: '2px', opacity:'0.9'}
    const headingStyle = {color: '#126e82',fontSize: '30px',textAlign: 'center'}
    const paperStyle={padding :20,height:'100%',width:'400px', margin:"20px auto"}
    const gridStyle={padding: 20,paddingTop: '2px'}
  return (
    
    <React.Fragment>
    <GridContainer style={gridStyle}>
        <Paper style={paperStyle}>
        <Grid item xs={12} align='center'>
            <h style={headingStyle}>Order Details</h>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h6" gutterBottom className={classes.title}>
            Name : Michelle 
          </Typography>
        </Grid>

        <Grid item xs={12}>
          <Typography variant="h6" gutterBottom className={classes.title}>
            Address : Galle Road, Colombo
          </Typography>
        </Grid>

        <Grid item xs={12}>
          <Typography variant="h6" gutterBottom className={classes.title}>
            Pharmacy Name : Pharma
          </Typography>
        </Grid>

        <Grid item xs={12}>
          <Typography variant="h6" gutterBottom className={classes.title}>
            City (Pharmacy) : Nugegoda
          </Typography>
        </Grid>

        <Grid item xs={12}>
          <Typography variant="h6" gutterBottom className={classes.title}>
            Status : Rejected
          </Typography>
        </Grid>

        <Grid item xs={12}>
          <Typography variant="h6" gutterBottom className={classes.title}>
            Reason : Out of stock
          </Typography>
        </Grid>
         
        <br/>
      <Typography variant="h6" gutterBottom>
        Order summary
      </Typography>
      <List disablePadding>
        {products.map((product) => (
          <ListItem className={classes.listItem} key={product.name}>
            <ListItemText primary={product.name}/>
            <Typography variant="body2">{product.desc}</Typography>
          </ListItem>
        ))}
         
      </List>
      <Grid container spacing={2}>
        {/*<Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom className={classes.title}>
            Delivery to :
          </Typography>
          <Typography gutterBottom>Kamal Perera</Typography>
          <Typography gutterBottom>{addresses.join(', ')}</Typography>
        </Grid>*/}
         
         
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
      </Paper>
    </GridContainer>
    </React.Fragment>
  );
}