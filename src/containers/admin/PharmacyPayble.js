/* eslint-disable react/jsx-key */
import React,{useState, useEffect} from "react";
import axios from 'axios';
import { backendUrl } from "../../urlConfig.js";
import TableScrollbar from 'react-table-scrollbar'

// @material-ui/core components
import { makeStyles,withStyles } from "@material-ui/core/styles";
import FormControl from '@material-ui/core/FormControl';
import InputAdornment from '@material-ui/core/InputAdornment';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import { Table,TableHead, TableBody, TableCell, TableRow } from "@material-ui/core";

import SearchIcon from '@material-ui/icons/Search';

import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';

// core components
import GridItem from "../../components/Dashboard/Grid/GridItem.js";
import GridContainer from "../../components/Dashboard/Grid/GridContainer.js";
import Card from "../../components/Dashboard/Card/Card.js";
import CardHeader from "../../components/Dashboard/Card/CardHeader.js";
import CardBody from "../../components/Dashboard/Card/CardBody.js";
import Button from "../../components/Dashboard/CustomButtons/Button";

import styles from "../../assets/jss/material-dashboard-react/views/dashboardStyle";

const useStyles = makeStyles(styles);
const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

export default function PharmacyPayble() {
  const classes = useStyles();

  const [searchTerm, setSearchTerm] = useState(""); //for search function


  const columns = [
    { id: 'pid', label: 'PharmacyId'},
    { id: 'pharmacyname', label: 'Pharmacy Name'},
    { id: 'total', label: 'Total Amount'},
    { id: 'total', label: 'Payment'}];

  // const rows = data; 
  const [pharmacyid, setPharmacyid] = useState('');

  const [data, setData] = useState([]);
  const [openpay, setOpenpay] = React.useState(false);
  const handleClickOpen = (pharmacyid) => {
    setOpenpay(true);
    setPharmacyid(pharmacyid);
  };
  const handleClosepay = () => {
    setOpenpay(false);
  };

  const paypharmacy = () => {
    const token = window.localStorage.getItem('token');

    axios.post(`${backendUrl}/admin/paypharmacy`,{pharmacyid:pharmacyid}, {
      headers: {
        Authorization: token ? `Bearer ${token}` : "",
      },
    }).then(res => {
      console.log(res);
      // setData(results);
    }).catch((err)=>{
      console.log(err);

    })
  };

  const getpayablepharmacy = () => {

    const token = window.localStorage.getItem('token');
  
    console.log('kkkk')
    axios.get(`${backendUrl}/admin/payablepharmacy`, {
      headers: {
        'Authorization': token ? `Bearer ${token}` : ''
      },
    }).then((res)=>{
          console.log(res);
          const results =  res.data.result;
          setData(results);
          // console.log("jjjjjj");
        }).catch((err)=>{
          console.log(err);
 
      });
  };
  useEffect(() => {
    getpayablepharmacy();
  }, []);

  
  return (
    
    <GridContainer>
      <GridItem xs={12} sm={12} md={12}>
        <Card>
          <CardHeader color="primary">
            <h4 className={classes.cardTitleWhite}>Payble Amounts for Pharmacies  </h4>
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
                  placeholder="Search..."
                  fontSize="small"
                  size="sm"
                />
              </FormControl>
            </div>
            <TableScrollbar rows={20}>
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
                      {data.map((row) => {
                          return(
                          <TableRow>
                            <TableCell align="left">
                              {row.pharmacyid}
                            </TableCell>
                            <TableCell align="left">
                              hhhhh
                            </TableCell>
                            <TableCell align="left">
                              {row.sum}
                            </TableCell>
                            <TableCell align="left">
                              <Button aria-label="pay" onClick={()=>handleClickOpen(row.pharmacyid)} />
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
      <Dialog open={openpay} onClose={handleClosepay} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">pay the pharmacy</DialogTitle>
        
          
        <DialogActions>
          <Button onClick={handleClosepay} color="primary">
            Cancel
          </Button>
          <Button onClick={()=>paypharmacy()} color="primary">
            confirm
          </Button>
        </DialogActions>
      </Dialog>
      
      
    </GridContainer>
  );
}
