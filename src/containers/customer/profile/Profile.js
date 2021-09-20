import React from 'react';
import GridItem from "../../../components/Dashboard/Grid/GridItem.js";
import GridContainer from "../../../components/Dashboard/Grid/GridContainer.js";
import CustomInput from "../../../components/Dashboard/CustomInput/CustomInput.js";
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from "@material-ui/core/styles";


import AccountBoxIcon from '@material-ui/icons/AccountBox';
import Dialog from '@material-ui/core/Dialog';

import Card from "../../../components/Dashboard/Card/Card.js";
import CardHeader from "../../../components/Dashboard/Card/CardHeader.js";
import CardAvatar from "../../../components/Dashboard/Card/CardAvatar.js";
import CardBody from "../../../components/Dashboard/Card/CardBody.js";
import CardFooter from "../../../components/Dashboard/Card/CardFooter.js";
import Button from "../../../components/Dashboard/CustomButtons/Button.js";
import avatar from "../../../assets/images/admin.png";

import { DialogContent } from "@material-ui/core";
import { TextField } from "@material-ui/core";
import DialogActions from '@material-ui/core/DialogActions';

import EditProfile from './EditProfile';
import ResetPassword from '../password/ResetPassword'
//import AddBankDetails from '../bankdetails/AddBankDetails'


const styles = {
    cardCategoryWhite: {
        color: "rgba(255,255,255,.62)",
        margin: "0",
        fontSize: "14px",
        marginTop: "0",
        marginBottom: "0",
    },
    cardTitleWhite: {
        color: "#FFFFFF",
        marginTop: "0px",
        minHeight: "auto",
        fontWeight: "300",
        fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
        marginBottom: "3px",
        textDecoration: "none",
    },
};
const useStyles = makeStyles(styles);


const Profile = () => {
    const classes = useStyles();

    const [openEdit, setOpenEdit] = React.useState(false);
    const [openReset, setOpenReset] = React.useState(false);
    const [openResetBank, setOpenResetBank] = React.useState(false);

    const handleClickOpen1 = () => {
        setOpenEdit(true);
    };

    const handleClose1 = () => {
        setOpenEdit(false);
    };

    const handleClickOpen2 = () => {
        setOpenReset(true);
    };

    const handleClose2 = () => {
        setOpenReset(false);
    };
    const handleClickOpenBankDetails = () => {
        setOpenResetBank(true);
    };

    const handleCloseBankDetails = () => {
        setOpenResetBank(false);
    };
    const paperStyle = { padding: 20, height: '550px', width: '500px', margin: "20px auto" }
    const avatarStyle = { backgroundColor: '#126e82' }
    const gridStyle = { padding: 20 }
    const buttonStyle = { color: '#efe3e3', backgroundColor: '#126e82', margin: '30px 0 0 0', width: '50%' }
    const headingStyle = { color: '#126e82' }

    const customer = JSON.parse(localStorage.getItem('user'));
    const customeremail = customer[0].email;
    const firstname = customer[0].firstname;
    const lastname = customer[0].lastname;
    return (
        <GridContainer justifyContent="center">
            <GridItem xs={12} sm={10} md={3}>
                <Card profile>
                    <CardAvatar profile>
                        <img src={avatar} alt="..." />
                    </CardAvatar>
                    <CardBody profile>
                        <h1 className={classes.cardTitle}>Hello {firstname}</h1>
                        <p className={classes.description}>
                            We care you always
                        </p>

                    </CardBody>
                </Card>
            </GridItem>
            <GridItem xs={12} sm={10} md={6}>
                <Card>
                    <CardHeader color="success">
                        <h4 className={classes.cardTitleWhite}>Edit Profile</h4>
                        <p className={classes.cardCategoryWhite}>Complete your profile</p>
                    </CardHeader>
                    <CardBody>
                        <GridContainer>
                            {/* {data.email} */}
                            <GridItem xs={12} sm={12} md={6}>
                                <CustomInput
                                    id="firstname"
                                    value={firstname}
                                    formControlProps={{
                                        fullWidth: true,
                                    }}
                                />
                            </GridItem>
                            <GridItem xs={12} sm={12} md={6}>
                                <CustomInput
                                    id="lastname"
                                    value={lastname}
                                    formControlProps={{
                                        fullWidth: true,
                                    }}
                                />
                            </GridItem>
                        </GridContainer>
                        <GridContainer>
                            <GridItem xs={12} sm={12} md={6}>
                                <CustomInput
                                    id="email"
                                    value={customeremail}
                                    formControlProps={{
                                        fullWidth: true,
                                    }}
                                />
                            </GridItem>
                        </GridContainer>
                    </CardBody>
                </Card>
            </GridItem>

        </GridContainer>
    )
}

export default Profile