import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Hidden from '@material-ui/core/Hidden';
import Button from '@material-ui/core/Button';  


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
    // marginRight: theme.spacing(100),
    // marginBlockStart : theme.spacing(10),
    marginTop: theme.spacing(-52),
    marginLeft: theme.spacing(5),
    display: 'flex',
    flexDirection: 'column',
    
  },
gap:{
  
},
  

  description: {
    fontSize : 15,
  },

  // media: {
  //   height: 140,
  // },
}));




export default function CustomerCard(props) {
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
                {"For Customers"}
              </Typography>
              <Typography variant="subtitle1" color="textSecondary">
                {"We bring your medicine to your doorstep. Join us to find all the medicines you need"}
              </Typography>
              <Typography variant="h5" paragraph className={classes.description}>
                {}
              </Typography>
              <Button  color="secondary"
                    variant="contained"
                    size="large"
                    className={classes.button}
                    component="a"
                    href="">
                Learn More 
              </Button>
            </CardContent>
          {/* </div> */}
          </CardActionArea>
        </Card>
      
    </Grid>
  );
}

CustomerCard.propTypes = {
  post: PropTypes.object,
};