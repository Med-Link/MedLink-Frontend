import React, { useEffect, useState } from "react";
import { backendUrl } from "../../urlConfig.js";
import axios from "axios";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridItem from "../../components/Dashboard/Grid/GridItem.js";
import GridContainer from "../../components/Dashboard/Grid/GridContainer.js";
import CustomInput from "../../components/Dashboard/CustomInput/CustomInput.js";
import Card from "../../components/Dashboard/Card/Card.js";
import CardHeader from "../../components/Dashboard/Card/CardHeader.js";
import CardAvatar from "../../components/Dashboard/Card/CardAvatar.js";
import CardBody from "../../components/Dashboard/Card/CardBody.js";

import avatar from "../../assets/images/admin.png";

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
  const classes = useStyles();

  // backend function 
  const [data, setData] = useState([]);
  const getdata =() =>{
    const token = window.localStorage.getItem('token');
    
      axios.get(`${backendUrl}/pharmacy/viewprofile`,{
        headers: {
          'Authorization': token ? `Bearer ${token}` : ''
        }
        })
      .then(res =>{
        const results =  res.data.result[0];
        //  console.log(results);
        setData(results);
      })
    
  }
  React.useEffect(()=>{
    getdata();
  },[]);
  return (
    <div>
      <GridContainer justifyContent="center">
      <GridItem xs={12} sm={10} md={4}>
          <Card profile>
            <CardAvatar profile>
              <a href="#pablo" onClick={(e) => e.preventDefault()}>
                <img src={avatar} alt="..." />
              </a>
            </CardAvatar>
            <CardBody profile>
              <h4 className={classes.cardTitle}>{data.name}</h4>
              <p className={classes.description}>
              As Sri Lanka’s first premier multi-specialty pharmacy, 
              ABCD was set up to mirror reputed hospitals in the region which offered advanced medical technology and expert medical care,
               thus eliminating the need for people to travel out of Sri Lanka for specialized medical treatment.
              </p>
              
            </CardBody>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={10} md={6}>
          <Card>
            <CardHeader color="success">
              <h4 className={classes.cardTitleWhite}>Pharmacy Profile</h4>
              {/* <p className={classes.cardCategoryWhite}>Update your profile</p> */}
            </CardHeader>
            <CardBody>
              <GridContainer>
                <GridItem xs={12} sm={12} md={12}>
                  <CustomInput
                    id="pharmacyname"
                    formControlProps={{
                      fullWidth: true,
                    }}
                    value={data.name}
                  />
                </GridItem>
              </GridContainer>
              <GridContainer> 
                <GridItem xs={12} sm={12} md={6}>
                  <CustomInput
                    id="email"
                    formControlProps={{
                      fullWidth: true,
                    }}
                    value={data.email}

                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={6}>
                  <CustomInput
                    id="contactnumber"
                    formControlProps={{
                      fullWidth: true,
                    }}
                    value={data.contactnumber}
                  />
                </GridItem>
              </GridContainer>
              
              
              <GridContainer>
                
              </GridContainer>
            </CardBody>
            {/* <CardFooter>
              <Button color="primary">Update Profile</Button>
            </CardFooter> */}
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}
