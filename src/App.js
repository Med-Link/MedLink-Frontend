// import { Container } from '@material-ui/core';
import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
// import './App.css';
import Index from './containers/mainLandingPage/Home'

import Signin from './containers/signin/SignIn'
import Signup from './containers/signup/SignUpPharmacy'
import SignUpUser from './containers/signup/SignUpUser'
import Profile from './containers/customer/profile/Profile'
import Form from './containers/customer/form/Form'
import Checkout from './containers/customer/payment/Checkout'
import Customer from './containers/customer/layouts/Customer.js'

import SignUpAdmin from './containers/admin/SignUpAdmin'
import SignInAdmin from './containers/admin/SignInAdmin'

import customerSignup from './containers/customer/customersignup'
import customerSignin from './containers/customer/customersignin'

import Admin from './containers/admin/layouts/Admin.js'
import Pharmacy from './containers/pharmacy/layouts/Pharmacy'
import PrivateRoute from './components/HOC/privateRoute';



function App() {
  return (
    <div className="App">
       <Router>
        <Switch>
          <Route path="/" exact component={Index} />
          <Route path="/Signin" component={Signin} />
          <Route path="/Signup" component={Signup} />
          <Route path="/SignupUser" component={SignUpUser} />
          <Route path="/Customer" component={Customer} />
          <Route path="/Profile" component={Profile} />
          <Route path="/Form" component={Form} />
          <Route path="/Checkout" component={Checkout} />
           


          <PrivateRoute path="/admin" component={Admin} />
          <Route path="/adminsignup" component={SignUpAdmin} />
          <Route path="/adminsignin" component={SignInAdmin} />


          <Route path="/customersignup" component={customerSignup} />
          <Route path="/customersignin" component={customerSignin} />

          <Route path="/pharmacy" component={Pharmacy} />

        </Switch>
      </Router>
      
      
      
    </div>
  ); 
}

export default App;
