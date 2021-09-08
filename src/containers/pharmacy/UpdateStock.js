/* eslint-disable react/jsx-key */
import React, { useEffect, useState } from "react";
import { backendUrl } from "../../urlConfig.js";
import { makeStyles } from "@material-ui/core/styles";
// import { createMuiTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Table,TableHead, TableBody, TableCell, TableRow } from "@material-ui/core";
import TableScrollbar from 'react-table-scrollbar'
import FormControl from '@material-ui/core/FormControl';
import InputAdornment from '@material-ui/core/InputAdornment';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import Dialog from '@material-ui/core/Dialog';
import CustomTabs from "../../components/Dashboard/CustomTabs/CustomTabs.js";
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';

import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import RemoveCircleOutlineOutlinedIcon from '@material-ui/icons/RemoveCircleOutlineOutlined';
import SearchIcon from '@material-ui/icons/Search';
import IconButton from '@material-ui/core/IconButton';
import CreateIcon from '@material-ui/icons/Create';
import DeleteIcon from '@material-ui/icons/Delete';

import GridItem from "../../components/Dashboard/Grid/GridItem.js";
import GridContainer from "../../components/Dashboard/Grid/GridContainer.js";
import Card from "../../components/Dashboard/Card/Card.js";
import CardBody from "../../components/Dashboard/Card/CardBody.js";
import Button from "../../components/Dashboard//CustomButtons/Button";

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
  const [searchTerm, setSearchTerm] = useState(""); //for search function

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

      setData(results);
    })

  }
  React.useEffect(() => {
    getdata();
  }, []);

  const columns = [
    { id: 'medid', label: 'Medicine ID'},
    { id: 'medname', label: 'Med Name'},
    { id: 'brand', label: 'Brand Name'},
    { id: 'batchno', label: 'Batch No'},
    { id: 'qty', label: 'Current Quantity'},
    { id: 'unitprice', label: 'Unit Price(Rs.)'},
    { id: 'mnfdate', label: 'Manufacture Date'},
    { id: 'expdate', label: 'Expire Date'},
    { id: 'update', label: 'Update'},
    { id: 'delete', label: 'Delete'},];
  const rows = data; 

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
                      <div>
                    <FormControl fullWidth variant="outlined" size="small">
                      <OutlinedInput
                        endAdornment={
                          <InputAdornment position="end">
                            <SearchIcon/>
                          </InputAdornment>
                        }
                        onChange={(event)=>{
                          setSearchTerm(event.target.value);
                        }}
                        placeholder="Search...(MedId, MedName, Brand,BatchNo)"
                        fontSize="small"
                        size="sm"
                      />
                    </FormControl>
                  </div>
                  <TableScrollbar rows={15} style={{}}>
                    <Table>
                      <TableHead>
                        <TableRow>
                          {columns.map((column) => (
                            <TableCell style={{color:'#213458',backgroundColor: "white"}}
                              key={column.id}
                              align={column.align}
                            >
                              {column.label}
                            </TableCell>
                          ))}
                        </TableRow>
                      </TableHead>
                      
                      <TableBody >
                        {data.filter((row)=>{
                          if (searchTerm == "") {
                            return row
                          } else if (row.medname.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          row.brand.toLowerCase().includes(searchTerm.toLowerCase()) || row.medid.toString().toLowerCase().includes(searchTerm.toLowerCase()) || row.batchid.toString().toLowerCase().includes(searchTerm.toLowerCase())){
                            return row
                          }
                        }).map((row) => {
                          return(
                          <TableRow>
                            <TableCell align="left">
                              {row.medid}
                            </TableCell>
                            <TableCell align="left">
                              {row.medname}
                            </TableCell>
                            <TableCell align="left">
                              {row.brand}
                            </TableCell>
                            <TableCell align="left">
                              {row.batchid}
                            </TableCell>
                            <TableCell align="left">
                              {row.quantity}
                            </TableCell>
                            <TableCell align="left">
                              {row.price}
                            </TableCell>
                            <TableCell align="left">
                              {row.manufacdate}
                            </TableCell>
                            <TableCell align="left">
                              {row.expiredate}
                            </TableCell>
                            <TableCell align="left">
                              <IconButton aria-label="update" onClick={()=>handleClickOpenEdit(row.medid)} color="inherit"><CreateIcon /></IconButton>
                            </TableCell>
                            <TableCell align="left">
                              <IconButton aria-label="delete" onClick={()=>handleClickOpenEdit(row.medid)} color="secondary"><DeleteIcon/></IconButton>
                            </TableCell>
                          </TableRow>
                          );
                        }
                        )
                        }
                      </TableBody> 
                      

                    </Table>
                  </TableScrollbar>
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
