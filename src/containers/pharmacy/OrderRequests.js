/* eslint-disable react/jsx-key */
/* eslint-disable react/jsx-no-duplicate-props */
import React, { useEffect, useState } from "react";
import { backendUrl } from "../../urlConfig.js";
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";
// @material-ui/core components
import { withStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Link from '@material-ui/core/Link';
import TableScrollbar from 'react-table-scrollbar'

// core components
import GridItem from "../../components/Dashboard/Grid/GridItem.js";
import GridContainer from "../../components/Dashboard/Grid/GridContainer.js";
import Card from "../../components/Dashboard/Card/Card.js";
import CardHeader from "../../components/Dashboard/Card/CardHeader.js";
import CardBody from "../../components/Dashboard/Card/CardBody.js";

import Switch from "../../components/Dashboard/CustomButtons/Switch";
import Button from "../../components/Dashboard//CustomButtons/Button";

import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import { Table,TableHead, TableBody, TableCell, TableRow } from "@material-ui/core";

// import DialogActions from '@material-ui/core/DialogActions';
// import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
// import DialogTitle from '@material-ui/core/DialogTitle';




import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
// core components




import PhotoSteps from "../../components/admin/dialogbox/PhotoSteps";

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


const useStyles = makeStyles(styles);

export default function OrderRequests() {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);
  const [openView, setOpenView] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleClickOpenView = () => {
    setOpenView(true);
  };

  const handleCloseView = () => {
    setOpenView(false);
  };


  // --------------------------------

  const [data, setData] = useState([]);
  const getdata = () => {
    const token = window.localStorage.getItem('token');

    axios.get(`${backendUrl}/pharmacy/getOrderReqs`, {
      headers: {
        Authorization: token ? `Bearer ${token}` : "",
      },
    }).then(res => {
      const results = res.data.allOrders.rows;
      console.log(results);
      setData(results);
    })
  }

  React.useEffect(() => {
    getdata();
  }, []);

  // ------------------------------------

  const columns = [
    { id: 'orderid', label: 'Order ID'},
    { id: 'description', label: 'Description'},
    { id: 'customerid', label: 'Customer ID'},
    { id: 'customername', label: 'Customer Name'},
    { id: 'view', label: 'View Order'},];
  const rows = data; 

  return (
    <GridContainer>
      <GridItem xs={12} sm={12} md={12}>
        <Card>
          <CardHeader color="primary">
            <h4 className={classes.cardTitleWhite}>Order Requests</h4>
          </CardHeader>
          <CardBody>
            <TableScrollbar rows={18} style={{}}>
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
                  {rows.map((row)=>{
                    return(
                    <TableRow>
                      <TableCell align="left">
                        {row.id}
                      </TableCell>
                      <TableCell align="left">
                        {row.description}
                      </TableCell>
                      <TableCell align="left">
                        {row.customerid}
                      </TableCell>
                      <TableCell align="left">
                        {row.firstname} {row.lastname}
                      </TableCell>
                      <TableCell align="left">
                        <Link variant="h6" underline="none" className={clsx(classes.rightLink)} href="orderprocess/">
                          <Button id="view" color="primary" Button color="primary" size="sm" >View</Button>
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
          </CardBody>
        </Card>
      </GridItem>

    </GridContainer>
  );
}
