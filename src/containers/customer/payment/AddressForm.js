import React,{useState} from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import { atom } from 'jotai'
import { useAtom } from 'jotai'
import { addressAtom } from './Checkout';
import { contactnumberAtom } from './Checkout';


export default function AddressForm() {
   
  const [addressline1, setAddressline1] = useAtom(addressAtom);
  const [contactnumber, setContactnumber] = useAtom(contactnumberAtom);
  const customer = JSON.parse(localStorage.getItem('user'));
  const address = window.sessionStorage.getItem("address");
  const firstname = customer[0].firstname;
  const lastname = customer[0].lastname;

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Delivery Address
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="firstName"
            name="firstName"
            label="First name"
            fullWidth
            aria-readonly="true"
            value ={firstname} 
            autoComplete="given-name"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="lastName"
            name="lastName"
            label="Last name"
            fullWidth
            aria-readonly="true"
            value ={lastname} 
            autoComplete="family-name"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="address1"
            name="address1"
            label="Address line 1"
            // fullWidth
            value ={addressline1} onChange={(e) => setAddressline1(e.target.value)}
            autoComplete="shipping address-line1"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="address2"
            name="address2"
            label="Address line 2"
            aria-readonly="true"
            fullWidth
            value={address}
            autoComplete="shipping address-line2"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="contact no"
            name="Contact No"
            label="Contact No"
            fullWidth
            value ={contactnumber} onChange={(e) => setContactnumber(e.target.value)}
            autoComplete="07********"
          />
        </Grid>
         
      </Grid>
    </React.Fragment>
  );
}