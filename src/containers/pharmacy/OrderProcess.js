/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-key */
import React, {useState } from "react";
import { backendUrl } from "../../urlConfig.js";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import TableScrollbar from 'react-table-scrollbar'
import { useParams } from 'react-router-dom'
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
import Box from '@material-ui/core/Box';

import { makeStyles } from "@material-ui/core/styles";
import DateRange from "@material-ui/icons/DateRange";
import TextField from '@material-ui/core/TextField';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import DialogContentText from '@material-ui/core/DialogContentText';
import FormControl from '@material-ui/core/FormControl';
import InputAdornment from '@material-ui/core/InputAdornment';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import SearchIcon from '@material-ui/icons/Search';
import { Table,TableHead, TableBody, TableCell, TableRow } from "@material-ui/core";

import GridItem from "../../components/Dashboard/Grid/GridItem.js";
import GridContainer from "../../components/Dashboard/Grid/GridContainer.js";
import Card from "../../components/Dashboard/Card/Card.js";
import CardHeader from "../../components/Dashboard/Card/CardHeader.js";
import CardBody from "../../components/Dashboard/Card/CardBody.js";
import Button from "../../components/Dashboard//CustomButtons/Button";
import PhotoSteps from "../../components/pharmacy/PhotoSteps"
import CardFooter from "../../components/Dashboard/Card/CardFooter.js";
import styles from "../../assets/jss/material-dashboard-react/views/dashboardStyle";
import CustomInput from "../../components/Dashboard/CustomInput/CustomInput.js";

import SimpleSelect from '../../components/pharmacy/DropDown';
import { parse } from "dotenv";


const useStyles = makeStyles(styles);

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function OrderProcess() {
  const notify = () => toast.success('Medicine List Sent Success!', {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    });

  const [openquantity, setOpenquantity] = React.useState(false);
  const [medicinerow, setMedicinerow] = React.useState(null);
  const [quantity, setQuanity] = useState(0);


  const handleOpenquantity = (row) =>{ 
    const item =cartproducts.filter((element)=>element.batchid==row.batchid)
    if(item.length>0){
      return;
    }
    setMedicinerow(row);
    setOpenquantity(true);
  }
  const handleClosequantity = () => setOpenquantity(false);
  const { id } = useParams();
  // console.log(id)
  const classes = useStyles();
  const [searchTerm, setSearchTerm] = useState(""); //for search function
  const [cartproducts, setCartproducts] = useState([]); 
  const [orderbill, setOrderbill] = useState([]); 

  // const [total, setTotal] = useState(0); //for search function


  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [openAccept, setOpenAccept] = React.useState(false);

  const handleClickOpenAccept = () => {
    setOpenAccept(true);
  };

  const handleCloseAccept = () => {
    setOpenAccept(false);
  };

  const addtotable = ()=>{
    // console.log(medicinerow.price)
    handleClosequantity();
    if(parseInt(medicinerow.quantity)>=parseInt(quantity)){
    const data = {
      medid:medicinerow.medid,
      batchid:medicinerow.batchid,
      amount:medicinerow.quantity,
      medname:medicinerow.medname,
      brand:medicinerow.brand,
      unitprice:medicinerow.price,
      quantity:quantity
    }
    setCartproducts([...cartproducts,data]);
    const orderlistdata = {
      batchid:medicinerow.batchid,
      amount:quantity,
    }
    setOrderbill([...orderbill,orderlistdata]);
  }
}
const getSumColumn = () => {
  let sum = 0
  cartproducts.forEach(el => sum += (el.unitprice*el.quantity))
  // setTotal(sum)
  return sum;
}  
// medicine list backend connection
const removeitem=(batchid)=>{
  const removeArray = cartproducts.filter(function( obj ) {
    return obj.batchid !== batchid;
});
setCartproducts(removeArray);
const removemedlist = orderbill.filter(function( obj ) {
  return obj.batchid !== batchid;
});
setOrderbill(removemedlist);
}
  const [data, setData] = useState([]);
  const getdata = () => {
    const token = window.localStorage.getItem('token');

    axios.get(`${backendUrl}/pharmacy/viewallstock`, {
      headers: {
        Authorization: token ? `Bearer ${token}` : "",
      },
    }).then(res => {
      const results = res.data.rows;
      console.log(res);

      setData(results);
    })

  }
  
  const sendorderbill = () => {
   
    const token = window.localStorage.getItem('token');
    const tot = getSumColumn();
    axios.post(`${backendUrl}/pharmacy/sendorderbill`, {orderreqid:id,totalprice:tot,customerid:orderdata.customerid,medlist:orderbill}, {
      headers: {
        'Authorization': token ? `Bearer ${token}` : ''
      },
  }).then((response)=>{
      // console.log(response);
      notify();
      handleCloseAccept();
      
  }).catch((err)=>{
      console.log(err);
      
  });
 
};
  const [orderdata, setOrderData] = useState([]);

  const getorderreq = () => {
    const token = window.localStorage.getItem('token');
    // console.log(id)
    axios.post(`${backendUrl}/pharmacy/getOrderReq`,{orderreqid:id}, {
      headers: {
        Authorization: token ? `Bearer ${token}` : "",
      },
    }).then(res => {
      const results = res.data.singleOrder.rows[0];
      // console.log(results.prescription);

      setOrderData(results);
      // console.log(orderdata.customerid)
    })

  }
  const [rejectmessage, setRejectmessage] = useState([]);

  const rejectorder = () => {
    const token = window.localStorage.getItem('token');
    // console.log('p')
    axios.post(`${backendUrl}/pharmacy/rejectOrderReq`,{ orderreqid:id, rejectmessage:rejectmessage}, {
      headers: {
        Authorization: token ? `Bearer ${token}` : "",
      },
    }).then(res => {
      const results = res;
      handleClose();
      console.log(res);

      // setData(results);
    })
  } 
  React.useEffect(() => {
    getdata();
    getorderreq();
  }, []);

  const columns = [
    { id: 'medid', label: 'Medicine ID'},
    { id: 'medname', label: 'Med Name'},
    { id: 'brand', label: 'Brand Name'},
    { id: 'batchid', label: 'Batch ID'},
    { id: 'qty', label: 'Current Qty'},
    { id: 'unitprice', label: 'Unit Price(Rs.)'},
    // { id: 'addquantity', label: 'Add Quantity'},
    { id: 'confirm', label: 'Confirm'},];
  const rows = data; 

  const columns2= [
    { id: 'medid', label: 'Medicine ID'},
    { id: 'medname', label: 'Med Name'},
    { id: 'brand', label: 'Brand Name'},
    { id: 'qty', label: 'Current Qty'},
    { id: 'unitprice', label: 'Unit Price(Rs.)'},
    { id: 'price', label: 'Total Price'},
    ];
  // const rows2=["001","he he"]
  



  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={5} md={5}>
          <Card>
              <CardHeader color="primary">
              <h4 className={classes.cardTitleWhite}>Customer Request</h4>
              </CardHeader>
              <CardBody color="primary" stats icon>
                <div>
                  {/* <h2>Michelle Fernando - 0768757722</h2> */}
                  {orderdata.description}
                </div>

                <Button id="reject" variant="outlined" color="danger" onClick={handleClickOpen}>Reject</Button>

              </CardBody>
              <CardFooter stats>
                <div className={classes.stats}>
                  <DateRange />
                  36 mins Ago
                </div>
              </CardFooter>
            </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={6}>
          <Card>
              <CardHeader color="primary">
              <h4 className={classes.cardTitleWhite}>Prescription</h4>
              </CardHeader>
              <CardBody color="primary" stats icon>
                <PhotoSteps documents={orderdata.prescription}/>        
              </CardBody>
            </Card>
        </GridItem>
        </GridContainer>
        <GridContainer>

        <GridItem xs={12} sm={11} md={11}>
          <Card>
            <CardHeader color="primary">
              <h4 className={classes.cardTitleWhite}>Find Medicine from Stock</h4>
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
                        placeholder="Search...(MedId, MedName, BrandName, BatchId)"
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
                    {rows.filter((row)=>{
                      if (searchTerm == "") {
                        return row
                      } else if (row.medname.toLowerCase().includes(searchTerm.toLowerCase()) || 
                      row.brand.toLowerCase().includes(searchTerm.toLowerCase()) || row.medid.toString().toLowerCase().includes(searchTerm.toLowerCase()) || row.batchid.toString().toLowerCase().includes(searchTerm.toLowerCase())){
                        return row
                      }
                    }).map((row) => {
                      return(
                      <TableRow>
                        <TableCell align="left">
                          {row.medid}
                        </TableCell>
                        <TableCell align="left">
                          {row.medname}
                        </TableCell>
                        <TableCell align="left">
                          {row.brand}
                        </TableCell>
                        <TableCell align="left">
                          {row.batchid}
                        </TableCell>
                        <TableCell align="left">
                          {row.quantity}
                        </TableCell>
                        <TableCell align="left">
                          {row.price}
                        </TableCell>
                        {/* <TableCell align="left">
                          <TextField id="standard-basic" label="Qty" size='small' />
                        </TableCell> */}
                        <TableCell align="left">
                          <Button color="primary" onClick={()=>handleOpenquantity(row)} round size="sm">Add</Button>
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
        <GridItem xs={12} sm={11} md={11}>
          <Card>
            <CardHeader color="primary">
              <h4 className={classes.cardTitleWhite}>Medicine Cart</h4>
            </CardHeader>
            <CardBody>
              <TableScrollbar rows={15} style={{}}>
                <Table>
                  <TableHead>
                    <TableRow>
                      {columns2.map((column) => (
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
                    {cartproducts.map((row) => {
                      return(
                      <TableRow>
                        <TableCell align="left">
                          {row.medid}
                        </TableCell>
                        <TableCell align="left">
                          {row.medname}
                        </TableCell>
                        <TableCell align="left">
                          {row.brand}
                        </TableCell>
                        <TableCell align="left">
                          {parseInt(row.quantity)}
                        </TableCell>
                        <TableCell align="left">
                          {parseInt(row.unitprice)}
                        </TableCell>
                        <TableCell align="left">
                         {row.unitprice*row.quantity}
                        </TableCell>
                        <TableCell align="left">
                          <Button onClick={()=>removeitem(row.batchid)} color="secondary">remove</Button>

                        </TableCell>
                      </TableRow>
                      );
                    }
                    )
                    }
                    <TableRow>
                      <TableCell>
                        Total 
                      </TableCell>
                      <TableCell>
                        {getSumColumn()}
                      </TableCell>
                    </TableRow>
                  </TableBody> 
                </Table>
              </TableScrollbar>
            </CardBody>
            <CardFooter>
            <Button variant="outlined" color="primary" onClick={handleClickOpenAccept} justifyContent="center">
                  Send Bill
                </Button>
            </CardFooter>
          </Card>          
        </GridItem>
      </GridContainer>

      <Dialog open={openAccept} onClose={handleCloseAccept} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description">
        <DialogTitle id="alert-dialog-title">{"Do you want to accept this order ?"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Once you accept this order you can't undo it. Do you want to send the confirmation to your customer?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseAccept} color="secondary">Cancle</Button>
          <Button onClick={()=>sendorderbill()} color="primary" autoFocus>Send</Button>
        </DialogActions>
      </Dialog>

      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Reason to Reject Order</DialogTitle>
        <DialogContent>
          <DialogContentText>
            {"Reasons To reject orders:"}<br></br>
            {"1. Prescription is not clear. Please re-send it again"}<br></br>
            {"2. This is not a valid prescription"}<br></br>
            {"3. Prescription is too old."}<br></br>
          </DialogContentText>
          <TextField autoFocus margin="dense" id="name" label="State the reason" onChange={(e) => setRejectmessage(e.target.value)} type="email" fullWidth />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">Cancel</Button>
          <Button onClick={()=>rejectorder()} color="primary">Send</Button>
        </DialogActions>
      </Dialog>
               
      <Modal
        open={openquantity}
        onClose={handleClosequantity}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"

      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Add Quantity
          </Typography>
          <TextField id="standard-basic" onChange={(e) => setQuanity(e.target.value)} label="Qty" size='small' />
          <Button onClick={()=>addtotable()}  color="primary">Add Quantity</Button>
        </Box>
      </Modal>
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