
import React,{useEffect,useState} from "react";
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

  const [data, setData] = React.useState([]);
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = (medlistid) => {
    setOpen(true);
    getorderdata(medlistid);
  };

  const handleClose = () => {
    setOpen(false);
  };

<<<<<<< HEAD
 

  //backend connection
  const [data, setData] = useState([]);
=======
  const classes = useStyles();
  
>>>>>>> 27720b58ad124406fb317cdd79b9876877d31973
  const getdata =() =>{
    const token = window.localStorage.getItem('token');
    
      axios.get(`${backendUrl}/pharmacy/closeddeals`,{
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
<<<<<<< HEAD

  const handleClickViewDeal = (pharmacyid) => {
    const token = window.localStorage.getItem('token');

    // console.log('kkkk')
    axios.post(`${backendUrl}/pharmacy/acceptpharmacy/orderprocess`, {pharmacyid:pharmacyid}, {
=======
  const [vieworderdata, setVieworderdata] = useState([]);

  const getorderdata = (medlistid) => {
    // console.log(typeof(medlistid))
    const token = window.localStorage.getItem('token');
  
    // console.log('kkkk')
    axios.post(`${backendUrl}/order/singleorderbill`, {medlistid: medlistid}, {
>>>>>>> 27720b58ad124406fb317cdd79b9876877d31973
      headers: {
        'Authorization': token ? `Bearer ${token}` : ''
      },
  }).then((response)=>{
      console.log(response);
<<<<<<< HEAD
      getdata();
      // setSignedUp(true);

  }).catch((err)=>{
      console.log(err);
      // console.log("kkkkkk");

      // setError("Password must be atleast 6 characters long");
  });
  // console.log(token)
};

=======
      setVieworderdata(response.data.rows);
  
  }).catch((err)=>{
      console.log(err);
 
  });
  
  };
>>>>>>> 27720b58ad124406fb317cdd79b9876877d31973
  React.useEffect(()=>{
    getdata();
  },[]);
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
<<<<<<< HEAD
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
                        placeholder="Search...(OrderID, CustomerID, CustomerName)"
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
                        {data.filter((row)=>{
                          if (searchTerm == "") {
                            return row
                          } else if (row.orderid.toString().toLowerCase().includes(searchTerm.toLowerCase()) || row.customerid.toString().toLowerCase().includes(searchTerm.toLowerCase())){
                            return row
                          }
                        }).map((row) => {
                          return(
                          <TableRow>
                            <TableCell align="left">
                              {row.orderid}
                            </TableCell>
                            <TableCell align="left">
                              {row.customerid}
                            </TableCell>
                            <TableCell align="left">
                              {row.date}
                            </TableCell>
                            <TableCell align="left">
                              <Link variant="h6" underline="none" className={clsx(classes.rightLink)} href="closeddealsdetails/">
                                <Button color="primary" onClick={()=>handleClickViewDeal(row.customerid)}>View</Button>
                              </Link>
                            </TableCell>
                          </TableRow>
                          );
                        }
                        )
                        }
                      </TableBody> 
                      

                    </Table>
                  </TableScrollbar>
=======
            <Table
              tableHeaderColor="primary"
              tableHead={["Order Number", "Delivery Address","Delivery Cost", "Service Cost", "Total Cost", "Pharmacy","City","View more" ]}
              tableData={data}
            />
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                        <DialogTitle id="form-dialog-title">
                             
                        </DialogTitle>
                        <DialogContent>
                            <DialogContentText>
                              <ViewHistoryDetails products={vieworderdata}/>
                            </DialogContentText>
                        </DialogContent>
                  </Dialog>
>>>>>>> 27720b58ad124406fb317cdd79b9876877d31973
          </CardBody>
        </Card>
      </GridItem>
      
    </GridContainer>
  );
}
