/* eslint-disable react/jsx-key */
import React,{useState} from "react";
import axios from 'axios';
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

import { withStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
// core components
import GridItem from "../../components/Dashboard/Grid/GridItem.js";
import GridContainer from "../../components/Dashboard/Grid/GridContainer.js";
import Table from "../../components/Dashboard/Table/Table.js";
import Card from "../../components/Dashboard/Card/Card.js";
import CardHeader from "../../components/Dashboard/Card/CardHeader.js";
import CardBody from "../../components/Dashboard/Card/CardBody.js";
import Switch from "../../components/Dashboard/CustomButtons/Switch";
import Button from "../../components/Dashboard//CustomButtons/Button";
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

export default function TableList() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [doc1,setDoc1]= React.useState('');
  const [doc2,setDoc2]= React.useState('');
  const [doc3,setDoc3]= React.useState('');


  const handleClickOpen = (document1,document2,document3) => {
    setDoc1(document1);
    setDoc2(document2);
    setDoc3(document3);
  
    // console.log(document1)
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const [data, setData] = useState([]);
  const getdata =() =>{
    const token = window.localStorage.getItem('token');
    
      axios.get('http://localhost:4000/api/admin/viewpharmacyrequests',{
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
          arr.push(element.name,element.email,element.contactnumber,element.location,<Button color="primary" round onClick={()=>handleClickOpen(element.document1,element.document2,element.document3)}>View</Button>,<Switch color="primary" inputProps={{ 'aria-label': 'primary checkbox' }} />,<Button color="danger" round>Reject</Button>);
          array.push(arr);
         })         
        setData(array);
      })
      // .then(data =>{
      //   // console.log(data.message);
      //   // const s= res.data.result[0];
      //   // console.log(s);
      // })
    
  }
  React.useEffect(()=>{
    getdata();
  },[]);
  return (
    
    <GridContainer>
      <GridItem xs={12} sm={12} md={12}>
        <Card>
          <CardHeader color="primary">
            <h4 className={classes.cardTitleWhite}>Pharmacy Registration Requests  </h4>
            {/* <p className={classes.cardCategoryWhite}>
              Here is a subtitle for this table
            </p> */}
          </CardHeader>
          <CardBody>
           
          <Table
              tableHeaderColor="primary"
              tableHead={["Pharmacy Name", "Email", "Mobile Number",  "Location","Documents" ,"Activate"]}
              tableData={data}
              // tableData={[
              // data.map((row)=>(
              //     [row.name,row.email,row.contactnumber,row.location ]
              //   ))
                  // ["Micael Medicare","mmc@yahoo.com","0759865522", "https://goo.gl/maps/9JrK788MDv1D89wPg7",<Button color="primary" round onClick={handleClickOpen}>View</Button> ,<Switch color="primary" inputProps={{ 'aria-label': 'primary checkbox' }} />,<Button color="danger" round>Reject</Button>],
                  // ["Minerva Pharmacy","minervapharm@yahoo.com","0759865522", "https://goo.gl/maps/9JrKw8MDv1D89wPg7",<Button color="primary" round onClick={handleClickOpen}>View</Button> ,<Switch color="primary" inputProps={{ 'aria-label': 'primary checkbox' }} />,<Button color="danger" round>Reject</Button>],
                  // ["HelaOsu","helaosu@yahoo.com","0759865522", "https://goo.gl/maps/9JrKw8MDv1D89wPg7",<Button color="primary" round onClick={handleClickOpen}>View</Button> ,<Switch color="primary" inputProps={{ 'aria-label': 'primary checkbox' }} />,<Button color="danger" round>Reject</Button>],

                // })

              // ]}
            />
          </CardBody>
        </Card>
      </GridItem>
      <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          Documents
        </DialogTitle>
        <DialogContent dividers>
          <PhotoSteps doc1={doc1} doc2={doc2} doc3={doc3}/>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose} color="primary">
            Okay
          </Button>
        </DialogActions>
      </Dialog>
    </GridContainer>
  );
}
