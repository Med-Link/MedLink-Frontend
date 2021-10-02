/* eslint-disable react/jsx-key */

import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";

import { backendUrl } from "../../urlConfig.js";
import axios from "axios";
import TableScrollbar from 'react-table-scrollbar'

import { Table,TableHead, TableBody, TableCell, TableRow } from "@material-ui/core";

import Card from "../../components/Dashboard/Card/Card";
import CardHeader from "../../components/Dashboard/Card/CardHeader.js";
import CardIcon from "../../components/Dashboard/Card/CardIcon.js";
import CardBody from "../../components/Dashboard/Card/CardBody.js";
import CardFooter from "../../components/Dashboard/Card/CardFooter.js";
import styles from "../../assets/jss/material-dashboard-react/views/dashboardStyle";

const useStyles = makeStyles(styles);

export default function ExpiredItems() {
    const classes = useStyles();

    //outofStock medicine list backend connection
  const [data, setData] = useState([]);
  const getdata = () => {
    const token = window.localStorage.getItem('token');

    axios.get(`${backendUrl}/pharmacy/viewexpireditems`, {
      headers: {
        Authorization: token ? `Bearer ${token}` : "",
      },
    }).then(res => {
      const results = res.data.rows;
      // console.log(res);
      setData(results);
    })

  }
  React.useEffect(() => {
    getdata();
  }, []);

  const columns = [
    { id: 'orderid', label: 'Medicine ID'},
    { id: 'name', label: 'Medicine Name'},
    { id: 'quantity', label: 'Current Quantity'},
  ];
  const rows = data; 

    return (
        <div>
            <Card>
                <CardHeader color="success">
                    <h4 className={classes.cardTitleWhite}>Expired and Near to Expire Items</h4>
                </CardHeader>
                <CardBody>
                  <TableScrollbar rows={10} style={{}}>
                    <Table>
                        <TableHead>
                            <TableRow>
                            {columns.map((column) => (
                                <TableCell style={{color:'#213458',backgroundColor: "white"}}
                                key={column.id}
                                >
                                {column.label}
                                </TableCell>
                            ))}
                            </TableRow>
                      </TableHead>
                        <TableBody >
                        {rows<=0 ? 
                            <TableRow>
                            <TableCell align="center" colSpan="3">
                                No Out of Stock Items to Show
                            </TableCell>
                            </TableRow> 
                        : rows.map((row)=>{
                            return(
                            <TableRow>
                                <TableCell align="left">
                                    {row.medid}
                                </TableCell>
                                <TableCell align="left">
                                    {row.medname} {row.brand}
                                </TableCell>
                                <TableCell align="left">
                                    {row.quantity} 
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
        </div>
    )
}

