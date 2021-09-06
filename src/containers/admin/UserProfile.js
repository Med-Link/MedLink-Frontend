import React, { useEffect, useState } from "react";
import { backendUrl } from "../../urlConfig.js";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridItem from "../../components/Dashboard/Grid/GridItem.js";
import GridContainer from "../../components/Dashboard/Grid/GridContainer.js";
import CustomInput from "../../components/Dashboard/CustomInput/CustomInput.js";
import Button from "../../components/Dashboard/CustomButtons/Button.js";
import Card from "../../components/Dashboard/Card/Card.js";
import CardHeader from "../../components/Dashboard/Card/CardHeader.js";
import CardAvatar from "../../components/Dashboard/Card/CardAvatar.js";
import CardBody from "../../components/Dashboard/Card/CardBody.js";
import CardFooter from "../../components/Dashboard/Card/CardFooter.js";

import avatar from "../../assets/images/admin.png";
import axios from "axios";
import reactDom from "react-dom";

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

export default function UserProfile() {
  const [data, setData] = useState([]);
  const getdata =() =>{
    const token = window.localStorage.getItem('token');
    
      axios.get(`${backendUrl}/admin/viewprofile`,{
        headers: {
          'Authorization': token ? `Bearer ${token}` : ''
        }
        })
      .then(res =>{
        const results =  res.data.result[0];
         console.log(results);
        setData(results);
      })
      // .then(data =>{
      //   // console.log(data.message);
      //   // const s= res.data.result[0];
      //   // console.log(s);
      // })
    
  }
  React.useEffect(()=>{
    getdata();
  },[]);
  const classes = useStyles();
  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={8}>
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
                    value= {data.firstname}
                    formControlProps={{
                      fullWidth: true,
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={6}>
                  <CustomInput
                    id="lastname"
                    value = {data.lastname}
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
                    value={data.email}
                    formControlProps={{
                      fullWidth: true,
                    }}
                    inputProps={{
                      disabled: true,
                    }}
                  />
                </GridItem>                
              </GridContainer>
          
              <GridContainer>
              <GridItem xs={12} sm={12} md={12}>
                <h4 className={classes.cardCategory} style={{marginTop:'35px',marginBottom:'0px'}}>Reset your Password here:</h4>
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <CustomInput
                    id="newpswd1"
                    labelText="Current Password"
                    formControlProps={{
                      fullWidth: true,
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <CustomInput
                    id="newpswd1"
                    labelText="Enter New Password"
                    formControlProps={{
                      fullWidth: true,
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <CustomInput
                    id="newpswd2"
                    labelText="Re-enter New Password"                    
                    formControlProps={{
                      fullWidth: true,
                    }}
                  />
                </GridItem>
              </GridContainer>
            </CardBody>
            <CardFooter>
              <Button color="success">Update Profile</Button>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
          <Card profile>
            <CardAvatar profile>
                <img src={avatar} alt="..." />
            </CardAvatar>
            <CardBody profile>
              <h4 className={classes.cardCategory}>Administrator</h4>
              <h1 className={classes.cardTitle}>{data.firstname} {data.lastname}</h1>
              <p className={classes.description}>
                Don{"'"}t be scared of the truth because we need to restart the
                human foundation in truth.
              </p>
              
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}
