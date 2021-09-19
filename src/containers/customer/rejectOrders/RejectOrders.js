/* eslint-disable react/jsx-key */
import React,{useEffect,useState} from "react";
import { backendUrl } from "../../../urlConfig.js";
// import axios from 'axios'
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridItem from "../../../components/Dashboard/Grid/GridItem.js";
import GridContainer from "../../../components/Dashboard/Grid/GridContainer.js";
import Table from "../../../components/Dashboard/Table/Table.js";
import Card from "../../../components/Dashboard/Card/Card.js";
import CardHeader from "../../../components/Dashboard/Card/CardHeader.js";
import CardBody from "../../../components/Dashboard/Card/CardBody.js";
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Link from '@material-ui/core/Link';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import ViewRejectOrderDetails from './ViewRejectOrderDetails'
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


export default function RejectOrders() {
  //const [data, setData] = React.useState([]);
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
    
  };

  const handleClose = () => {
    setOpen(false);
  };

  const classes = useStyles();
  
  {/*const getdata =() =>{
    const token = window.localStorage.getItem('token');
    
      axios.get(`${backendUrl}/buyinghistory`,{
      headers: {
        Authorization: token ? `Bearer ${token}` : "",
      },
      }).then(res =>{
        const results =  res.data.getorderhistory.rows;
        console.log(results);

        let array =[];
        results.forEach(element=>{
         let arr=[];
         arr.push(element.orderid,element.address,element.deliverycost,element.servicecost,element.totalcost,element.name,element.city,<Button variant="outlined"  color="primary" onClick={()=>handleClickOpen(element.medlistid)} round>View</Button>);
           array.push(arr);
        })         
       setData(array); 
        // setData(results);
      })        
  }
const [vieworderdata, setVieworderdata] = useState([]);*/}

  //const getorderdata = (medlistid) => {
    // console.log(typeof(medlistid))
    //const token = window.localStorage.getItem('token');
  
    // console.log('kkkk')
    //axios.post(`${backendUrl}/order/singleorderbill`, {medlistid: medlistid}, {
      //headers: {
        //'Authorization': token ? `Bearer ${token}` : ''
      //},
  //}).then((response)=>{
      //console.log(response);
      //setVieworderdata(response.data.rows);
  
  //}).catch((err)=>{
     // console.log(err);
 
  //});
  
  //};
  //React.useEffect(()=>{
    //getdata();
  //},[]);
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
              tableHead={["Date","Time","Pharmacy Name", "District", "City", ""]}
              tableData={[
                ["10-07-2021","20:55","Pharma", "Colombo", "Nugegoda", 
                  <Button variant="outlined"  color="primary" onClick={handleClickOpen} round>View</Button>
                   
                ],
                 
              ]}
            />
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                        <DialogTitle id="form-dialog-title">
                             
                        </DialogTitle>
                        <DialogContent>
                            <DialogContentText>
                              {/*<ViewHistoryDetails products={vieworderdata}/>*/}
                              <ViewRejectOrderDetails/>
                            </DialogContentText>
                        </DialogContent>
                  </Dialog>
          </CardBody>
        </Card>
      </GridItem>
      
    </GridContainer>
  );
}
