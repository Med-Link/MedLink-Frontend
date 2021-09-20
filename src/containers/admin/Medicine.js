/* eslint-disable react/jsx-key */
import React, {useState} from "react";
import axios from 'axios';
import { backendUrl } from "../../urlConfig.js";
import TableScrollbar from 'react-table-scrollbar'
// @material-ui/core
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import InputAdornment from '@material-ui/core/InputAdornment';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import SearchIcon from '@material-ui/icons/Search';
import IconButton from '@material-ui/core/IconButton';
import CreateIcon from '@material-ui/icons/Create';
import CloseIcon from '@material-ui/icons/Close';
import { Table,TableHead, TableBody, TableCell, TableRow } from "@material-ui/core";

import GridItem from "../../components/Dashboard/Grid/GridItem.js";
import GridContainer from "../../components/Dashboard/Grid/GridContainer.js";
import Card from "../../components/Dashboard/Card/Card";
import CardHeader from "../../components/Dashboard/Card/CardHeader.js";
import CardBody from "../../components/Dashboard/Card/CardBody.js";
import Button from "../../components/Dashboard/CustomButtons/Button";
import styles from "../../assets/jss/material-dashboard-react/views/dashboardStyle";

import AddNewMedicine from "../../components/admin/AddNewMedicine"

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
  
  const [searchTerm, setSearchTerm] = useState(""); //for search function

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
            setData(results);
      })
  
    
    
  }
  React.useEffect(()=>{
    getdata();
  },[]);

  const columns = [
    { id: 'medid', label: 'Med ID'},
    { id: 'medname', label: 'Med Name'},
    { id: 'brand', label: 'Brand'},
    { id: 'edit', label: 'Edit'},];
  const rows = data; 

  return (
    <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={7}>
              <Card>
                <CardHeader color="primary">
                  <h4 className={classes.cardTitleWhite}>Current Medicine Types</h4>
                </CardHeader>
                <CardBody >
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
                  <TableScrollbar rows={15} style={{}}>
                    <Table>
                      <TableHead>
                        <TableRow>
                          {columns.map((column) => (
                            <TableCell style={{color:'#213458',backgroundColor: "white"}}
                              key={column.id}
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
                          } else if (row.medname.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          row.brand.toLowerCase().includes(searchTerm.toLowerCase())){
                            return row
                          }
                        }).map((row,id) => {
                          return(
                          <TableRow key={id}>
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
                              <IconButton aria-label="delete" onClick={()=>handleClickOpenEdit(row.medid)}><CreateIcon /></IconButton>
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
          <GridItem xs={12} sm={12} md={5}>
            <AddNewMedicine getdata={getdata}/>
          </GridItem>     
        </GridContainer>
      
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
