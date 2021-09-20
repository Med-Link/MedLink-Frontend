/* eslint-disable react/jsx-key */
import React, {useState} from "react";
import axios from 'axios';
import { backendUrl } from "../../urlConfig.js";
import TableScrollbar from 'react-table-scrollbar'
import FileDownload from 'js-file-download'
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
import CardFooter from "../../components/Dashboard/Card/CardFooter.js";

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
  
  const download=()=>
  {
    FileDownload(data, 'report.pdf');
  }

  
  return (
    <GridContainer justifyContent="center">
      <GridItem xs={12} sm={12} md={8}>
        <Card>
          <CardHeader color="success">
            <h4 className={classes.cardTitleWhite}>
              Monthly Income of MedLink
            </h4>
            <p className={classes.cardCategoryWhite}>
            {new Date().toLocaleString("en-US", { month: "long" })}
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
                  {data.map((row,id) => {
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
                        {totalIncome}
                      </TableCell>
                    </TableRow>
                  </TableBody> 
              </Table>
            </TableScrollbar>
          </CardBody>
          <CardFooter style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
            <Button color="info" onClick={download}>Download</Button>
          </CardFooter>
        </Card>
      </GridItem>
    </GridContainer>
  );
}
