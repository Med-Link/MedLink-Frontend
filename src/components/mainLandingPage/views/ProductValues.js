import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from '../../mainLandingPage/Typography';
import SearchIcon from '@material-ui/icons/Search';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import { blue } from '@material-ui/core/colors';

const styles = (theme) => ({
  root: {
    display: 'flex',
    overflow: 'hidden',
   // backgroundColor: theme.palette.secondary.light,
  },
  container: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(0),
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
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(5),
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
        <img
          src="/static/themes/onepirate/productCurvyLines.png"
          className={classes.curvyLines}
          alt="curvy lines"
        />
        <Grid container spacing={2}>
          <Grid item xs={12} md={4}>
            <div className={classes.item}>
            <SearchIcon style={{ fontSize: 60 }}/>
              <Typography variant="h6" className={classes.title}>
                Search Your Meds
              </Typography>
              <Typography variant="h5">
                {'If you know the name of the medicine you want, all you have to do is search it by the name'}
                {', you will see a list of pharmacies which has the medicine you want.'}
              </Typography>
            </div>
          </Grid>
          
          <Grid item xs={12} md={4}>
            <div className={classes.item}>
            <LocalHospitalIcon style={{ fontSize: 55 }} />
              <Typography variant="h6" className={classes.title}>
                Choose Your Pharmacy
              </Typography>
              <Typography variant="h5">
                {'You can choose the pharamcy according to your preference.'}
                {'You are given plenty of options to search as you wish. Pharmacists will confirm your order once you request for it.'}
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} md={4}>
            <div className={classes.item}>
            <AddShoppingCartIcon style={{ fontSize: 55 }} />
              <Typography variant="h6" className={classes.title}>
                Order Your Medicine
              </Typography>
              <Typography variant="h5">
                {'After selecting a pharamcy, all you have to do is place your order.'}
                {'Once your order is accepted you can orders your medicine. Your medicine will be delivered to your door step'}
              </Typography>
            </div>
          </Grid>

        </Grid>
      </Container>
    </section>
  );
}

ProductValues.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProductValues);
