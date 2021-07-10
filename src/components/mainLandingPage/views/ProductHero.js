import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '../../mainLandingPage/Button';
import Typography from '../../mainLandingPage/Typography';
import ProductHeroLayout from './ProductHeroLayout';
import PharmacyCard from '../Card1';
import CustomerCard from '../Card2';
import { minHeight } from '@material-ui/system';

const backgroundImage =
  'https://images.unsplash.com/photo-1534854638093-bada1813ca19?auto=format&fit=crop&w=1400&q=80';

const styles = (theme) => ({
  background: {
    backgroundImage: `url(${backgroundImage})`,
    // backgroundColor: '#7fc7d9', // Average color of the background image.
    backgroundPosition: 'center',
  },
  button: {
    minWidth: 200,
  },
  h5: {
    marginBottom: theme.spacing(4),
    marginTop: theme.spacing(4),
    [theme.breakpoints.up('sm')]: {
      marginTop: theme.spacing(10),
    },
  },
  more: {
    marginTop: theme.spacing(2),
  },

  mainGrid: {
    marginTop: theme.spacing(2),
  },

  subGrid: {
    marginTop: theme.spacing(2),
  },
  
  photo:{
    width:350,
    height:350,
  },

  right: {
    flex: 100,
    display: 'flex',
    justifyContent: 'flex-end',
  },

});




function ProductHero(props) {
  const { classes } = props;

  return (
    <ProductHeroLayout backgroundClassName={classes.background}>
     
      <img style={{ display: 'none' }} src={backgroundImage} alt="increase priority" />
      <PharmacyCard />
      <CustomerCard />
         
      
    </ProductHeroLayout>
    
      
      
  );
}

ProductHero.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProductHero);
