import React from 'react';
import { makeStyles } from "@material-ui/core/styles";

import GridItem from "../../../components/Dashboard/Grid/GridItem.js";
import GridContainer from "../../../components/Dashboard/Grid/GridContainer.js";
import CustomInput from "../../../components/Dashboard/CustomInput/CustomInput.js";
import Card from "../../../components/Dashboard/Card/Card.js";
import CardHeader from "../../../components/Dashboard/Card/CardHeader.js";
import CardAvatar from "../../../components/Dashboard/Card/CardAvatar.js";
import CardBody from "../../../components/Dashboard/Card/CardBody.js";
import avatar from "../../../assets/images/admin.png";

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