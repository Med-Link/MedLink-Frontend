import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
// import Hidden from '../../containers/pharmacyLandingPage/PharmacyLandingPage';
import Button from '@material-ui/core/Button';  
// import pharmacy from '../assets/images/pharmacy.jpg' @material-ui/core/Hidden; 

import Link from '@material-ui/core/Link';


// import CardActions from '@material-ui/core/CardAction';

const useStyles = makeStyles((theme) => ({
  card: {
    display: 'flex',
    width :200,
    
  },
  cardDetails: {
    flex: 1,
    height:200,
    // width:50, 
    
  },
  cardMedia: {
    width: 200,
    height:200,
    
  },
  root: {
    maxWidth: 350,
   // maxHeight: 600,
    backgroundColor : theme.palette.secondary.light,
    color: theme.palette.common.white,
    marginRight: theme.spacing(100),
    // flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',
  },

  description: {
    fontSize : 15,
  },

  // media: {
  //   height: 140,
  // },
}));




export default function PharmacyCard(props) {
  const classes = useStyles();
  const { post } = props;

  return (
    <Grid item xs={0} md={0}>

      
        <Card className={classes.root} xs={12}>
        <CardActionArea component="a" href="#">
          {/* <div className={classes.cardDetails}> */}
          
            <CardMedia 
            className={classes.cardMedia} 
            
            />

            <CardContent>
              <Typography component="h2" variant="h7">
                {"For Pharmacies"}
              </Typography>
              <Typography variant="subtitle1" color="textSecondary">
                {"We make it easy for you to reach your customers.Join us to provide a better service"}
              </Typography>
              <Typography variant="h5" paragraph className={classes.description}>
                {}
              </Typography>
              <Link href="../../containers/pharmacyLandingPage/PharmacyLandingPage">                    
              <Button  color="secondary"
                    variant="contained"
                    size="large"
                    className={classes.button}
                    component="a"
                    // href="../../containers/pharmacyLandingPage/PharmacyLandingPage">
               > Learn More 
              </Button>
              </Link>
            </CardContent>
          {/* </div> */}
          </CardActionArea>
        </Card>
      
    </Grid>
  );
}

PharmacyCard.propTypes = {
  post: PropTypes.object,
};