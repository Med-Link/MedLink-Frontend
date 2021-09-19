/* eslint-disable react/jsx-key */
import React, {useState} from "react";
import axios from 'axios';
import { backendUrl } from "../../urlConfig.js";
import TableScrollbar from 'react-table-scrollbar'

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import { Table,TableHead, TableBody, TableCell, TableRow } from "@material-ui/core";

// core components
import GridItem from "../../components/Dashboard/Grid/GridItem.js";
import GridContainer from "../../components/Dashboard/Grid/GridContainer.js";
import Button from "../../components/Dashboard/CustomButtons/Button.js";
import Card from "../../components/Dashboard/Card/Card.js";
import CardHeader from "../../components/Dashboard/Card/CardHeader.js";
import CardBody from "../../components/Dashboard/Card/CardBody.js";

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
  tableUpgradeWrapper: {
    display: "block",
    width: "100%",
    overflowX: "auto",
    WebkitOverflowScrolling: "touch",
    MsOverflowStyle: "-ms-autohiding-scrollbar",
  },
  table: {
    width: "100%",
    maxWidth: "100%",
    marginBottom: "1rem",
    backgroundColor: "transparent",
    borderCollapse: "collapse",
    display: "table",
    borderSpacing: "2px",
    borderColor: "grey",
    "& thdead tr th": {
      fontSize: "1.063rem",
      padding: "12px 8px",
      verticalAlign: "middle",
      fontWeight: "300",
      borderTopWidth: "0",
      borderBottom: "1px solid rgba(0, 0, 0, 0.06)",
      textAlign: "inherit",
    },
    "& tbody tr td": {
      padding: "12px 8px",
      verticalAlign: "middle",
      borderTop: "1px solid rgba(0, 0, 0, 0.06)",
    },
    "& td, & th": {
      display: "table-cell",
    },
  },
  center: {
    textAlign: "center",
  },
};

const useStyles = makeStyles(styles);

export default function UpgradeToPro() {
  const classes = useStyles();

  // get monthly income from each pharmacy transactions
  const [data, setData] = useState([]);
  const getdata =() =>{
    const token = window.localStorage.getItem('token');
      axios.get(`${backendUrl}/admin/viewmonthlyincome`,{
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
    { id: 'pharmacyname', label: 'Pharmacy Name'},
    { id: 'income', label: 'Income'},];

  const rows = data; 

  return (
    <GridContainer justifyContent="center">
      <GridItem xs={12} sm={12} md={8}>
        <Card>
          <CardHeader color="success">
            <h4 className={classes.cardTitleWhite}>
              Monthly Income of MedLink
            </h4>
            <p className={classes.cardCategoryWhite}>
              June
            </p>
          </CardHeader>
          <CardBody>
          <TableScrollbar rows={15} style={{}}>
                    <Table>
                      <TableHead>
                        <TableRow >
                          {columns.map((column) => (
                            <TableCell className={classes.center} style={{color:'#213458',backgroundColor: "white"}}
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
                          row.brand.toLowerCase().includes(searchTerm.toLowerCase())){
                            return row
                          }
                        }).map((row) => {
                          return(
                          <TableRow>
                            <TableCell align="left">
                              {row.name}
                            </TableCell>
                            <TableCell align="left">
                              {row.sum}
                            </TableCell>
                          </TableRow>
                          );
                        }
                        )
                        }
                          <TableRow>
                              <TableCell align="left">
                              
                              </TableCell>
                              <TableCell align="left">
                              <Button
                        color="info"
                      >
                        Download
                      </Button>
                              </TableCell>
                            </TableRow>
                        </TableBody> 
                    </Table>
                  </TableScrollbar>
          </CardBody>
        </Card>
      </GridItem>
    </GridContainer>
  );
}
