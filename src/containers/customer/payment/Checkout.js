import React,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import AddressForm from './AddressForm';
import PaymentForm from './PaymentForm';
import Review from './Review';
import TotalBill from './TotalBill'
import PropTypes from 'prop-types';
import axios from 'axios';
import { backendUrl } from '../../../urlConfig';
import { ngrokUrl } from '../../../urlConfig';
import { orderplaceSchema } from '../../../validations/orderplaceValidation';
import { atom } from 'jotai'
import { useAtom } from 'jotai'
import {merchantID} from '../../../merchantconfig';

const addScript = (src, callback) => {
  const tag = document.createElement("script");
  tag.type = "text/javascript";
  tag.src = src;
  tag.onload = callback;
  document.body.appendChild(tag);
};

export const addressAtom = atom('');
export const contactnumberAtom = atom('');


const useStyles = makeStyles((theme) => ({
  appBar: {
    position: 'relative',
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 600,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
  },
  stepper: {
    padding: theme.spacing(3, 0, 5),
  },
  buttons: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.primary.main,
  },
}));

const steps = ['Review your order', 'Total Bill','Delivery address','Payment form' ];



function getStepContent(step,props,costdata,handlePayherePayment) {
  switch (step) {
    case 0:
      return <Review products={props.products} />;
    case 1:
      return <TotalBill costs={costdata} />;
    case 2:
      return <AddressForm />;
    case 3:
      return <PaymentForm handlePayherePayment={handlePayherePayment} />;
    default:
      throw new Error('Unknown step');
  }
}

export default function Checkout(props) {
  const toolBarStyle = {backgroundColor: '#126e82' }
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const headerStyle = {color: '#efe3e3',fontWeigth: 'bold'}
  const btStyle = {color: '#efe3e3',backgroundColor: '#126e82'}
  const subHeaderStyle = {color: '#126e82',fontWeigth: 'bold'}

  const [addressline1, setAddressline1] = useAtom(addressAtom);
  const [contactnumber, setContactnumber] = useAtom(contactnumberAtom);

  const handlePayherePayment = async () => {
    props.setOpenCheckout(false);
    console.log(props.setOpenCheckout)
    const address2 = window.sessionStorage.getItem("address");
    const address = addressline1 + address2;
    
    const customer = JSON.parse(localStorage.getItem('user'));
    const customeremail = customer[0].email;
    const firstname = customer[0].firstname;
    const lastname = customer[0].lastname;
    const medlistid=props.products[0].medlistid;
    const totalcost = costdata.totalcost;


    const payment={
      sandbox:true,
      merchant_id :merchantID,
      return_url : `www.abcd.com`,
      cancel_url :`www.abcd.com`,
      notify_url :`${ngrokUrl}/order/checkout`,
      first_name :firstname ,
      last_name : lastname ,
      email : customeremail,
      phone : contactnumber,
      address : address,
      city : 'matara',
      country : 'Sri Lanka',
      order_id : medlistid,
      items : ' ',
      currency : 'LKR',
      amount : totalcost}
    payhere.startPayment(payment);

  };
  React.useEffect(() => {
    const init = () => {
      payhere.onCompleted = async function onCompleted() {
        console.log("Payment completed. OrderID:" ); 
        props.getdata();      
        //Note: validate the payment and show success or failure page to the customer
        ``;
      };
      payhere.onDismissed = function onDismissed() {
        //Note: Prompt user to pay again or show an error page
        console.log("Payment dismissed");
      };

      // Called when error happens when initializing payment such as invalid parameters
      payhere.onError = function onError(error) {
        // Note: show an error page
        console.log("Error:" + error);
      };
    };
    // if (orderDetails.orderCode !== "") {
    addScript(
      "https://www.payhere.lk/lib/payhere.js",
      init
    );
     
  }, []);

const [costdata, setCostdata] = useState([]);

const Completeorder = async () => {
  const token = window.localStorage.getItem('token');
  const address2 = window.sessionStorage.getItem("address");
  const customer = JSON.parse(localStorage.getItem('user'));
  const firstname = customer[0].firstname;
  const lastname = customer[0].lastname;
  const medlistid=props.products[0].medlistid;
  const totalprice=props.products[0].totalprice;
  const address = addressline1 + address2;
  const totalcost = costdata.totalcost;
  const deliverycost = costdata.deliverycost;
  const servicecost = costdata.servicecost;

    const form = {
      contactnumber,
    };
    const isValid = await orderplaceSchema.isValid(form);
    if (isValid === true) {
      axios.post(`${backendUrl}/order/completeorder`, {
        medlistid,
        totalcost,
        deliverycost,
        servicecost,
        totalprice,
        address,
        contactnumber,
      },{headers : {
        'Authorization': token ? `Bearer ${token}` : ''
      },
    }).then((response) => {
        console.log(response);
        // setSignedUp(true);
      }).catch((err) => {
        if (err.response && err.response.data) {
          console.log(err);// some reason error message
        }
      });
    } else {
      console.log(err);
    }
  
};
  
  const calculatetotal = async() => {
     
    const token = window.localStorage.getItem('token');
    const latitude = window.sessionStorage.getItem("latitude");
    const longitude = window.sessionStorage.getItem("longitude");
    
    axios.post(`${backendUrl}/order/findtotal`, {latitude:latitude, longitude:longitude, pharmacyid:props.products[0].pharmacyid, totalprice:props.products[0].totalprice}, {
      headers: {
        'Authorization': token ? `Bearer ${token}` : ''
      },
    }).then((response)=>{
      setCostdata(response.data);

    }).catch((err)=>{
      console.log(err);
    });
     
  };

  const handleNext = () => {
    if(activeStep == 0){
      calculatetotal();
      window.sessionStorage.removeItem('latitude');
      window.sessionStorage.removeItem('longitude');
    }
    if(activeStep==2){
      Completeorder()
    }
    
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  return (
    <React.Fragment>
      <div style={{display: 'flex',flexDirection: 'column', alignItems: 'center'}}>
          <Avatar className={classes.avatar}>
            <ShoppingCartOutlinedIcon/>
          </Avatar>
        </div>
          <Typography component="h1" variant="h5" align="center" style={subHeaderStyle}>
            Checkout
          </Typography>
          <Stepper activeStep={activeStep} className={classes.stepper}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <React.Fragment>
            {activeStep === steps.length ? (
              <React.Fragment>
                <Typography variant="h5" gutterBottom style={subHeaderStyle}>
                  Thank you for your order.
                </Typography>
                <Typography variant="subtitle1">
                  Your order has been placed successfully. You will
                  recieve an update when your order has delivered.
                </Typography>
              </React.Fragment>
            ) : (
              <React.Fragment>
                {getStepContent(activeStep, props, costdata, handlePayherePayment)}
                <div className={classes.buttons}>
                  {activeStep !== 0 && (
                    <Button style={btStyle} onClick={handleBack} className={classes.button}>
                      Back
                    </Button>
                  )}
                  <Button
                    variant="contained"
                    style={btStyle}
                    onClick={handleNext}
                    className={classes.button}
                  >
                    {activeStep === steps.length - 2 ? 'Place order' : 'Next'}

                  </Button>
                </div>
              </React.Fragment>
            )}
          </React.Fragment>
    </React.Fragment>
  );
}
Checkout.propTypes = {
  products: PropTypes.any,
  costs:PropTypes.any,
  setOpenCheckout:PropTypes.any,
  getdata:PropTypes.any,
   
};