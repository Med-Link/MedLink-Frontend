/* eslint-disable react/jsx-key */
import React, { useEffect, useState } from "react";
import { backendUrl } from "../../urlConfig.js";
import { makeStyles } from "@material-ui/core/styles";
// import { createMuiTheme } from '@material-ui/core/styles';
import { Table,TableHead, TableBody, TableCell, TableRow } from "@material-ui/core";
import TableScrollbar from 'react-table-scrollbar'
import FormControl from '@material-ui/core/FormControl';
import InputAdornment from '@material-ui/core/InputAdornment';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import Dialog from '@material-ui/core/Dialog';
import { DialogContent } from "@material-ui/core";
import { TextField } from "@material-ui/core";
import DialogActions from '@material-ui/core/DialogActions';

import SearchIcon from '@material-ui/icons/Search';
import IconButton from '@material-ui/core/IconButton';
import CreateIcon from '@material-ui/icons/Create';
import DeleteIcon from '@material-ui/icons/Delete';

import GridItem from "../../components/Dashboard/Grid/GridItem.js";
import GridContainer from "../../components/Dashboard/Grid/GridContainer.js";
import Card from "../../components/Dashboard/Card/Card.js";
import CardHeader from "../../components/Dashboard/Card/CardHeader.js";
import CardBody from "../../components/Dashboard/Card/CardBody.js";
import Button from "../../components/Dashboard/CustomButtons/Button";

import AddNewMed from './forms/AddNewMed';
import AddCsv from "./forms/AddCsv"

import axios from "axios";
import styles from "../../assets/jss/material-dashboard-react/views/dashboardStyle";

const useStyles = makeStyles(styles);


export default function OrderProcess() {
  const classes = useStyles();
  const [searchTerm, setSearchTerm] = useState(""); //for search function


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
    { id: 'batchid', label: 'Batch ID'},
    { id: 'qty', label: 'Current Quantity'},
    { id: 'unitprice', label: 'Unit Price(Rs.)'},
    { id: 'mnfdate', label: 'Manufacture Date'},
    { id: 'expdate', label: 'Expire Date'},
    { id: 'update', label: 'Update'},
    { id: 'delete', label: 'Delete'},];
  const rows = data; 

  // ------------------------------------

  //begining of  of update medicine details
  const [openEdit, setOpenEdit] = React.useState(false);
  const [batchId, setBatchId] = React.useState();

  const handleClickOpenEdit = (batchid) => {
    setOpenEdit(true);
    setBatchId(batchid);
  };
  const handleCloseEdit = () => {
    setOpenEdit(false);
  };

  const [newQuantity, setNewQuantity ] = React.useState();
  const [newPrice, setNewPrice] = React.useState();
  const [newMfDate, setNewMfDate] = React.useState();
  const [newExDate, setNewExDate] = React.useState();
  
  const updaterow =(e)=>{
    const token = window.localStorage.getItem('token');
      // console.log("hhhhhhhh")
    axios.post(`${backendUrl}/pharmacy/updatestock`, {
      batchid:batchId,
      quantity:newQuantity,
      price:newPrice,
      expiredate:newExDate,
      manufacdate:newMfDate,
      }, {headers: {
          'Authorization': token ? `Bearer ${token}` : ''
        },
    }).then((response)=>{
        getdata();
        handleCloseEdit();
    }).catch((err)=>{
        console.log(err);
        handleCloseEdit();
    });
  }
  //end of update medicine details

  //begining of delete function
  const deleterow=(batchId)=>{
    const token = window.localStorage.getItem('token');
    axios.post(`${backendUrl}/pharmacy/deletestock`, {
      batchid:batchId,
      }, {headers: {
          'Authorization': token ? `Bearer ${token}` : ''
        },
    }).then((response)=>{
        getdata();
    }).catch((err)=>{
      console.log(err);
    });
  }


  return (
    <div>
      <GridContainer>
      <GridItem xs={12} sm={8} md={8}>
          <AddNewMed getdata={getdata} />
        </GridItem>
        <GridItem xs={12} sm={4} md={4}>
          <AddCsv/>
        </GridItem>
        <GridItem xs={12} sm={12} md={12}>
          <Card>
            <CardHeader color="primary">
              <h4 className={classes.cardTitleWhite}>Update Current Stock</h4>
            </CardHeader>
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
                    placeholder="Search...(MedId, MedName, Brand, BatchNo)"
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
                          <IconButton aria-label="update" onClick={()=>handleClickOpenEdit(row.batchid)} color="inherit"><CreateIcon /></IconButton>
                        </TableCell>
                        <TableCell align="left">
                          <IconButton aria-label="delete" color="secondary" onClick={()=>deleterow(row.batchid)}><DeleteIcon/></IconButton>
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
        </GridItem>
      </GridContainer>

      {/*update medicine dialogbox*/}

      <Dialog onClose={handleCloseEdit} aria-labelledby="customized-dialog-title" open={openEdit}>
        <DialogContent dividers>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <TextField
                autoFocus
                margin="dense"
                variant="standard"
                id="qty"
                onChange={(e) => setNewQuantity(e.target.value)}
                label="Quantity"
                type="text"
                fullWidth
                size="small"

              />
            </GridItem>
            <GridItem xs={12} sm={12} md={6}>
              <TextField
                autoFocus
                margin="dense"
                variant="standard"
                id="price"
                onChange={(e) => setNewPrice(e.target.value)}
                label="Unit Price"
                type="text"
                fullWidth
                size="small"

              />
            </GridItem>
            <GridItem xs={12} sm={12} md={6}>
              <TextField
                autoFocus
                type="date"
                margin="dense"
                variant="standard"
                id="mnfdate"
                onChange={(e) => setNewMfDate(e.target.value)}
                label="Manufactured Date"
                fullWidth
                InputLabelProps={{
                  shrink: true,
                }}
                size="small"

              />
            </GridItem>
            <GridItem xs={12} sm={12} md={6}>
            <TextField
                autoFocus
                type="date"
                margin="dense"
                variant="standard"
                id="expdate"
                onChange={(e) => setNewExDate(e.target.value)}
                label="Expire Date"
                fullWidth
                InputLabelProps={{
                  shrink: true,
                }}
                size="small"
              />
            </GridItem>
          </GridContainer>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={()=>updaterow()} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
