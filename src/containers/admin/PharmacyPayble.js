/* eslint-disable react/jsx-key */
import React,{useState} from "react";
// import axios from 'axios';
// import { backendUrl } from "../../urlConfig.js";
import TableScrollbar from 'react-table-scrollbar'

// @material-ui/core components
import { makeStyles,withStyles } from "@material-ui/core/styles";
import FormControl from '@material-ui/core/FormControl';
import InputAdornment from '@material-ui/core/InputAdornment';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import { Table,TableHead, TableBody, TableCell, TableRow } from "@material-ui/core";

import SearchIcon from '@material-ui/icons/Search';

// core components
import GridItem from "../../components/Dashboard/Grid/GridItem.js";
import GridContainer from "../../components/Dashboard/Grid/GridContainer.js";
import Card from "../../components/Dashboard/Card/Card.js";
import CardHeader from "../../components/Dashboard/Card/CardHeader.js";
import CardBody from "../../components/Dashboard/Card/CardBody.js";
import Button from "../../components/Dashboard/CustomButtons/Button";

import styles from "../../assets/jss/material-dashboard-react/views/dashboardStyle";

const useStyles = makeStyles(styles);

export default function PharmacyPayble() {
  const classes = useStyles();

  const [searchTerm, setSearchTerm] = useState(""); //for search function


  const columns = [
    { id: 'pid', label: 'PharmacyId'},
    { id: 'pharmacyname', label: 'Pharmacy Name'},
    { id: 'total', label: 'Total Amount'},
    { id: 'total', label: 'Payment'}];

  // const rows = data; 
  
  return (
    
    <GridContainer>
      <GridItem xs={12} sm={12} md={12}>
        <Card>
          <CardHeader color="primary">
            <h4 className={classes.cardTitleWhite}>Payble Amounts for Pharmacies  </h4>
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
            <TableScrollbar rows={20}>
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
                      <TableBody>he hee</TableBody>
                      {/* <TableBody >
                        {rows.filter((row)=>{
                          if (searchTerm == "") {
                            return row
                          } else if (row.name.toLowerCase().includes(searchTerm.toLowerCase()) || row.email.toLowerCase().includes(searchTerm.toLowerCase()) 
                          // || row.location.toLowerCase().includes(searchTerm.toLowerCase())
                          ){
                            return row
                          }
                        }).map((row) => {
                          return(
                          <TableRow>
                            <TableCell align="left">
                              // {row.pharmacyid}
                            </TableCell>
                            <TableCell align="left">
                              {row.name}
                            </TableCell>
                            <TableCell align="left">
                              {row.Total}
                            </TableCell>
                            <TableCell align="left">
                              {row.location}
                            </TableCell>
                            <TableCell>
                           <Button size='sm' color="primary">Done</Button>
                            </TableCell>
                          </TableRow>
                          );
                        }
                        )
                        }
                      </TableBody> */}
                    </Table>
                  </TableScrollbar>
          </CardBody>
        </Card>
      </GridItem>
      
      
    </GridContainer>
  );
}
