/* eslint-disable react/jsx-key */
/* eslint-disable react/jsx-no-duplicate-props */
import React, { useState } from "react";
import { backendUrl } from "../../urlConfig.js";
import axios from "axios";
import clsx from 'clsx';
import TableScrollbar from 'react-table-scrollbar'

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Link from '@material-ui/core/Link';
import { Table,TableHead, TableBody, TableCell, TableRow } from "@material-ui/core";

// core components
import GridItem from "../../components/Dashboard/Grid/GridItem.js";
import GridContainer from "../../components/Dashboard/Grid/GridContainer.js";
import Card from "../../components/Dashboard/Card/Card.js";
import CardHeader from "../../components/Dashboard/Card/CardHeader.js";
import CardBody from "../../components/Dashboard/Card/CardBody.js";
import Button from "../../components/Dashboard/CustomButtons/Button";

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

export default function OrderRequests() {
  const classes = useStyles();

  // --------------------------------

  const [data, setData] = useState([]);
  const getdata = () => {
    const token = window.localStorage.getItem('token');

    axios.get(`${backendUrl}/pharmacy/getOrderReqs`, {
      headers: {
        Authorization: token ? `Bearer ${token}` : "",
      },
    }).then(res => {
      const results = res.data.allOrders.rows;
      setData(results);
    })
  }

  React.useEffect(() => {
    getdata();
  }, []);

  // ------------------------------------

  const columns = [
    { id: 'Date', label: 'Date'},
    { id: 'orderid', label: 'Order ID'},
    { id: 'description', label: 'Description'},
    { id: 'customerid', label: 'Customer ID'},
    { id: 'customername', label: 'Customer Name'},
    { id: 'view', label: 'View Order'},];
  const rows = data; 

  return (
    <GridContainer>
      <GridItem xs={12} sm={12} md={12}>
        <Card>
          <CardHeader color="primary">
            <h4 className={classes.cardTitleWhite}>Order Requests</h4>
          </CardHeader>
          <CardBody>
            <TableScrollbar rows={18} style={{}}>
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
                  {rows.map((row,id)=>{
                    return(
                    <TableRow key={id}>
                      <TableCell align="left">
                        {row.date}
                      </TableCell>
                      <TableCell align="left">
                        {row.id}
                      </TableCell>
                      <TableCell align="left">
                        {row.description}
                      </TableCell>
                      <TableCell align="left">
                        {row.customerid}
                      </TableCell>
                      <TableCell align="left">
                        {row.firstname} {row.lastname}
                      </TableCell>
                      <TableCell align="left">
                        <Link variant="h6" underline="none" className={clsx(classes.rightLink)} href={`orderprocess/${row.id}`}>
                          <Button id="view" color="primary" color="primary" size="sm" >View</Button>
                        </Link>
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
