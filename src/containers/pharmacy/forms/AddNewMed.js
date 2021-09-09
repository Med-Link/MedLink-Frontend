import React from 'react';
import { TextField } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";

import GridItem from "../../../components/Dashboard/Grid/GridItem.js";
import GridContainer from "../../../components/Dashboard/Grid/GridContainer.js";
import Card from "../../../components/Dashboard/Card/Card.js";
import CardHeader from "../../../components/Dashboard/Card/CardHeader.js";
import CardBody from "../../../components/Dashboard/Card/CardBody.js";
import Button from "../../../components/Dashboard//CustomButtons/Button";
import styles from "../../../assets/jss/material-dashboard-react/views/dashboardStyle";

const useStyles = makeStyles(styles);

const AddNewMed=()=>{  
    const classes = useStyles();
   
    return(
    <div>
        <Card >
            <CardHeader color="success">
              <h4 className={classes.cardTitleWhite}>Add New Batch</h4>
            </CardHeader>
            <CardBody>

            <GridContainer>
                <GridItem xs={6} sm={6} md={6}>
                    <TextField
                        id="firstName"
                        label="Medicine Name"
                        InputProps={{
                            readOnly: false,
                        }}
                        fullWidth
                    />
                </GridItem>
                <GridItem xs={6} sm={6} md={6}>
                    <TextField
                        id="lastName"
                        label="Brand Name"
                        InputProps={{
                            readOnly: false,
                        }}
                        fullWidth
                    />
                </GridItem>
            </GridContainer>
            <GridContainer>
                <GridItem xs={6} sm={6} md={6}>
                    <TextField
                        id="email"
                        label="Re-Order Level"
                        InputProps={{
                            readOnly: false,
                        }}
                        fullWidth
                    />
                </GridItem>
                <GridItem xs={6} sm={6} md={6}>
                    <TextField
                        id="address"
                        label="Medicine ID"
                        InputProps={{
                            readOnly: true,
                        }}
                        fullWidth
                    />
                </GridItem>                    
            </GridContainer>   
            <GridContainer style={{display: "flex",justifyContent: "center", alignItems: "center",}}>
                <Button type='submit' href="#" color="success" style={{marginTop:"10px"}}>Add</Button>
            </GridContainer>
            </CardBody>
        </Card>
    </div>
    )
}

export default AddNewMed
