import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '../../mainLandingPage/Button';
import Typography from '../../mainLandingPage/Typography';
import ProductHeroLayout from './ProductHeroLayout';
import PharmacyCard from '../Card1';
import CustomerCard from '../Card2';
// import { minHeight } from '@material-ui/system';
import GridContainer from '../../Dashboard/Grid/GridContainer';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import land from '../../../assets/images/land.jpg';


const backgroundImage =
  'https://images.unsplash.com/photo-1534854638093-bada1813ca19?auto=format&fit=crop&w=1400&q=80';

const styles = (theme) => ({
  background: {
    backgroundImage: `url(${backgroundImage})`,
    // backgroundColor: '#7fc7d9', // Average color of the background image.
    backgroundPosition: 'center',
  },
  container: {
    marginTop: theme.spacing(10),
    marginBottom: theme.spacing(15),
    marginLeft:theme.spacing(6),
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
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
    width:300,
    height:300,
  },

  right: {
    flex: 100,
    display: 'flex',
    justifyContent: 'flex-end',
  },

  color:{
    color: theme.palette.secondary.main,
    fontSize:25,
    fontFamily: 'sans-serif',
    padding: 10,
  },

  image:{
    height:450,
    width:450,
  },

});




function ProductHero(props) {
  const { classes } = props;

  return (

    <Container className={classes.container}>
        
        
        <div>
          <Grid container spacing={6}>
            <Grid item xs={12} md={4}>
              <div className={classes.item}>
                
                
                <PharmacyCard />

              </div>
            </Grid>
            <Grid item xs={12} md={4}>
              <div className={classes.item}>
               
                <CustomerCard />
              </div>
            </Grid>
            <Grid item xs={12} md={4}> 
            {/* /2 and x3 */}
              <div className={classes.item}>

                <img src={land} className={classes.image} />
                <Typography className={classes.color} >
                  {'Sri Lanka\'s first ever largest pharmacy-customer link'}
                  {/* {'Your Sundays will no longer be alike.'} */}
                </Typography>
              </div>
            </Grid>
          </Grid>
        </div>
        
      </Container>
    
      
      
  );
}

ProductHero.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProductHero);
