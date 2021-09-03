import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    margin: {
      margin: theme.spacing(1),
    },
    withoutLabel: {
      marginTop: theme.spacing(3),
    },
    sub: {
      width: '20',
    },
    textField: {
      width: '25ch',
    },
  
  }));

  export default function Search() {

    const classes = useStyles();

    return (
<div className={classes.search}>
<div className={classes.searchIcon}>
  <FormControl fullWidth className={classes.margin} variant="outlined">
    <InputLabel htmlFor="outlined-adornment-password">Search</InputLabel>
    <OutlinedInput

      endAdornment={
        <InputAdornment position="end">
          <SearchIcon />
          {/* <Button variant="contained" color="primary"><SearchIcon />Search</Button> */}
        </InputAdornment>
      }
      labelWidth={70}
    />
  </FormControl>

</div>
</div>
    );
}
