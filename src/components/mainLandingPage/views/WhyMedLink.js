import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from '../../mainLandingPage/Typography';
import SearchIcon from '@material-ui/icons/Search';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';

const styles = (theme) => ({
  root: {
    display: 'flex',
    overflow: 'hidden',
    backgroundColor: theme.palette.secondary.light,
    
    
  },
  container: {
    marginTop: theme.spacing(15),
    marginBottom: theme.spacing(15),
    display: 'flex',
    position: 'relative',
  },
  item: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(0, 5),
  },
  image: {
    height: 55,
  },
  title: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(5),
    color:theme.palette.primary.main,
  },
  curvyLines: {
    pointerEvents: 'none',
    position: 'absolute',
    top: -180,
  },
});

function ProductValues(props) {
  const { classes } = props;

  return (
    <section className={classes.root}>
      <Container className={classes.container}>
        
        <Grid container spacing={5}>
        <Typography variant="h4" className={classes.title}>
        Why MedLink?
      </Typography>
        <p>
      
      <Typography variant="h5">  
      
      MedLink is a web-based platform which connects pharmacies and their customers. 

It  is established to manage sales and inventories of the pharmacies.

This is the platform for the customers to find the medicines they need.

Customers can use MedLink to find the nearest pharmacies that can fulfill their needs.

This application will help people to order and get their medicine delivered to wherever they want.

This is a platform that minimize the difficulties people face, during emergencies.

      </Typography>
      </p>
          </Grid>
      </Container>
    </section>
  );
}

ProductValues.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProductValues);
