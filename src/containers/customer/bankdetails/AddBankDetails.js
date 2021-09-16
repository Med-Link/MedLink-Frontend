import React from 'react';
import { Grid } from '@material-ui/core';
//import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import IconButton from '@material-ui/core/IconButton';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="/">
                Medlink
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

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
    textField: {
        width: '85%',
    },
}));

const ResetPassword = () => {

    const classes = useStyles();
    const [values, setValues] = React.useState({
        amount: '',
        password: '',
        weight: '',
        weightRange: '',
        showPassword: false,
    });

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    // const handleClickShowPassword = () => {
    //     setValues({ ...values, showPassword: !values.showPassword });
    // };

    // const handleMouseDownPassword = (event) => {
    //     event.preventDefault();
    // };


    const gridStyle={padding: '10px', margin:'20px 0px 10px 20px', width:'600px'}
    const buttonStyle = { color: '#efe3e3', backgroundColor: '#126e82', margin: '20px', width: '50%', left: '60%' }
    const headingStyle = { color: '#126e82', align:'center' };
    const inputStyle = { width: '600px' }

    return (

        <Grid style={gridStyle} >
            <h1 style={headingStyle} align='left'>Add Bank Details</h1>
            <Grid container spacing={0}>
                <Grid item xs={12}>

                    <FormControl className={clsx(classes.margin, classes.textField)} variant="outlined">
                        <InputLabel style={inputStyle} htmlFor="outlined-adornment-password">Name</InputLabel>
                        <OutlinedInput
                            id="outlined-adornment-password"
                            type={values.showPassword ? 'text' : 'password'}
                            value={values.password}
                            onChange={handleChange('password')}
                            labelWidth={120}
                        />
                    </FormControl>

                    <FormControl className={clsx(classes.margin, classes.textField)} variant="outlined">
                        <InputLabel style={inputStyle} htmlFor="outlined-adornment-password">Account Number</InputLabel>
                        <OutlinedInput
                            id="outlined-adornment-password"
                            type={values.showPassword ? 'text' : 'password'}
                            value={values.password}
                            onChange={handleChange('password')}
                            labelWidth={120}
                        />
                    </FormControl>
                    <FormControl className={clsx(classes.margin, classes.textField)} variant="outlined">
                        <InputLabel style={inputStyle} htmlFor="outlined-adornment-password">Branch Name</InputLabel>
                        <OutlinedInput
                            id="outlined-adornment-password"
                            type={values.showPassword ? 'text' : 'password'}
                            value={values.password}
                            onChange={handleChange('password')}
                            labelWidth={120}
                        />
                    </FormControl>
                    <FormControl className={clsx(classes.margin, classes.textField)} variant="outlined">
                        <InputLabel style={inputStyle} htmlFor="outlined-adornment-password">Expiry Date</InputLabel>
                        <OutlinedInput
                            id="outlined-adornment-password"
                            type={values.showPassword ? 'text' : 'password'}
                            value={values.password}
                            onChange={handleChange('password')}
                            labelWidth={120}
                        />
                    </FormControl>
                </Grid>



                {/* <Grid item xs={12}>
                        
                        <FormControl className={clsx(classes.margin, classes.textField)} variant="outlined">
                            <InputLabel style={inputStyle} htmlFor="outlined-adornment-password">New Password</InputLabel>
                            <OutlinedInput
                            id="outlined-adornment-password"
                            type={values.showPassword ? 'text' : 'password'}
                            value={values.password}
                            onChange={handleChange('password')}
                            
                            endAdornment={
                                <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                    edge="end"
                                >
                                {values.showPassword ? <Visibility /> : <VisibilityOff />}
                                </IconButton>
                                </InputAdornment>
                            }
                            labelWidth={120}
                        />
                        </FormControl>
                    </Grid> */}




                <Grid item xs={6}>
                    <Button type='submit' variant="contained" style={buttonStyle} href="">Submit</Button>
                </Grid>


            </Grid>




        </Grid>
    )
}

export default ResetPassword