/* eslint-disable react/jsx-key */
import React, {useState} from "react";
import axios from 'axios';
import { backendUrl } from "../../urlConfig.js";
import TableScrollbar from 'react-table-scrollbar'
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import { Table,TableHead, TableBody, TableCell, TableRow } from "@material-ui/core";
import { TextField } from '@material-ui/core';
import DateRange from "@material-ui/icons/DateRange"

// core components
import GridItem from "../../components/Dashboard/Grid/GridItem.js";
import GridContainer from "../../components/Dashboard/Grid/GridContainer.js";
import Button from "../../components/Dashboard/CustomButtons/Button.js";
import Card from "../../components/Dashboard/Card/Card.js";
import CardHeader from "../../components/Dashboard/Card/CardHeader.js";
import CardBody from "../../components/Dashboard/Card/CardBody.js";
import CardFooter from "../../components/Dashboard/Card/CardFooter.js";
import CardIcon from "../../components/Dashboard/Card/CardIcon.js";

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

export default function Reports() {
  const classes = useStyles();
  
  
  // get monthly income from each pharmacy transactions
  const [data, setData] = useState([]);
  const [totalIncome, setTotalIncome]= useState();

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
        let total=0;
        for (var i = 0; i < (results.length); i++){
          total=total+parseInt(results[i].sum);
        }
        setTotalIncome(total)
      })
  }

  React.useEffect(()=>{
    getdata();
  },[]);

  const columns = [
    { id: 'pharmacyname', label: 'Pharmacy Name'},
    { id: 'income', label: 'Income (Rs.)'},];

  const rows = data; 

  // backend connection for pass date range and update the income list

  const [fromdate, setFromDate] = React.useState();
  const [todate, setToDate] = React.useState();
  const [customincome, setCustomIncome] = React.useState([]);
  const [totalCustomIncome, setTotalCustomIncome]= useState();
  const [toggle, setToggle] = useState(false); // check whether the date range is given

  const onSelectDateRange =(e)=>{
    const token = window.localStorage.getItem('token');
    axios.post(`${backendUrl}/admin/customedaterangeincome`, {
        fromdate:fromdate,
        todate:todate,
      }, {headers: {
          'Authorization': token ? `Bearer ${token}` : ''
        },
    }).then((res)=>{
        const results =  res.data.result;
        console.log(results);
        setCustomIncome(results);
        let total=0;
        for (var i = 0; i < (results.length); i++){
          total=total+parseInt(results[i].sum);
        }
        setTotalCustomIncome(total)
        setToggle(true);
    }).catch((err)=>{
        console.log(err);
    });
  }

  
  return (
    <GridContainer justifyContent="center">
      <GridItem xs={12} sm={6} md={4}>
          <Card>
            <CardHeader color="primary" >
              <CardIcon color="primary">
              <DateRange />
              </CardIcon>
              <p className={classes.cardTitleWhite}>Select Custom Time Range</p>
            </CardHeader>
            <CardBody>
            <GridContainer>
              <GridItem xs={6} sm={6} md={6}>
                  <TextField
                      autoFocus
                      type="date"
                      margin="dense"
                      variant="standard"
                      id="from"
                      label="From"
                      fullWidth
                      InputLabelProps={{
                          shrink: true,
                      }}
                      size="small"
                      required
                      value={fromdate}
                      onChange={(e) => setFromDate(e.target.value)}
                  />
              </GridItem>
              <GridItem xs={6} sm={6} md={6}>
                  <TextField
                      autoFocus
                      type="date"
                      margin="dense"
                      variant="standard"
                      id="to"
                      label="To"
                      fullWidth
                      InputLabelProps={{
                          shrink: true,
                      }}
                      size="small"
                      required
                      value={todate}
                      onChange={(e) => setToDate(e.target.value)}
                  />
              </GridItem>
              </GridContainer>
            </CardBody>
            <CardFooter style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
              <Button color="info" onClick={(e)=>onSelectDateRange(e)}>Ok</Button>
            </CardFooter>
          </Card>
        </GridItem>
      <GridItem xs={12} sm={12} md={8}>
        <Card>
          <CardHeader color="success">
            <h4 className={classes.cardTitleWhite}>
              Service Charges Income of MedLink
            </h4>
            <p className={classes.cardCategoryWhite}>
              {toggle==false ? new Date().toLocaleString("en-US", { month: "long" }) :fromdate+"  -  "+todate}            
            </p>
          </CardHeader>
          <CardBody>
            <TableScrollbar rows={15} style={{}}>
              <Table>
                <TableHead>
                  <TableRow >
                    {columns.map((column) => (
                      <TableCell className={classes.center} style={{color:'#33568a',backgroundColor: "white"}}
                        key={column.id}
                      >
                        <b>{column.label}</b>
                      </TableCell>
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody >
                  {(customincome <=0 && toggle==false ? rows : customincome)
                  .map((row,id) => {
                    return(
                    <TableRow key={id}>
                      <TableCell className={classes.center}>
                        {row.name}
                      </TableCell>
                      <TableCell className={classes.center}>
                        {row.sum}
                      </TableCell>
                    </TableRow>
                    );
                  }
                  )
                  }
                  <TableRow style={{background:"rgb(153, 204, 255,0.2)"}}>
                      <TableCell className={classes.center}  >
                        <b>Total Income of the month</b>
                      </TableCell>
                      <TableCell className={classes.center}>
                        {(customincome <=0 && toggle==false ? totalIncome : totalCustomIncome)}
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
