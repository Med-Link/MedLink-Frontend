import React,{useState} from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';



export default function AddressForm() {
  // const [firstname, setFirstname] = useState("");
  // const [lastname, setLastname] = useState("");
  const [addressline1, setAddressline1] = useState("");
  const [contactno, setContactno] = useState("");
  const customer = JSON.parse(localStorage.getItem('user'));
  // const lastname = window.localStorage.getItem("address");
  const firstname = customer[0].firstname;
  const lastname = customer[0].lastname;

  // console.log(customer[0].firstname)



  const address = window.sessionStorage.getItem("address");

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
            required
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
            value ={contactno} onChange={(e) => setContactno(e.target.value)}
            autoComplete="07********"
          />
        </Grid>
        {/* <Grid item xs={12} sm={6}>
          <TextField id="state" name="state" label="State/Province/Region" fullWidth />
        </Grid> */}
         
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
            label="Use this address for payment details"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}