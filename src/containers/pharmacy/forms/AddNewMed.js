import React, { useState } from "react";
import axios from 'axios';
import PropTypes from "prop-types";
import { backendUrl } from "../../../urlConfig.js";

import { TextField } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";
import Autocomplete from '@material-ui/lab/Autocomplete';

import GridItem from "../../../components/Dashboard/Grid/GridItem.js";
import GridContainer from "../../../components/Dashboard/Grid/GridContainer.js";
import Card from "../../../components/Dashboard/Card/Card.js";
import CardHeader from "../../../components/Dashboard/Card/CardHeader.js";
import CardBody from "../../../components/Dashboard/Card/CardBody.js";
import Button from "../../../components/Dashboard//CustomButtons/Button";
import styles from "../../../assets/jss/material-dashboard-react/views/dashboardStyle";

const useStyles = makeStyles(styles);


const AddNewMed = (props) => {
    const classes = useStyles();
    const { getdata } = props;

    //backend connection for medicine drop down list
    const [meddata, setMedData] = useState([]);

    const getMedData = () => {
        const token = window.localStorage.getItem('token');
        axios.get(`${backendUrl}/pharmacy/listmedicine`, {
            headers: {
                'Authorization': token ? `Bearer ${token}` : ''
            }
        })
            .then(res => {
                const results = res.data.result;
                setMedData(results);
            })
    }

    React.useEffect(() => {
        getMedData();
    }, []);

    const options = meddata.map((option) => {
        const firstLetter = option.medname[0].toUpperCase();
        return {
            firstLetter: /[0-9]/.test(firstLetter) ? '0-9' : firstLetter,
            ...option,
        };
    });

    // backend connection to add med details to the database
    const [medId, setMedId] = useState("");
    const [quantity, setQuantity] = useState("");
    const [price, setPrice] = useState("");
    const [expdate, setExpDate] = useState("");
    const [mnfdate, setMnfDate] = useState("");

    const handlechange = (event, value) => {
        setMedId(value.medid);
    }

    const submit = (e) => {
        e.preventDefault();
        const token = window.localStorage.getItem("token");
        axios.post(`${backendUrl}/pharmacy/addstock`,
            {
                medid: medId,
                quantity: quantity,
                price: price,
                expiredate: expdate,
                manufacdate: mnfdate,
            }, {
            headers: {
                Authorization: token ? `Bearer ${token}` : "",
            },
        })
            .then((response) => {
                console.log(response);
                getdata();
            });
    };

    return (
        <div>
            <Card >
                <CardHeader color="success">
                    <h4 className={classes.cardTitleWhite}>Add New Batch</h4>
                </CardHeader>
                <CardBody>

                    <GridContainer>
                        <GridItem xs={6} sm={6} md={6}>
                            <Autocomplete
                                disableClearable
                                options={options.sort((a, b) => -b.firstLetter.localeCompare(a.firstLetter))}
                                groupBy={(option) => option.firstLetter}
                                getOptionLabel={(option) => option.medname + " - " + option.brand}
                                renderInput={(params) => <TextField {...params} label="Medicine Name" required />}
                                size="small"
                                onChange={(event, value) => handlechange(event, value)}
                            />
                            
                        </GridItem>
                        <GridItem xs={3} sm={3} md={3}>
                            <TextField
                                id="quantity"
                                label="Quantity"
                                InputProps={{
                                    readOnly: false,
                                }}
                                fullWidth
                                required
                                value={quantity}
                                onChange={(e) => setQuantity(e.target.value)}
                            />
                        </GridItem>
                        <GridItem xs={3} sm={3} md={3}>
                            <TextField
                                id="price"
                                label="UnitPrice"
                                InputProps={{
                                    readOnly: false,
                                }}
                                fullWidth
                                required
                                value={price}
                                onChange={(e) => setPrice(e.target.value)}
                            />
                        </GridItem>
                    </GridContainer>
                    <GridContainer>

                        <GridItem xs={6} sm={6} md={6}>
                            <TextField
                                autoFocus
                                type="date"
                                margin="dense"
                                variant="standard"
                                id="mnfdate"
                                label="Manufactured Date"
                                fullWidth
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                size="small"
                                required
                                value={mnfdate}
                                onChange={(e) => setMnfDate(e.target.value)}
                            />
                        </GridItem>
                        <GridItem xs={6} sm={6} md={6}>
                            <TextField
                                autoFocus
                                type="date"
                                margin="dense"
                                variant="standard"
                                id="expdate"
                                label="Expire Date"
                                fullWidth
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                size="small"
                                required
                                value={expdate}
                                onChange={(e) => setExpDate(e.target.value)}
                            />
                        </GridItem>
                    </GridContainer>
                    <GridContainer style={{ display: "flex", justifyContent: "center", alignItems: "center", }}>
                        <Button type='submit' href="#" color="success" style={{ marginTop: "20px" }} onClick={submit}>
                            Add
                        </Button>
                    </GridContainer>
                </CardBody>
            </Card>
        </div>
    )
}

export default AddNewMed;

AddNewMed.propTypes = {
    getdata: PropTypes.func,
};
