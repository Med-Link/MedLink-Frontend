/* eslint-disable react/jsx-key */
import React, { useEffect, useState } from "react";
import axios from 'axios';
import { backendUrl } from "../../urlConfig.js";
// @material-ui/core
import { makeStyles, withStyles } from "@material-ui/core/styles";
import IconButton from '@material-ui/core/IconButton';
import CreateIcon from '@material-ui/icons/Create';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';

import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
// core components
import GridItem from "../../components/Dashboard/Grid/GridItem.js";
import GridContainer from "../../components/Dashboard/Grid/GridContainer.js";
import Table from "../../components/Dashboard/Table/Table.js";
import Card from "../../components/Dashboard/Card/Card";
import CardHeader from "../../components/Dashboard/Card/CardHeader.js";
import CardBody from "../../components/Dashboard/Card/CardBody.js";
import Button from "../../components/Dashboard/CustomButtons/Button";
import styles from "../../assets/jss/material-dashboard-react/views/dashboardStyle";

import AddNewMedicine from "../../components/admin/AddNewMedicine"
import { SentimentDissatisfied } from "@material-ui/icons";


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


export default function Medicine() {

  const [openEdit, setOpenEdit] = React.useState(false);
  const [medid, setMedid] = React.useState();


  const handleClickOpenEdit = (medid) => {
    setOpenEdit(true);
    setMedid(medid);
  };

  const handleCloseEdit = () => {
    setOpenEdit(false);
  };

  const classes = useStyles();

  const [data, setData] = useState([]);
  const [medicinename, setMedicinename] = useState();

  const updatemedicine =(e)=>{
    const token = window.localStorage.getItem('token');
        
    // e.preventDefault();
    console.log("hhhhhhhh")
    axios.post(`${backendUrl}/admin/updatemedicine`, {
        medid:medid,
        newmedname:medicinename}, {headers: {
          'Authorization': token ? `Bearer ${token}` : ''
        },
    }).then((response)=>{
        // console.log(response);
        // setSignedUp(true);
        getdata();
        handleCloseEdit();
    }).catch((err)=>{
        console.log(err);
        handleCloseEdit();
        // setError("Password must be atleast 6 characters long");
    });
  }
  const getdata =() =>{
    const token = window.localStorage.getItem('token');
    
      axios.get(`${backendUrl}/admin/viewallmedicine`,{
        headers: {
          'Authorization': token ? `Bearer ${token}` : ''
        }
        })
      .then(res =>{
        const results =  res.data.result;
         console.log(results);
         let array =[];
         results.forEach(element=>{
          let arr=[];
          arr.push(element.medid,element.medname,element.brand,<IconButton aria-label="delete" onClick={()=>handleClickOpenEdit(element.medid)}><CreateIcon /></IconButton>);
          array.push(arr);
         }) 
        //  console.log(arr[0])        
        setData(array);
      })
  
    
    
  }
  React.useEffect(()=>{
    getdata();
  },[]);
  return (
    <div>
      {/* <GridContainer> */}
        <GridContainer>
         
          <GridItem xs={12} sm={12} md={7}>
              <Card>
                <CardHeader color="success">
                  <h4 className={classes.cardTitleWhite}>Current Medicine Types</h4>
                </CardHeader>
                <CardBody>
                  <Table
                    tableHeaderColor="primary"
                    tableHead={["Med ID", "Med Name","Brand","Edit"]}
                    tableData={data}
                  // {[
                  //     ["Medicine2", "AAAAAAAAAAA",'Brand1',<IconButton aria-label="delete" onClick={handleClickOpenEdit}><CreateIcon /></IconButton>,<IconButton aria-label="delete"><DeleteIcon /></IconButton>],
                  //     ["Medicine3", "BBBBBBBBBBB","Brand1",<IconButton aria-label="delete" onClick={handleClickOpenEdit}><CreateIcon /></IconButton>,<IconButton aria-label="delete"><DeleteIcon /></IconButton>],
                  //     ["Medicine4", "BBBBBBBBBBB","Brand2",<IconButton aria-label="delete" onClick={handleClickOpenEdit}><CreateIcon /></IconButton>,<IconButton aria-label="delete"><DeleteIcon /></IconButton>],
                  //   ]} 
                  />
                </CardBody>
              </Card>
          </GridItem>   
          <GridItem xs={12} sm={12} md={5}>
            <AddNewMedicine getdata={getdata}/>
          </GridItem>     
        </GridContainer>
      {/* </GridContainer> */}
      
      <Dialog onClose={handleCloseEdit} aria-labelledby="customized-dialog-title" open={openEdit}>
        <DialogContent dividers>
        <TextField
            autoFocus
            margin="dense"
            variant="standard"
            id="newmedname"
            onChange={(e) => setMedicinename(e.target.value)}
            label="Update Medicine name"
            type="text"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={()=>updatemedicine()} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>

    </div>
  );
}
