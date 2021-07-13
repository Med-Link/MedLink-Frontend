// import { Container } from '@material-ui/core';
import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
// import './App.css';
import Index from './containers/mainLandingPage/Home'
import Signin from './containers/signin/SignIn'
import SignUpUser from './containers/signup/SignUpUser'
import Profile from './containers/customer/profile/Profile'
import Form from './containers/customer/form/Form'
import Checkout from './containers/customer/payment/Checkout'
import Customer from './containers/customer/layouts/Customer.js'
import BuyingHistory from './containers/customer/buyingHistory/ViewHistoryDetails.js'
import EditProfile from './containers/customer/profile/EditProfile.js'
import ResetPassword from './containers/customer/password/ResetPassword.js'


import Admin from './containers/admin/layouts/Admin.js'
import SignUpAdmin from './containers/admin/SignUpAdmin'
import SignInAdmin from './containers/admin/SignInAdmin'

import CustomerSignup from './containers/customer/SignUpCustomer'
import CustomerSignin from './containers/customer/SignInCustomer'

import Pharmacy from './containers/pharmacy/layouts/Pharmacy'
import SignUpPharmacy from './containers/pharmacy/SignUpPharmacy'
import SignInPharmacy from './containers/pharmacy/SignInPharmacy'


import PrivateRoute from './components/HOC/privateRoute';
import PrivateRoute1 from './components/HOC/privateRoute1';
import PrivateRoute2 from './components/HOC/privateRoute2';



function App() {
  return (
    <div className="App">
       <Router>
        <Switch>
          <Route path="/" exact component={Index} />
          <Route path="/Signin" component={Signin} />
          <Route path="/SignupUser" component={SignUpUser} />
          <Route path="/Profile" component={Profile} />
          <Route path="/Form" component={Form} />
          <Route path="/Checkout" component={Checkout} />
          <Route path="/OrderHistory" component={BuyingHistory} />
          <Route path="/EditProfile" component={EditProfile} />
          <Route path="/ResetPassword" component={ResetPassword} />
           


<<<<<<< HEAD
          {/* <PrivateRoute path="/admin" component={Admin} /> */}
          <Route path="/admin" component={Admin} />
          <Route path="/adminsignup" component={SignUpAdmin} />
=======
          <PrivateRoute path="/admin" component={Admin} />
          {/* <Route path="/adminsignup" component={SignUpAdmin} /> */}
>>>>>>> cc77609be9cfeffa6ea9fa6ae697ea30660dcb3e
          <Route path="/adminsignin" component={SignInAdmin} />

          <Route path="/Customer" component={Customer} />
          <Route path="/customersignup" component={CustomerSignup} />
          <Route path="/customersignin" component={CustomerSignin} />

          {/* <PrivateRoute2 path="/pharmacy" component={Pharmacy} /> */}
          <Route path="/pharmacy" component={Pharmacy} />
          <Route path="/pharmacysignup" component={SignUpPharmacy} />
          <Route path="/pharmacysignin" component={SignInPharmacy} />


        </Switch>
      </Router>
      
      
      
    </div>
  ); 
}

export default App;
