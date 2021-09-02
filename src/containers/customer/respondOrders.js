/* eslint-disable react/jsx-key */
import React,{useState} from "react";
import axios from 'axios';
import { backendUrl } from "../../urlConfig.js";
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
import Checkout from './payment/Checkout'

 

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


export default function RespondOrders() {
  const classes = useStyles();
  const [data, setData] = useState([]);
  const [rejectRowid, setRejectRowid] = useState("");

  const [open, setOpen] = React.useState(false);
  const [openCheckout, setOpenCheckout] = React.useState(false);

  const handleClickOpen = (medlistid) => {
    setOpen(true);
    setRejectRowid(medlistid);
    // console.log("hjjkjjjj")
  };

  const handleClose = () => {
    setRejectRowid("");
    // console.log("nnnnnn")

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

  const viewOrder = (medlistid) => {

    const token = window.localStorage.getItem('token');
  
    // console.log('kkkk')
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

const rejectOrder = () => {
  const token = window.localStorage.getItem('token');

  // console.log('kkkk')
  axios.post(`${backendUrl}/order/rejectbill`, {medlistid:rejectRowid}, {
    headers: {
      'Authorization': token ? `Bearer ${token}` : ''
    },
}).then((response)=>{
    console.log(response);
    getdata();
    handleClose();
    // setSignedUp(true);

}).catch((err)=>{
    console.log(err);
});
// console.log(token)
};

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
          arr.push(element.medlistid,element.order_reqid,element.totalprice,element.name,<ButtonGroup color="primary" aria-label="outlined primary button group">
          
          <Button onClick={()=>handleClickOpen2(element.medlistid)}>View Order</Button>
           
          <div>
          <Button variant="outlined"  color="primary" onClick={()=>handleClickOpen(element.medlistid)}>
            
            Reject Order
          </Button>
         
          </div>
        </ButtonGroup>);
          array.push(arr);
         })         
        setData(array); 
      })
      // .then(data =>{
      //   // console.log(data.message);
      //   // const s= res.data.result[0];
      //   // console.log(s);
      // })
    
  }
  React.useEffect(()=>{
    getdata();
  },[])
  return (
    <GridContainer>
      <GridItem xs={12} sm={12} md={12}>
        <Card>
          <CardHeader color="primary">
            <h4 className={classes.cardTitleWhite}>Responding Order Details</h4>
            {/* <p className={classes.cardCategoryWhite}>
              Here is a subtitle for this table
            </p> */}
          </CardHeader>
          <CardBody>
            <Table
              tableHeaderColor="primary"
              tableHead={["List number","Order Request","Total Price", "Pharmacy", "Accept/Reject"]}
              tableData={data}
              //   ["10-07-2021","20:55","Pharma", "Colombo", "Nugegoda", "Panadol is out of stock now", 
              //   <ButtonGroup color="primary" aria-label="outlined primary button group">
              //     <Button href="/Checkout/">View Order</Button>
                   
              //     <div>
              //     <Button variant="outlined" color="primary" onClick={handleClickOpen}>
              //       Reject Order
              //     </Button>
              //     <Dialog
              //       open={open}
              //       onClose={handleClose}
              //       aria-labelledby="alert-dialog-title"
              //       aria-describedby="alert-dialog-description"
              //     >
              //     <DialogTitle id="alert-dialog-title">{"Are you sure reject the order?"}</DialogTitle>
              //     <DialogContent>
              //     <DialogContentText id="alert-dialog-description">
              //       If yes, the order will disappear from your responding order list.
              //     </DialogContentText>
              //     </DialogContent>
              //     <DialogActions>
              //     <Button onClick={handleClose} color="primary">
              //       Yes
              //     </Button>
              //     <Button onClick={handleClose} color="primary" autoFocus>
              //       No
              //     </Button>
              //     </DialogActions>
              //     </Dialog>
              //     </div>
              //   </ButtonGroup>],
                 
              // ]}
            />
          </CardBody>
        </Card>
      </GridItem>
      
      <Dialog open={openCheckout} onClose={handleClose2} aria-labelledby="form-dialog-title">
          <DialogTitle id="form-dialog-title">
                             
            </DialogTitle>
              <DialogContent>
                <DialogContentText>
                  <Checkout products={vieworderdata}/>
                </DialogContentText>
              </DialogContent>
      </Dialog>

      <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
          <DialogTitle id="alert-dialog-title">{"Are you sure reject the order?"}</DialogTitle>
          <DialogContent>
          <DialogContentText id="alert-dialog-description">
            If yes, the order will disappear from your responding order list.
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
  );
}

