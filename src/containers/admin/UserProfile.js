import React, {useState } from "react";
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
import styles from "../../assets/jss/material-dashboard-react/views/dashboardStyle";


const useStyles = makeStyles(styles);

export default function UserProfile() {
  const classes = useStyles();

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
      setData(results);
    })
  }
  React.useEffect(()=>{
    getdata();
  },[]);

  return (
      <GridContainer justifyContent="center">
        <GridItem xs={12} sm={10} md={3}>
          <Card profile>
            <CardAvatar profile>
                <img src={avatar} alt="..." />
            </CardAvatar>
            <CardBody profile>
              <h4 className={classes.cardCategory}>Administrator</h4>
              <h1 className={classes.cardTitle}>{data.firstname} {data.lastname}</h1>         
            </CardBody>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={10} md={6}>
          <Card>
            <CardHeader color="success">
              <h4 className={classes.cardTitleWhite}>User Profile</h4>
              <p className={classes.cardCategoryWhite}>View Admin profile</p>
            </CardHeader>
            <CardBody>
              <GridContainer>
                <GridItem xs={12} sm={12} md={6}>
                  <CustomInput
                    id="firstname"
                    name="firstname"
                    value= {data.firstname}
                    formControlProps={{
                      fullWidth: true,
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={6}>
                  <CustomInput
                    id="lastname"
                    name="lastname"
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
                    name="email"
                    value={data.email}
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
  );
}
