import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import Container from '@material-ui/core/Container';
import Typography from '../../mainLandingPage/Typography';
import TextField from '../../mainLandingPage/TextField';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import Button from '../../mainLandingPage/Button';
import medLink from '../../../assets/images/medLink.jpg';

function Copyright() {
  return (
    <React.Fragment>
      {'© '}
      <Link color="inherit" href="https://material-ui.com/">
        MedLink
      </Link>{' '}
      {new Date().getFullYear()}
    </React.Fragment>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    backgroundColor: theme.palette.secondary.light,
  },
  container: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(8),
    display: 'flex',
    
  },
  
  image:{
    height:45,
    width:45,
  },
  link:{
    fontSize: 45,
    color: theme.palette.secondary.main,
  },
  title: {
    
    fontSize: 45,
    color:theme.palette.primary.dark,
    
  },
  iconsWrapper: {
    height: 120,
  },
  icons: {
    display: 'flex',
  },
  icons: {
    width: 30,
    height:30,
    // display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: theme.spacing(1),
    
  },
  list: {
    margin: 0,
    listStyle: 'none',
    padding: 0,
  },
  listItem: {
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  language: {
    marginTop: theme.spacing(1),
    width: 150,
  },
  textField: {
    width: '75%',
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),

  },
  subButton: {
    padding: theme.spacing(1, 2),
    fontSize: theme.typography.pxToRem(13),
    backgroundColor: theme.palette.secondary.main,

  },


}));

const LANGUAGES = [
  {
    code: 'en-US',
    name: 'English',
  },
  {
    code: 'fr-FR',
    name: 'Français',
  },
];

export default function AppFooter() {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Typography component="footer" className={classes.root}>
      <Container className={classes.container}>

        <Grid container spacing={10}>

          <Grid item xs={12} md={6} className={classes.cardWrapper}>
            <div className={classes.card}>
            <img src={medLink} className={classes.image} />
          <Link
            variant="h6"
            underline="none"
            color="inherit"
            className={classes.title}
            href="/"
            
          >
            {'Med'}
            </Link>

            <Link
            variant="h6"
            underline="none"
            color="inherit"
            className={classes.link}
            href="/"
          >
            {'Link'}
            </Link>
          
            
              {/* <form onSubmit={handleSubmit} className={classes.cardContent}>
              <Typography variant="h4" component="h2" gutterBottom>
                Subscribe
              </Typography>
              <Typography variant="h5">
                Subscribe to get in touch with us
              </Typography>
              <TextField noBorder className={classes.textField} placeholder="Your email" />
              <Button type="submit" color="primary" variant="contained" className={classes.subButton}>
                Keep me updated
              </Button>
            </form> */}
            </div>
          </Grid>
          {/* <Grid item xs={6} sm={4} md={2}>
            <Typography variant="h6" marked="left" gutterBottom>
              Legal
            </Typography>
            <ul className={classes.list}>
              <li className={classes.listItem}>
                <Link href="/premium-themes/onepirate/terms/">Terms</Link>
              </li>
              <li className={classes.listItem}>
                <Link href="/premium-themes/onepirate/privacy/">Privacy</Link>
              </li>
            </ul>
          </Grid> */}

          <Grid item xs={6} sm={4} md={3} >
            <Grid
              container
              direction="column"
              justify="flex-end"
              className={classes.iconsWrapper}
              spacing={0}
            >
              {/* <Grid item className={classes.icons} >
              <ul className={classes.list}>
              <li className={classes.listItem}>
                <FacebookIcon/> Facebook 
              </li>
              <li className={classes.listItem}>
              <InstagramIcon />Instagram
              </li>
              <li className={classes.listItem}>
              <TwitterIcon />
                Twitter
              </li>
            </ul>
               </Grid> */}

            </Grid>

          </Grid>
          {/* <Grid listItem>
                <Copyright />
              </Grid> */}

          {/* <Grid item xs={6} sm={8} md={4}>
            <Typography variant="h6" marked="left" gutterBottom>
              Language
            </Typography>
            <TextField
              select
              SelectProps={{
                native: true,
              }}
              className={classes.language}
            >
              {LANGUAGES.map((language) => (
                <option value={language.code} key={language.code}>
                  {language.name}
                </option>
              ))}
            </TextField>
          </Grid> */}

          <Grid item>
          <Grid>
              <FacebookIcon className={classes.icons}/>
              <InstagramIcon className={classes.icons} />
              <TwitterIcon className={classes.icons} />
              </Grid>
            <Grid item>
              <Copyright />
            </Grid>
            <Typography variant="caption">
              {' by Group 49 for UCSC third year group project'}
              
            </Typography>
            
          </Grid>
        </Grid>
      </Container>
    </Typography>
  );
}