/* eslint-disable react/jsx-key */
import React,{useState} from "react";
import axios from 'axios';
import { backendUrl } from "../../urlConfig.js";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
// import { Table,TableHead, TableBody, TableCell, TableRow } from "@material-ui/core";
// core components
import GridItem from "../../components/Dashboard/Grid/GridItem.js";
import GridContainer from "../../components/Dashboard/Grid/GridContainer.js";
import Table from "../../components/Dashboard/Table/Table.js";
import Card from "../../components/Dashboard/Card/Card.js";
import CardHeader from "../../components/Dashboard/Card/CardHeader.js";
import CardBody from "../../components/Dashboard/Card/CardBody.js";
import Checkout from './payment/Checkout'

import styles from "../../assets/jss/material-dashboard-react/views/dashboardStyle";

const useStyles = makeStyles(styles);

export default function RespondOrders() {
  const notify = () => toast.success('Medicine List Rejected!', {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    });

  const classes = useStyles();
  const [data, setData] = useState([]);
  const [rejectRowid, setRejectRowid] = useState("");

  const [open, setOpen] = React.useState(false);
  const [openCheckout, setOpenCheckout] = React.useState(false);

  const handleClickOpen = (medlistid) => {
    setOpen(true);
    setRejectRowid(medlistid);
  };

  const handleClose = () => {
    setRejectRowid("");
    setOpen(false);
  };
  const [vieworderdata, setVieworderdata] = useState([]);
  
  const handleClickOpen2 = (medlistid) => {
    viewOrder(medlistid);
    setOpenCheckout(true);
     
  };
  const handleClose2 = () => {
    setOpenCheckout(false);
  };

  //backend connection for view single orders
  const viewOrder = (medlistid) => {
    const token = window.localStorage.getItem('token');
    axios.post(`${backendUrl}/order/singleorderbill`, {medlistid: medlistid}, {
      headers: {
        'Authorization': token ? `Bearer ${token}` : ''
      },
    }).then((response)=>{
        console.log(response);
        setVieworderdata(response.data.rows);
    
    }).catch((err)=>{
        console.log(err);
  
    });
  };

  //backend connection for cancel order
  const rejectOrder = () => {
    const token = window.localStorage.getItem('token');
    axios.post(`${backendUrl}/order/rejectbill`, {medlistid:rejectRowid}, {
      headers: {
        'Authorization': token ? `Bearer ${token}` : ''
      },
  }).then((response)=>{
      console.log(response);
      notify();
      getdata();
      handleClose();
  }).catch((err)=>{
      console.log(err);
  });
  };

  //backend connection for view order list
  const getdata =() =>{
    const token = window.localStorage.getItem('token');
    
      axios.get(`${backendUrl}/order/allorderbills`,{
        headers: {
          'Authorization': token ? `Bearer ${token}` : ''
        }
        })
      .then(res =>{
        const results =  res.data.rows;
        //  console.log(res.data.rows);
         let array =[];
         results.forEach(element=>{
          let arr=[];
          arr.push(Date(element.date).toString(),element.medlistid,element.order_reqid,element.totalprice,element.name,<ButtonGroup color="primary" aria-label="outlined primary button group">
          
          <Button onClick={()=>handleClickOpen2(element.medlistid)}>View Order</Button>
          <div>
          <Button variant="outlined"  color="primary" onClick={()=>handleClickOpen(element.medlistid)}>
            Cancel Order
          </Button>
          </div>
        </ButtonGroup>);
          array.push(arr);
         })         
        setData(array); 
      })    
  }

  React.useEffect(()=>{
    getdata();
  },[])

  return (
    <div>
    <GridContainer>
      <GridItem xs={12} sm={12} md={12}>
        <Card>
          <CardHeader color="primary">
            <h4 className={classes.cardTitleWhite}>Responding Order Details</h4>
          </CardHeader>
          
          <CardBody>
            <Table
              tableHeaderColor="primary"
              tableHead={["Date","List number","Order Request","Total Price", "Pharmacy", "Accept/Reject"]}
              tableData={data}
            />

            {/* <TableScrollbar rows={15}>
              <Table
              tableHeaderColor="primary"
              >
                <TableHead tableHead={["Date","List number","Order Request","Total Price", "Pharmacy", "Accept/Reject"]} />
                  
                <TableBody>
                
                 
                    <TableRow tableData={data}/>
                      
                  
                </TableBody> 
                

              </Table>
            </TableScrollbar>
             */}
          </CardBody>
        </Card>
      </GridItem>
      
      <Dialog open={openCheckout} onClose={handleClose2} aria-labelledby="form-dialog-title">
          <DialogTitle id="form-dialog-title"></DialogTitle>
          <DialogContent>
            <DialogContentText>
              <Checkout products={vieworderdata}/>
            </DialogContentText>
          </DialogContent>
      </Dialog>

      <Dialog open={open} onClose={handleClose} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description">
        <DialogTitle id="alert-dialog-title">{"Are you sure reject the order?"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            If yes, the order will disappear from your order list.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={rejectOrder} color="primary">
            Yes
          </Button>
          <Button onClick={handleClose} color="primary" autoFocus>
            No
          </Button>
        </DialogActions>
      </Dialog>

    </GridContainer>
     <ToastContainer position="top-right"
     autoClose={5000}
     hideProgressBar={false}
     newestOnTop={false}
     closeOnClick
     rtl={false}
     pauseOnFocusLoss
     draggable
     pauseOnHover
/> 
</div>
  );
}

