import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { withStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import AppBar from '../../components/AppBar';
import Toolbar, { styles as toolbarStyles } from '../../components/Toolbar';


const styles = (theme) => ({
  title: {
    fontSize: 28,
    color:theme.palette.primary.dark,
    
  },
  placeholder: toolbarStyles(theme).root,
  toolbar: {
    justifyContent: 'space-between',
  },
  left: {
    flex: 1,
  },
  leftLinkActive: {
    color: theme.palette.primary.light,
  },
  right: {
    flex: 100,
    display: 'flex',
    justifyContent: 'flex-end',
  },
  //signin
  rightLink: {
    fontSize: 16,
    color: theme.palette.primary.dark,
    marginLeft: theme.spacing(3),
  },
  //signup
  linkSecondary: {
    color: theme.palette.primary.light,
  },
});

function AppAppBar(props) {
  const { classes } = props;

  return (
    <div>
      <AppBar position="fixed">
        <Toolbar className={classes.toolbar}>
          <div className={classes.left} />
          <div className={classes.imageDots} />
            <img
              src='../../assets/Images/logo.jpg'
              alt="logo"
              className={classes.image}
            />
          <Link
            variant="h6"
            underline="none"
            color="inherit"
            className={classes.title}
            href="/"
          >
            {'MedLink'}
          </Link>
          
          <div className={classes.right}>
            <Link
              color="inherit"
              variant="h6"
              underline="none"
              className={classes.rightLink}
              href="Signin/"
            >
              {'Sign In'}
            </Link>
            <Link
              variant="h6"
              underline="none"
              className={clsx(classes.rightLink, classes.linkSecondary)}
              href="Signup/"
            >
              {'Sign Up'}
            </Link>
          </div>
        </Toolbar>
      </AppBar>
      <div className={classes.placeholder} />
    </div>
  );
}

AppAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AppAppBar);
