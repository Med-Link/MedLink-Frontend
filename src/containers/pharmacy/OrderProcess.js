/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-key */
import React, {useState } from "react";
import { backendUrl } from "../../urlConfig.js";
import axios from "axios";
import TableScrollbar from 'react-table-scrollbar'

import { makeStyles } from "@material-ui/core/styles";
import DateRange from "@material-ui/icons/DateRange";
import TextField from '@material-ui/core/TextField';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import DialogContentText from '@material-ui/core/DialogContentText';
import FormControl from '@material-ui/core/FormControl';
import InputAdornment from '@material-ui/core/InputAdornment';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import SearchIcon from '@material-ui/icons/Search';
import { Table,TableHead, TableBody, TableCell, TableRow } from "@material-ui/core";

import GridItem from "../../components/Dashboard/Grid/GridItem.js";
import GridContainer from "../../components/Dashboard/Grid/GridContainer.js";
import Card from "../../components/Dashboard/Card/Card.js";
import CardHeader from "../../components/Dashboard/Card/CardHeader.js";
import CardBody from "../../components/Dashboard/Card/CardBody.js";
import Button from "../../components/Dashboard//CustomButtons/Button";
import PhotoSteps from "../../components/pharmacy/PhotoSteps"
import CardFooter from "../../components/Dashboard/Card/CardFooter.js";
import styles from "../../assets/jss/material-dashboard-react/views/dashboardStyle";
import SimpleSelect from '../../components/pharmacy/DropDown';


const useStyles = makeStyles(styles);


export default function OrderProcess() {
  const classes = useStyles();
  const [searchTerm, setSearchTerm] = useState(""); //for search function

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [openAccept, setOpenAccept] = React.useState(false);

  const handleClickOpenAccept = () => {
    setOpenAccept(true);
  };

  const handleCloseAccept = () => {
    setOpenAccept(false);
  };

  // medicine list backend connection

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
    { id: 'qty', label: 'Current Qty'},
    { id: 'unitprice', label: 'Unit Price(Rs.)'},
    { id: 'addquantity', label: 'Add to cart'},
    { id: 'confirm', label: 'Confirm'},];
  const rows = data; 

  const columns2= [
    { id: 'medid', label: 'Medicine ID'},
    { id: 'medname', label: 'Med Name'},
    { id: 'brand', label: 'Brand Name'},
    { id: 'qty', label: 'Current Qty'},
    { id: 'unitprice', label: 'Unit Price(Rs.)'},
    { id: 'price', label: 'Total Price'},
    ];
  const rows2=["001","he he"]
  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={5} md={5}>
          <Card>
              <CardHeader color="primary">
              <h4 className={classes.cardTitleWhite}>Customer Request</h4>
              </CardHeader>
              <CardBody color="primary" stats icon>
                <div>
                  <h2>Michelle Fernando - 0768757722</h2>
                  <p>I Need this medicine except Codein Zulphet</p>
                </div>

                <Button id="reject" variant="outlined" color="danger" onClick={handleClickOpen}>Reject</Button>

              </CardBody>
              <CardFooter stats>
                <div className={classes.stats}>
                  <DateRange />
                  36 mins Ago
                </div>
              </CardFooter>
            </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={6}>
          <Card>
              <CardHeader color="primary">
              <h4 className={classes.cardTitleWhite}>Prescription</h4>
              </CardHeader>
              <CardBody color="primary" stats icon>
                <PhotoSteps />        
              </CardBody>
            </Card>
        </GridItem>
        </GridContainer>
        <GridContainer>

        <GridItem xs={12} sm={11} md={11}>
          <Card>
            <CardHeader color="primary">
              <h4 className={classes.cardTitleWhite}>Find Medicine from Stock</h4>
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
                        placeholder="Search..."
                        fontSize="small"
                        size="sm"
                      />
                    </FormControl>
                  </div>
              {/* <Table
                tableHeaderColor="secondary"
                tableHead={["Med Id", "Batch Id", "Med Name", "Current Qty", "Unit Price(Rs.)", "Add to cart", "Confirm"]}
                tableData={[
                  ["001",
                    <SimpleSelect/>,
                    "Panadol",
                    "100",
                    "1.00",
                    <TextField id="standard-basic" label="Qty" size='small' />,
                    <Button color="primary" round>Add</Button>],
                ]}
              /> */}
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
                    {rows.filter((row)=>{
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
                          <SimpleSelect/>
                        </TableCell>
                        <TableCell align="left">
                          {row.quantity}
                        </TableCell>
                        <TableCell align="left">
                          {row.price}
                        </TableCell>
                        <TableCell align="left">
                          <TextField id="standard-basic" label="Qty" size='small' />
                        </TableCell>
                        <TableCell align="left">
                          <Button color="primary" round size="sm">Add</Button>
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
        <GridItem xs={12} sm={11} md={11}>
          <Card>
            <CardHeader color="primary">
              <h4 className={classes.cardTitleWhite}>Medicine Cart</h4>
            </CardHeader>
            <CardBody>
              <TableScrollbar rows={15} style={{}}>
                <Table>
                  <TableHead>
                    <TableRow>
                      {columns2.map((column) => (
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
                    {rows2.map((row) => {
                      return(
                      <TableRow>
                        <TableCell align="left">
                          {/* {row.medid} */}
                        </TableCell>
                        <TableCell align="left">
                          {/* {row.medname} */}
                        </TableCell>
                        <TableCell align="left">
                          {/* {row.brand} */}
                        </TableCell>
                        <TableCell align="left">
                          {/* {row.quantity} */}
                        </TableCell>
                        <TableCell align="left">
                          {/* {row.price} */}
                        </TableCell>
                        <TableCell align="left">
                          {/* {row.price}*{row.quantity} */}
                        </TableCell>
                      </TableRow>
                      );
                    }
                    )
                    }
                    <TableRow>
                      <TableCell>
                        Total is
                      </TableCell>
                      <TableCell>
                        5000/=
                      </TableCell>
                    </TableRow>
                  </TableBody> 
                </Table>
              </TableScrollbar>
            </CardBody>
          </Card>          
        </GridItem>
      </GridContainer>

      <Dialog open={openAccept} onClose={handleCloseAccept} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description">
        <DialogTitle id="alert-dialog-title">{"Do you want to accept this order ?"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Once you accept this order you can't undo it. Do you want to send the confirmation to your customer?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseAccept} color="secondary">Cancle</Button>
          <Button onClick={handleCloseAccept} color="primary" autoFocus>Send</Button>
        </DialogActions>
      </Dialog>

      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Reason to Reject Order</DialogTitle>
        <DialogContent>
          <DialogContentText>
            {"Reasons To reject orders:"}<br></br>
            {"1. Prescription is not clear. Please re-send it again"}<br></br>
            {"2. This is not a valid prescription"}<br></br>
            {"3. Prescription is too old."}<br></br>
          </DialogContentText>
          <TextField autoFocus margin="dense" id="name" label="State the reason" type="email" fullWidth />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">Cancel</Button>
          <Button onClick={handleClose} color="primary">Send</Button>
        </DialogActions>
      </Dialog>
               
    </div>
  );
}
