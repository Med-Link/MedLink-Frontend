/* eslint-disable react/jsx-key */
import React, {useState} from "react";
import axios from 'axios';
import { backendUrl } from "../../urlConfig.js";
import TableScrollbar from 'react-table-scrollbar'

// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";
import { Grid} from '@material-ui/core';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Table,TableHead, TableBody, TableCell, TableRow } from "@material-ui/core";
import FormControl from '@material-ui/core/FormControl';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

import Search from "@material-ui/icons/Search";
import StoreMallDirectoryIcon from '@material-ui/icons/StoreMallDirectory';
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
import styles from "../../assets/jss/material-dashboard-react/views/dashboardStyle";


const useStyles = makeStyles(styles);

const fontStyle = {fontSize: '20px',color: '#126e82'};
const titleStyle = {fontSize: '30px',color: '#126e82'};
const cardStyle = {backgroundColor: '#a6c6ca'}
const searchButton = {backgroundColor: '#126e82'}
const ftStyle = {color: '#126e82',textAlign: 'left',fontSize: '20px'}
const cdStyle = {backgroundColor: '#ffffff'}


export default function Dashboard() {
  const classes = useStyles();
  const [searchTerm, setSearchTerm] = useState(""); //for search function
  const [pharmacyid, setPharmacyid] = useState();

  const [openList, setOpenList] = React.useState(false);
  const handleClickOpen1 = (pharmacyid) => {
     setOpenList(true);
    setPharmacyid(pharmacyid);
    };
  const handleClose1 = () => { setOpenList(false);};

  //get data from the backend pharmacy details
  const [data, setData] = useState([]);
  const getdata =() =>{
    setToggle(false);

    const token = window.localStorage.getItem('token');
    axios.get(`${backendUrl}/order/allpharmacies`,{
      headers: {
        'Authorization': token ? `Bearer ${token}` : ''
      }
    })
    .then(res =>{
      const results =  res.data.result;
      // console.log(results);
      setData(results);
    })
  }

  //backend connection for medicine drop down list
  const [meddata, setMedData] = useState([]);

  const getMedData =() =>{
    const token = window.localStorage.getItem('token');
    
      axios.get(`${backendUrl}/order/listmedicine`,{
        headers: {
          'Authorization': token ? `Bearer ${token}` : ''
        }
        })
      .then(res =>{
        const results =  res.data.result;
            // console.log(results);
            setMedData(results);
      })
  }

  React.useEffect(()=>{
    getdata();
    getMedData();
  },[]);

  // backend connection for pass the medicine id and filter the pharmacies
  const [pharmacyData, setPharmacyData] = useState([]);
  const [toggle, setToggle] = useState(false);

  const onSelectMedicine = (event,value)=> {
      const token = window.localStorage.getItem('token');
      axios.get(`${backendUrl}/order/pharmacybymedicine?medname=${value.medname}`,{
        headers: {
          'Authorization': token ? `Bearer ${token}` : ''
        }
        })
      .then(res =>{
        const results =  res.data.result;
            // console.log(results);
            setToggle(true);
            setPharmacyData(results);
            
      })
  } 

  const columns = [
    { id: 'name', label: 'Name'},
    { id: 'contactnumber', label: 'ContactNo'},
    { id: 'city', label: 'City'},
    { id: 'Action', label: 'Order'},];
  const rows = data; 

  const options = meddata.map((option) => {
    const firstLetter = option.medname[0].toUpperCase();
    return {
      firstLetter: /[0-9]/.test(firstLetter) ? '0-9' : firstLetter,
      ...option,
    };
  });

  return (
    <div>
      <GridContainer item spacing={3}>
        <GridItem xs={12} sm={6} md={6}>
          <Card style={cardStyle}>
            <CardHeader color="info" stats icon>
              <CardIcon color="info">
                <LocalHospitalIcon/>
              </CardIcon>
              <p className={classes.cardCategory} style={fontStyle}>Search</p>
              <h3 className={classes.cardTitle} style={titleStyle}>Medicine</h3>
            </CardHeader>
            <CardFooter stats>
              <div>
                <Autocomplete
                  disableClearable
                  id="grouped-demo"
                  options={options.sort((a, b) => -b.firstLetter.localeCompare(a.firstLetter))}
                  groupBy={(option) => option.firstLetter}
                  getOptionLabel={(option) => option.medname+" - "+option.brand}
                  style={{ width: 300 }}
                  renderInput={(params) => <TextField {...params} label="Medicine Names with their brands" variant="outlined" />}
                  size="small"
                  // getOptionSelected={(value)=> onSelectMedicine(value)}
                  onChange={(event, value) => onSelectMedicine(event, value)}
                />
              </div>
              <Button style={searchButton} color="ffffff" aria-label="edit" justIcon round>
                <Search style={searchButton}/>
              </Button>
              
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={6}>
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
                  size="sm"
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
      
      <GridContainer xs={12} sm={12} md={12}>
        <Card style={cdStyle}>  
        <CardHeader color="primary">
            <h4 className={classes.cardTitleWhite}>Results</h4>
          </CardHeader>
          
          <CardBody>
            <TableScrollbar rows={15}>
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
              
                <TableBody>
                  { (pharmacyData <=0 && toggle==false ? rows : pharmacyData).filter((row)=>{
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
            <Grid item xs={12}>
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
