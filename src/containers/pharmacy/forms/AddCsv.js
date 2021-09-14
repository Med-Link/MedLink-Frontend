import React, {useState} from "react";
import csvtojson from "csvtojson";
import Typography from '@material-ui/core/Typography';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import { makeStyles } from '@material-ui/core/styles';
import MuiAlert from '@material-ui/lab/Alert';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';

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


const Form = () => {
    const classes = useStyles();
  
    // save button
  const [openAccept, setOpenAccept] = React.useState(false);
  const handleClickOpenAccept = () => {
    setOpenAccept(true);
  };
  const handleCloseAccept = () => {
    setOpenAccept(false);
  };

// backend connection to add med details to the database
const [medid, setMedId] = useState("");
const [quantity, setQuantity] = useState("");
const [price, setPrice] = useState("");
const [expdate, setExpDate] = useState("");
const [mnfdate, setMnfDate] = useState("");

// const submit = (e) => {
//   e.preventDefault();
//   const token = window.localStorage.getItem("token");
//   axios.post(`${backendUrl}/pharmacy/addstock`, 
//   {
//   medid: medid,
//   quantity:quantity,
//   price:price,
//   expiredate:expdate,
//   manufacdate:mnfdate,
// },{
//   headers: {
//         Authorization: token ? `Bearer ${token}` : "",
//       },
//     })
//   .then((response) => {
//       console.log(response);
//       getdata();
//     });
// };

function handleChange(event) {

    // get file name
    const fileName = event.target.files[0].name;
    console.log(fileName);

    // database ekata yawanna data eka eka gamu ganata
    csvtojson().fromFile(fileName).then(source => {
  
    // Fetching the data from each row 
    for (var i = 0; i < source.length; i++) {
        setMedId(source[i]["MedId"]);
        setQuantity(source[i]["Quantity"]);
        setPrice(source[i]["price"]);
        setExpDate(source[i]["expdate"]);
        setMnfDate(source[i]["mnfdate"]);

        e.preventDefault();
        const token = window.localStorage.getItem("token");
        axios.post(`${backendUrl}/pharmacy/addstock`, 
        {
        medid: medid,
        quantity:quantity,
        price:price,
        expiredate:expdate,
        manufacdate:mnfdate,
    },{
        headers: {
              Authorization: token ? `Bearer ${token}` : "",
            },
          })
        .then((response) => {
            console.log(response);
            getdata();
          });
    }
    console.log("mish you did it!! All items stored into database successfully");
    });
}

    return (
        <div>
        <Card >
            <CardHeader color="success">
              <h4 className={classes.cardTitleWhite}>Enter CSV file</h4>
            </CardHeader>
            <CardBody>
              <GridContainer>
                <GridItem xs={6} sm={6} md={6}>
                <Typography variant="body1"> Update Stock - Add (.csv) File</Typography>
                </GridItem>
                <GridItem xs={6} sm={6} md={6}>
                <Button color="default" component="label" startIcon={<CloudUploadIcon />} size="sm">
                  Upload <input type="file" hidden startIcon={<CloudUploadIcon />} onChange={handleChange}/>
                  </Button>
                </GridItem>
                <GridItem xs={12} sm={12} md={12} style={{display: "flex",justifyContent: "center", alignItems: "center",}}>
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
            Cancle
            </Button>
            <Button onClick={handleCloseAccept} color="primary" autoFocus>
            Yes
            </Button>
        </DialogActions>
        </Dialog>

    </div>
    )
}

export default Form;
