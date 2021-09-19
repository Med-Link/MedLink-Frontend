/* eslint-disable react/jsx-key */
import React, {useState} from "react";
import axios from 'axios';
import { backendUrl } from "../../urlConfig.js";
import TableScrollbar from 'react-table-scrollbar'
import TextField from '@material-ui/core/TextField';

// @material-ui/core
// import { createTheme } from "@material-ui/core/styles";
import { makeStyles } from "@material-ui/core/styles";
import { Grid} from '@material-ui/core';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Table,TableHead, TableBody, TableCell, TableRow } from "@material-ui/core";
import FormControl from '@material-ui/core/FormControl';
import OutlinedInput from '@material-ui/core/OutlinedInput';

import Search from "@material-ui/icons/Search";
import StoreMallDirectoryIcon from '@material-ui/icons/StoreMallDirectory';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';

import GridItem from "../../components/Dashboard/Grid/GridItem.js";
import GridContainer from "../../components/Dashboard/Grid/GridContainer.js";
import Card from "../../components/Dashboard/Card/Card";
import CardHeader from "../../components/Dashboard/Card/CardHeader.js";
import CardIcon from "../../components/Dashboard/Card/CardIcon.js";
import CardBody from "../../components/Dashboard/Card/CardBody.js";
import CardFooter from "../../components/Dashboard/Card/CardFooter.js";
import Button from "../../components/Dashboard/CustomButtons/Button";

import Form from './form/Form';
import Map from '../../components/customer/Map';
import MedList from "../../components/customer/MedList"
import styles from "../../assets/jss/material-dashboard-react/views/dashboardStyle";


const useStyles = makeStyles(styles);

const fontStyle = {fontSize: '20px',color: '#126e82'};
const titleStyle = {fontSize: '30px',color: '#126e82'};
// const dropDownStyle = {width: '200px'};
// const btStyle = {width: '10px',backgroundColor: '#126e82',color: '#efe3e3'}
const cardStyle = {backgroundColor: '#ffffff',boxShadow: `2px 2px 3px 3px #ccc`}
// a6c6ca
const searchButton = {backgroundColor: '#126e82'}
const ftStyle = {color: '#126e82',textAlign: 'left',fontSize: '20px'}
const cdStyle = {backgroundColor: 'rgb(226 243 242)'}
const goButtonStyle={color: '#ffffff',backgroundColor: '#126e82',opacity:'0.9', display:"flex", flex:"column", textAlign:"center"}
// const shareButtonStyle={color: '#efe3e3',left: '-10%',backgroundColor: '#126e82', marginTop: '10px',width: '30%', padding: '2px', opacity:'0.9'}
const sentenceStyle={fontSize: '16px', color: '#126e82', fontWeight: 'bold'}
// const paperStyle={padding :20,height:'350px',width:'90%', margin:"20px auto"}
//const locStyle={marginTop: theme.spacing(-4)}

export default function Dashboard() {
  const classes = useStyles();

  const [searchTerm, setSearchTerm] = useState(""); //for search function

  const [openList, setOpenList] = React.useState(false);
  const [openLocation, setOpenLocation] = React.useState(false);
  const [pharmacyid, setPharmacyid] = useState();


  const handleClickOpen1 = (pharmacyid) => {
    setOpenList(true);
    setPharmacyid(pharmacyid);
    
  };

  const handleClose1 = () => {
    setOpenList(false);
  };

  const handleClickOpen2 = () => {
    setOpenLocation(true);
  };

  const handleClose2 = () => {
    setOpenLocation(false);
  };

  //get data from the backend
  const [data, setData] = useState([]);
  const [distance, setDistance] = useState('');


  const pharmacylocation =() =>{
    const token = window.localStorage.getItem('token');
    const latitude = window.sessionStorage.getItem("dashlatitude");
    const longitude = window.sessionStorage.getItem("dashlongitude");

    
      axios.post(`${backendUrl}/order/pharmacybylocation`,{latitude:latitude,longitude:longitude,distance:distance},
      {
        headers: {
          'Authorization': token ? `Bearer ${token}` : ''
        }
        })
      .then(res =>{
        const results =  res.data.result;
        // console.log(results);
        setData(results);
        handleClose1();
      })
  }

  const getdata =() =>{
    const token = window.localStorage.getItem('token');
    
      axios.get(`${backendUrl}/order/allpharmacies`,{
        headers: {
          'Authorization': token ? `Bearer ${token}` : ''
        }
        })
      .then(res =>{
        const results =  res.data.result;
        console.log(results);
        // setData(results);
      })
  }
  React.useEffect(()=>{
    getdata();
  },[]);
  
  const columns = [
    { id: 'name', label: 'Name'},
    { id: 'contactnumber', label: 'ContactNo'},
    { id: 'city', label: 'City'},
    { id: 'Action', label: 'Order'},];

  const rows = data; 

  return (
    <div>
      <GridContainer item={true} spacing={3}>
        <GridItem xs={12} sm={6} md={6}>
          <Card style={cardStyle}>
            <CardHeader color="info" stats icon>
              <CardIcon color="info">
                <LocationOnIcon/>
              </CardIcon>
              <p className={classes.cardCategory} style={fontStyle}>Search</p>
              <h3 className={classes.cardTitle} style={titleStyle}>Location</h3>
            </CardHeader>
            <CardFooter stats>
              <div> 
                <FormControl className={classes.formControl}>
                  <Grid>
                    <Button variant="contained" style={goButtonStyle} onClick={handleClickOpen2}>Select Area to search</Button> 
                    <Dialog open={openLocation} onClose={handleClose2} aria-labelledby="form-dialog-title">
                      <DialogTitle id="form-dialog-title">  
                        Enter Radius to Search Pharmacies in an Area        
                      </DialogTitle>
                      <DialogContent>
                        <DialogContentText>
                          <GridContainer spacing={1}>
                            <GridItem xs={12} sm={12} md={12} style={{marginBottom:"10px"}}>
                              <TextField 
                                  variant="outlined"
                                  fullWidth
                                  id="city"
                                  label="Enter a Radius to search (km)"
                                  onChange={(e) => setDistance(e.target.value)}
                                  name="Radius"
                                  size="small"
                                  />
                            </GridItem>	
                            <GridItem xs={12} sm={12} md={12} >
                              <Map
                                center={{lat: 7.2906, lng: 80.6337}}
                                height='350px'
                                width='100%'
                                zoom={8} />
                            </GridItem>
                            
                            <Grid container justify="center" style={{marginTop:"10px"}}>
                              <Button color="primary" onClick={pharmacylocation} justifyContent="center">OK</Button>
                            </Grid>
  
                          </GridContainer>
                        </DialogContentText>
                      </DialogContent>
                    </Dialog>
                  </Grid>
                </FormControl>
              </div> 
            </CardFooter>
          </Card>
        </GridItem>  
        <GridItem item={true} xs={12} sm={6} md={6}>
          <Card style={cardStyle}>
            <CardHeader color="info" stats icon>
              <CardIcon color="info">
                <StoreMallDirectoryIcon/>
              </CardIcon>
              <p className={classes.cardCategory} style={fontStyle}>Search</p>
              <h3 className={classes.cardTitle} style={titleStyle}>Pharmacy Name</h3>
            </CardHeader>
            <CardFooter stats>
            <div>
              <FormControl fullWidth variant="outlined" size="small">
                <OutlinedInput
                  onChange={(event)=>{
                    setSearchTerm(event.target.value);
                  }}
                  placeholder="Search..."
                  fontSize="small"
                  // size="sm"
                />
              </FormControl>
            </div>
              <Button style={searchButton} color="ffffff" aria-label="edit" justIcon round>
                <Search style={searchButton}/>
              </Button>
            </CardFooter>
          </Card>
        </GridItem> 
      </GridContainer>
      
      <GridContainer item={true} xs={12} sm={12} md={12}>
        <Card > 

        <CardHeader color="primary">
            <h4 className={classes.cardTitleWhite}>Results</h4>
          </CardHeader>

        
          <CardBody>
            <TableScrollbar rows={15}>
              <Table
              tableHeaderColor="primary"
              >
                {/* <TableHead> */}
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
                <TableBody>
                {/* </TableHead> */}
                  {data.filter((row)=>{
                    if (searchTerm == "") {
                      return row
                    } else if (row.name.toLowerCase().includes(searchTerm.toLowerCase())){
                      return row
                    }
                  }).map((row) => {
                    return(
                    <TableRow>
                      <TableCell align="left">
                        {row.name}
                      </TableCell>
                      <TableCell align="left">
                        {row.contactnumber}
                      </TableCell>
                      <TableCell align="left">
                        {row.location}
                      </TableCell>
                      <TableCell align="left">
                        <Button size='sm' color="primary" onClick={()=>handleClickOpen1(row.pharmacyid)}>Order Now</Button>
                      </TableCell>
                    </TableRow>
                    );
                  }
                  )
                  }
                </TableBody> 
                

              </Table>
            </TableScrollbar>
            <Grid item={true} xs={12}>
              <Dialog open={openList} onClose={handleClose1} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">
                  Send Prescription
                </DialogTitle>
                <DialogContent>
                  <DialogContentText>
                  <Form pharmacy={pharmacyid}/>
                  </DialogContentText>
                </DialogContent>
              </Dialog>
              
            </Grid>
          </CardBody>
        </Card>
      </GridContainer>
             
         
       
    </div>
  );
}
