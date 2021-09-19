
import React, { useEffect, useState } from "react";
import { backendUrl } from "../../urlConfig.js";
// import axios from 'axios'
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridItem from "../../components/Dashboard/Grid/GridItem.js";
import GridContainer from "../../components/Dashboard/Grid/GridContainer.js";
import Table from "../../components/Dashboard/Table/Table.js";
import Card from "../../components/Dashboard/Card/Card.js";
import CardHeader from "../../components/Dashboard/Card/CardHeader.js";
import CardBody from "../../components/Dashboard/Card/CardBody.js";
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Link from '@material-ui/core/Link';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import ViewHistoryDetails from "../customer/buyingHistory/ViewHistoryDetails"
import axios from "axios";


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

export default function ClosedDeals() {
  const classes = useStyles();

  const [data, setData] = React.useState([]);
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = (medlistid) => {
    setOpen(true);
    getorderdata(medlistid);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const [opensend, setOpensend] = React.useState(false);
  const [shiporderid, setShiporderid] = useState('');
  
  const handlesend = (orderid) => {
    setOpensend(true);
    setShiporderid(orderid);
  };
  const handlesendClose = () => {
    setOpensend(false);
    setShiporderid('');
    
  };
  const ordershipping = () => {
    const token = window.localStorage.getItem('token');
    axios.post(`${backendUrl}/pharmacy/markshipped`, {orderid: shiporderid}, {
      headers: {
        'Authorization': token ? `Bearer ${token}` : ''
      },
    }).then((response)=>{
        console.log(response);
        // setVieworderdata(response.data.rows);
        getdata();
      }).catch((err)=>{
        console.log(err);
        
      });
      handlesendClose();
  };
  const getdata = () => {
    const token = window.localStorage.getItem('token');

    axios.get(`${backendUrl}/pharmacy/closeddeals`, {
      headers: {
        Authorization: token ? `Bearer ${token}` : "",
      },
    }).then(res => {
      const results = res.data.getorderhistory.rows;
      // console.log(results);

      let array = [];
      results.forEach(element => {
        let arr = [];
        arr.push(element.date, element.orderid, element.address, element.deliverycost, element.servicecost, element.totalcost, <Button variant="outlined" color="primary" onClick={() => handleClickOpen(element.medlistid)} round>View</Button>,<Button variant="outlined" color="Secondary" onClick={() => handlesend(element.orderid)}  round>Send</Button>);
        array.push(arr);
      })
      setData(array);
      // setData(results);
    })
  }
  const [vieworderdata, setVieworderdata] = useState([]);

  const getorderdata = (medlistid) => {
    // console.log(typeof(medlistid))
    const token = window.localStorage.getItem('token');

    // console.log('kkkk')
    axios.post(`${backendUrl}/order/singleorderbill`, { medlistid: medlistid }, {
      headers: {
        'Authorization': token ? `Bearer ${token}` : ''
      },
    }).then((response) => {
      console.log(response);
      setVieworderdata(response.data.rows);

    }).catch((err) => {
      console.log(err);

    });

  };
  React.useEffect(() => {
    getdata();
  }, []);
  return (
    <GridContainer>
      <GridItem xs={12} sm={12} md={12}>
        <Card>
          <CardHeader color="primary">
            <h4 className={classes.cardTitleWhite}>Order History</h4>
            {/* <p className={classes.cardCategoryWhite}>
              Here is a subtitle for this table
            </p> */}
          </CardHeader>
          <CardBody>
            <Table
              tableHeaderColor="primary"
              tableHead={["Date", "Order Number", "Delivery Address", "Delivery Cost", "Service Cost", "Total Cost", "View more", "Payment"]}
              tableData={data}
            />
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title" >
              <ViewHistoryDetails products={vieworderdata} />

            </Dialog>
            <Dialog open={opensend} onClose={handlesendClose} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description">
            <DialogTitle id="alert-dialog-title">{"Are you sure set order as shipped?"}</DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                If yes, the order will be marked as shipped.
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={()=>ordershipping()} color="primary">
                Yes
              </Button>
              <Button onClick={handlesendClose} color="primary" autoFocus>
                No
              </Button>
            </DialogActions>
          </Dialog>
          </CardBody>
        </Card>
      </GridItem>

    </GridContainer>
  );
}
