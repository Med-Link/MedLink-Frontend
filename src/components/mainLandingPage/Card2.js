import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
// import Hidden from '../../containers/pharmacyLandingPage/PharmacyLandingPage';
import Button from '@material-ui/core/Button';  
// import pharmacy from '../assets/images/pharmacy.jpg' @material-ui/core/Hidden; 

import Link from '@material-ui/core/Link';
import sick from '../../assets/images/sick2.png';


// import CardActions from '@material-ui/core/CardAction';

const useStyles = makeStyles((theme) => ({
  
 
  cardMedia: {
    // width: 200,
    // height:200,
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-end',
    
  },
  root: {
    backgroundColor : theme.palette.secondary.light,
  },

  color1:{
    color:theme.palette.primary.main,
  },

  description: {
    fontSize : 15,
  },

  image: {
    height: 270,
    width:270,
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding:25,
    
  },
}));




export default function PharmacyCard(props) {
  const classes = useStyles();
  const { post } = props;

  return (
    <Container xs={30} md={50}>
    
          <Grid item xs={30} md={50}>

      
        <Card className={classes.root} xs={12} xs={12} >
        <CardActionArea component="a" href="#">
          {/* <div className={classes.cardDetails}> */}
          
            <CardMedia className={classes.cardMedia} >
            

            <img src={sick} className={classes.image} />
            </CardMedia>
            <CardContent>
              <Typography component="h1" variant="h7"  className={classes.color1}>
                {"For Customers"}
              </Typography>
              <Typography variant="subtitle1" color="textSecondary">
               {"We bring your medicine to your doorstep. Join us to find all the medicines you need"}
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
    
    </Container>
  );
}



PharmacyCard.propTypes = {
  post: PropTypes.object,
};