import React from 'react';
import { Grid } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import { makeStyles } from '@material-ui/core/styles';
import MuiAlert from '@material-ui/lab/Alert';


function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

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
        width: '100%',
        '& > * + *': {
            marginTop: theme.spacing(2),
        },
    },

    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
    /*label:{
      marginLeft:theme.spacing(0),
    },*/
    back: {
        backgroundColor: "#eee",
        marginTop: theme.spacing(1),
    },
    input: {
        display: 'none',
    },

}));


const Form = () => {


    const paperStyle = { padding: 20, height: '500px', width: '400px', margin: "20px auto" }
    const avatarStyle = { backgroundColor: '#2ab5b5' }
    const gridStyle = { padding: 20 }
    const buttonStyle = { color: '#efe3e3', backgroundColor: '#126e82', margin: '8px 0' }
    const classes = useStyles();
    const textFeildStyle = { height: '150px', width: '390px', margin: '8px 0 16px 0' }

    const headerStyle = { color: '#126e82' }
    const [open, setOpen] = React.useState(false);


    const handleClick = () => {
        setOpen(true);
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    return (
        
            <Grid container sm={12} >


                <Grid item xs={6} md={12}>

                    <Typography variant="body1"> Update Stock - Add (.csv) File</Typography>
                    <br></br>


                </Grid>
                <Grid container>
                    <Grid item >
                        <Button
                            variant="contained"
                            component="label"
                            startIcon={<CloudUploadIcon />}
                            style={buttonStyle}
                        >
                            Upload
                            <input
                                type="file"
                                hidden
                                startIcon={<CloudUploadIcon />}

                            />
                        </Button>
                    </Grid>
                    <Grid item md={3} >
                        
                    </Grid>
                </Grid>
            </Grid>
        
    )
}

export default Form;
