import React, { useState } from "react";
import { backendUrl } from "../../../urlConfig.js";
import axios from "axios";
import Papa from "papaparse";
import { Link } from "react-router-dom";
import FileSaver from 'file-saver';

import Typography from '@material-ui/core/Typography';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import { makeStyles } from '@material-ui/core/styles';
import MuiAlert from '@material-ui/lab/Alert';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextButton from '@mui/material/Button';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Card from "../../../components/Dashboard/Card/Card.js";
import CardHeader from "../../../components/Dashboard/Card/CardHeader.js";
import CardBody from "../../../components/Dashboard/Card/CardBody.js";
import Button from "../../../components/Dashboard/CustomButtons/Button";
import GridItem from "../../../components/Dashboard/Grid/GridItem.js";
import GridContainer from "../../../components/Dashboard/Grid/GridContainer.js";
import styles from "../../../assets/jss/material-dashboard-react/views/dashboardStyle";


const useStyles = makeStyles(styles);
function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}


const AddCsv = () => {
  const classes = useStyles();

  // save button states
  const [openAccept, setOpenAccept] = React.useState(false);
  const handleClickOpenAccept = () => {
    setOpenAccept(true);
  };
  const handleCloseAccept = () => {
    setOpenAccept(false);
  };

  // add csv
  const [csv, setCSV] = useState(null);

  const handleChange = event => {
    setCSV(event.target.files[0]);
  };

  const importCSV = () => {
    const csvfile = csv;
    Papa.parse(csvfile, {
      complete: updateData,
      header: true
    });
  };

  const updateData = (result) => {
    var data = result.data;
    console.log(data);
    const token = window.localStorage.getItem("token");
    axios.post(`${backendUrl}/pharmacy/addcsv`,
      {
        csvarray: data
      }, {
      headers: {
        Authorization: token ? `Bearer ${token}` : "",
      },
    })
      .then((response) => {
        console.log(response.data.message);
      });
  };

  const download = () => {
    FileSaver.saveAs(
      process.env.PUBLIC_URL + "https://medlinkpharmacy.s3.ap-south-1.amazonaws.com/pharmacyDocuments/medlink-csvfileformat.xlsx",
      "medlink-csvfileformat.xlsx");
  }
  const notify = () => toast.success('CSV file added successfully !!', {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });

  return (
    <div>
      <Card >
        <CardHeader color="success">
          <h4 className={classes.cardTitleWhite}>Enter CSV file</h4>
          <h5 className={classes.cardTitleWhite}>Download CSV File Format *
            <TextButton size="small" onClick={download} color="inherit">
              Click Here
            </TextButton>
          </h5>
        </CardHeader>
        <CardBody>
          <GridContainer>
            <GridItem xs={6} sm={6} md={6}>
              <Typography variant="body1"> Update Stock - Add (.csv) File</Typography>
            </GridItem>
            <GridItem xs={6} sm={6} md={6}>
              <Button component="label" startIcon={<CloudUploadIcon />} size="sm">
                Upload <input type="file" hidden onChange={handleChange} />
              </Button>
            </GridItem>
            <GridItem xs={12} sm={12} md={12} style={{ display: "flex", justifyContent: "center", alignItems: "center", }}>
              <Button variant="outlined" color="success" onClick={handleClickOpenAccept}>
                Save
              </Button>
            </GridItem>
          </GridContainer>
        </CardBody>
      </Card>


      {/*upload csv dialogbox*/}
      <Dialog open={openAccept} onClose={handleCloseAccept} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description" >
        <DialogTitle id="alert-dialog-title">{"Do you want to Save this to the stock"}</DialogTitle>
        <DialogActions>
          <Button onClick={handleCloseAccept} color="danger">
            Cancel
          </Button>
          <Button onClick={(() => {
            importCSV();
            notify();
            handleCloseAccept();
          })} color="primary" autoFocus>
            Yes
          </Button>
        </DialogActions>
      </Dialog>
      <ToastContainer
        position="top-right"
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
  )
}

export default AddCsv;

