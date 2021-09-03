/* eslint-disable react/jsx-key */
import React, { useEffect, useState } from "react";
import { backendUrl } from "../../urlConfig.js";
import { makeStyles } from "@material-ui/core/styles";
// import { createMuiTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import GridItem from "../../components/Dashboard/Grid/GridItem.js";
import GridContainer from "../../components/Dashboard/Grid/GridContainer.js";
import Table from "../../components/Dashboard/Table/Table.js";
import Card from "../../components/Dashboard/Card/Card.js";
import CardBody from "../../components/Dashboard/Card/CardBody.js";
import Button from "../../components/Dashboard//CustomButtons/Button";
import Dialog from '@material-ui/core/Dialog';
import CustomTabs from "../../components/Dashboard/CustomTabs/CustomTabs.js";
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import RemoveCircleOutlineOutlinedIcon from '@material-ui/icons/RemoveCircleOutlineOutlined';
import Form from './forms/AddCsv';
import AddNewMed from './forms/AddNewMed';
import Search from '../../components/pharmacy/Search';
import axios from "axios";

// const useStyles = makeStyles(styles);

const currencies = [
  {
    value: 'B123',
    label: 'B123',
  },
  {
    value: 'B124',
    label: 'B124',
  },
  {
    value: 'B125',
    label: 'B125',
  },
  {
    value: 'B126',
    label: 'B126',
  },
];
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
export default function OrderProcess() {
  const classes = useStyles();

  const [currency, setCurrency] = React.useState('B124');

  const handleChange = (event) => {
    setCurrency(event.target.value);
  };

  const [openAccept, setOpenAccept] = React.useState(false);

  const handleClickOpenAccept = () => {
    setOpenAccept(true);
  };

  const handleCloseAccept = () => {
    setOpenAccept(false);
  };

  const [openAddMeds, setOpenAddMeds] = React.useState(false);

  const handleClickOpenAddMeds = () => {
    setOpenAddMeds(true);
  };

  const handleCloseAddMeds = () => {
    setOpenAddMeds(false);
  };

  // --------------------------------

  const [data, setData] = useState([]);
  const getdata = () => {
    const token = window.localStorage.getItem('token');

    axios.get(`${backendUrl}/pharmacy/viewallstock`, {
      headers: {
        Authorization: token ? `Bearer ${token}` : "",
      },
    }).then(res => {
      const results = res.data.rows;
      console.log(res);
      let array = [];
      results.forEach(element => {
        let arr = [];
        arr.push(element.medid, element.medname, element.brand, element.batchid, element.quantity, element.price, element.expiredate, element.manufacdate,
          <Button variant="contained" color="primary"><AddCircleOutlineIcon />Update</Button>, <Button variant="contained" color="danger"><RemoveCircleOutlineOutlinedIcon /> Remove</Button>);
        array.push(arr);
      })

      setData(array);
    })

  }
  React.useEffect(() => {
    getdata();
  }, []);

  // ------------------------------------

  return (
    <div>
      <GridContainer>

        <GridItem xs={12} >
          <CustomTabs
            headerColor="primary"
            tabs={[
              {
                tabName: "View Stock",
                // tabIcon: AddShoppingCartIcon,
                tabContent: (
                  <Card>
                    <CardBody>
                      <Search />
                      <Table
                        tableHeaderColor="secondary"
                        tableHead={["Medicine ID",
                          "Medicine Name", "Brand Name",
                          "Batch No", "Current Qty", "Unit Price(Rs.)", "Expire Date", "Manufacture Date", "Update", "Delete"]}
                        tableData={data}
                      // ["M002",
                      //   "Panadol",
                      //   <InputBase
                      //     className={classes.margin}
                      //     defaultValue="Ventalin"
                      //     inputProps={{ 'aria-label': 'med' }}
                      //     style={{width:100}}
                      //   />,
                      //   <TextField
                      //     select
                      //     value={currency}
                      //     onChange={handleChange}>
                      //     {currencies.map((option) => (
                      //       <MenuItem key={option.value} value={option.value}>
                      //         {option.label}
                      //       </MenuItem>
                      //     ))}
                      //   </TextField>,
                      //   <InputBase
                      //     id="outlined-number"
                      //     defaultValue="5"
                      //     type="number"
                      //     InputLabelProps={{
                      //       shrink: true,
                      //     }}
                      //     variant="outlined"
                      //     style={{width:80}}
                      //   />,
                      //   2,4,
                      //   6,
                      //   <Button variant="contained" color="primary"><AddCircleOutlineIcon />Update</Button>,
                      //   <Button variant="contained" color="danger"><RemoveCircleOutlineOutlinedIcon /> Remove</Button>],

                      />
                    </CardBody>
                  </Card>
                ),
              },

              {
                tabName: "Add New Medicine",

                tabContent: (
                  <Card >
                    <CardBody>
                      <Grid xs={12} md={6} sm={6}>
                        <Card className={classes.sub}>
                          <CardBody>
                            <GridContainer xs={12} md={12} sm={6}>
                              <AddNewMed />
                            </GridContainer>
                          </CardBody>
                        </Card>
                      </Grid>
                    </CardBody>
                    {/* -------------------- */}

                    <CardBody>
                      <Grid xs={12} md={6} sm={6}>
                        <Card className={classes.sub}>
                          <CardBody>

                            <GridContainer xs={12}>
                              <GridItem xs={12} md={6} sm={6}>

                                <CardBody color="primary" stats icon>
                                  {/* <div> */}
                                  <GridContainer>
                                    <GridItem>

                                      <Form />

                                    </GridItem>
                                    <GridItem xs={12}>
                                      <Button variant="outlined" color="primary" onClick={handleClickOpenAccept}>
                                        Save
                                      </Button>
                                      <Dialog
                                        open={openAccept}
                                        onClose={handleCloseAccept}
                                        aria-labelledby="alert-dialog-title"
                                        aria-describedby="alert-dialog-description"
                                      >
                                        <DialogTitle id="alert-dialog-title">{"Do you want to Save this to the stock"}</DialogTitle>
                                        <DialogActions>
                                          <Button onClick={handleCloseAccept} color="danger">
                                            Cancle
                                          </Button>
                                          <Button onClick={handleCloseAccept} color="primary" autoFocus>
                                            Yes
                                          </Button>
                                        </DialogActions>
                                      </Dialog>
                                    </GridItem>
                                  </GridContainer>





                                </CardBody>

                              </GridItem>
                            </GridContainer>
                          </CardBody>
                        </Card>
                      </Grid>
                    </CardBody>
                    {/* ----------------- */}

                  </Card>

                ),
              },



            ]}
          />
        </GridItem>
      </GridContainer>

      {/* Update Stock -csv */}









    </div>
  );
}
