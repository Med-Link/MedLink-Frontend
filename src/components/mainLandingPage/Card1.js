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
import pharmacy2 from '../../assets/images/pharmacy2.jpg';
import GridContainer from '../Dashboard/Grid/GridContainer';


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
    boxShadow:10,
 
  },

  color1:{
    color:theme.palette.primary.main,
  },

  description: {
    fontSize : 15,
  },

  image: {
    height: 270,
    width:330,
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding:25,
    
  },
  font:{
    color:theme.palette.secondary.dark,
  }
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
            <img src={pharmacy2} className={classes.image} />
          </CardMedia>
          <CardContent className={classes.font}>
            <Typography component="h1" variant="h7"  className={classes.color1}>
              {"For Pharmacies"}
            </Typography>
            <Typography variant="subtitle1">
              {"We make it easy for you to reach your customers.Join us to provide a better service"}
            </Typography>
            <Typography variant="h5" paragraph className={classes.description}>
              {}
            </Typography>
            <Grid container spacing={3}>
              <Grid item>
                <Link href="/pharmacysignup">                    
                  <Button  color="secondary"
                    variant="contained"
                    size="large"
                    className={classes.button}
                    component="a"
                  > Sign Up
                  </Button>
                </Link>
              </Grid>
              <Grid item>
                <Link href="/pharmacysignin">                    
                  <Button  color="secondary"
                    variant="contained"
                    size="large"
                    className={classes.button}
                    component="a"
                  > Sign In 
                  </Button>
                </Link>
              </Grid>
            </Grid>            
          </CardContent>
          {/* </div> */}
          </CardActionArea>
        </Card>
      </Grid>
    </Container>
  );
}

// {"We bring your medicine to your doorstep. Join us to find all the medicines you need"}

PharmacyCard.propTypes = {
  post: PropTypes.object,
};