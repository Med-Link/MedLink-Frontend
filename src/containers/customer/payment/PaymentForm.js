import React from 'react';
import Typography from '@material-ui/core/Typography';
import { Button } from '@material-ui/core';
import PropTypes from 'prop-types';
import { Payment } from '@material-ui/icons';


export default function PaymentForm(props) {
  

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Payment method
      </Typography>
      <Button onClick={props.handlePayherePayment} >
            <img
              src="https://www.payhere.lk/downloads/images/pay_with_payhere_light.png"
              alt="Pay with PayHere"
              width="180"
            />
          </Button>
       
    </React.Fragment>
  );
}
PaymentForm.propTypes = {
  handlePayherePayment: PropTypes.func ,
   
};