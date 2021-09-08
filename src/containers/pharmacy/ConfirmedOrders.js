/* eslint-disable react/jsx-key */
import React, {useState} from "react";
import axios from 'axios';
import clsx from 'clsx';
import { backendUrl } from "../../urlConfig.js";
import TableScrollbar from 'react-table-scrollbar'

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Link from '@material-ui/core/Link';
import { Table,TableHead, TableBody, TableCell, TableRow } from "@material-ui/core";
import FormControl from '@material-ui/core/FormControl';
import InputAdornment from '@material-ui/core/InputAdornment';
import OutlinedInput from '@material-ui/core/OutlinedInput';

import SearchIcon from '@material-ui/icons/Search';

// core components
import GridItem from "../../components/Dashboard/Grid/GridItem.js";
import GridContainer from "../../components/Dashboard/Grid/GridContainer.js";
import Card from "../../components/Dashboard/Card/Card.js";
import CardHeader from "../../components/Dashboard/Card/CardHeader.js";
import CardBody from "../../components/Dashboard/Card/CardBody.js";
import Switch from "../../components/Dashboard/CustomButtons/Switch";
import Button from "../../components/Dashboard//CustomButtons/Button";

const styles = {
  cardCategoryWhite: {
    "&,& a,& a:hover,& a:focus": {
      color: "rgba(255,255,255,.62)",
      margin: "0",
      fontSize: "14px",
      marginTop: "0",
      marginBottom: "0",
    },
    "& a,& a:hover,& a:focus": {
      color: "#FFFFFF",
    },
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
    "& small": {
      color: "#777",
      fontSize: "65%",
      fontWeight: "400",
      lineHeight: "1",
    },
  },
};

const useStyles = makeStyles(styles);

export default function ConfirmedOrders() {
  const [searchTerm, setSearchTerm] = useState(""); //for search function

  const classes = useStyles();
  //backend connection
  const [data, setData] = useState([]);
  const getdata =() =>{
    const token = window.localStorage.getItem('token');
    
      axios.get(`${backendUrl}/pharmacy/viewallcloseddeals`,{
        headers: {
          'Authorization': token ? `Bearer ${token}` : ''
        }
        })
      .then(res =>{
        const results =  res.data.result;
            console.log(results);
            setData(results);
      })    
  }
  React.useEffect(()=>{
    getdata();
  },[]);

  const columns = [
    { id: 'orderid', label: 'Order ID'},
    { id: 'customerid', label: 'Customer ID'},
    { id: 'customername', label: 'Customer Name'},
    { id: 'date', label: 'Date and Time'},
    { id: 'details', label: 'Details'},
    { id: 'action', label: 'Packed for Delivery'},];
  const rows = data; 

  return (
    <GridContainer>
      <GridItem xs={12} sm={12} md={12}>
        <Card>
          <CardHeader color="primary">
            <h4 className={classes.cardTitleWhite}>Order Requests</h4>
            {/* <p className={classes.cardCategoryWhite}>
              Here is a subtitle for this table
            </p> */}
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
                        placeholder="Search...(OrderID, CustomerID, CustomerName)"
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
                          } else if (row.orderid.toString().toLowerCase().includes(searchTerm.toLowerCase()) || row.customerid.toString().toLowerCase().includes(searchTerm.toLowerCase()) || row.firstname.toLowerCase().includes(searchTerm.toLowerCase()) || row.lastname.toLowerCase().includes(searchTerm.toLowerCase())){
                            return row
                          }
                        }).map((row) => {
                          return(
                          <TableRow>
                            <TableCell align="left">
                              {row.orderid}
                            </TableCell>
                            <TableCell align="left">
                              {row.customerid}
                            </TableCell>
                            <TableCell align="left">
                              {row.firstname} {row.lastname}
                            </TableCell>
                            <TableCell align="left">
                              {row.date}
                            </TableCell>
                            <TableCell align="left">
                              <Link variant="h6" underline="none" className={clsx(classes.rightLink)} href="closeddealsdetails/">
                                <Button color="primary" >View</Button>
                              </Link>
                            </TableCell>
                            <TableCell align="left">
                              <Switch color="secondary" inputProps={{ 'aria-label': 'primary checkbox' }} />
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
  );
}
