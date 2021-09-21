import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';

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


export default function TotalBill(props) {
   
  const classes = useStyles();
  const costs= props.costs;

  if(!costs){
    return<></>
  }else{
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Order summary
      </Typography>
      <List disablePadding>

        {<ListItem className={classes.listItem}>
          <ListItemText primary="Total Amount for Medicine (Rs.)" />
          <Typography variant="subtitle1" className={classes.total}>
            {costs.totalprice}
          </Typography>
          
        </ListItem>}
        <ListItem className={classes.listItem}>
          <ListItemText primary="Delivery Charges (Rs.)" />
          <Typography variant="subtitle1" className={classes.total}>
          {costs.deliverycost}
          </Typography>
          
        </ListItem>
        <ListItem className={classes.listItem}>
          <ListItemText primary="Service Charges (Rs.)" />
          <Typography variant="subtitle1" className={classes.total}>
          {costs.servicecost}
          </Typography>
          
        </ListItem>

        <ListItem className={classes.listItem}>
          <ListItemText primary="Total (Rs.)" />
          <Typography variant="subtitle1" className={classes.total}>
          {costs.totalcost}
          </Typography>
          
        </ListItem>
      </List>
       
    </React.Fragment>
  );
  }
}
TotalBill.propTypes = {
  costs: PropTypes.any,
   
};