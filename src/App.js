import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Index from './containers/mainLandingPage/Home'

import Admin from './containers/admin/layouts/Admin.js'
import SignInAdmin from './containers/admin/SignInAdmin'
import VerifyEmail from './containers/customer/VerifyEmail'
import VerifyEmailPharmacy from './containers/pharmacy/VerifyEmail'

import Customer from './containers/customer/layouts/Customer.js'
import CustomerSignup from './containers/customer/SignUpCustomer'
import CustomerSignin from './containers/customer/SignInCustomer'
import ForgotPassword from './containers/customer/password/ForgotPassword.js'
import PasswordReset from './containers/customer/password/ResetPasswordPage.js'

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
 

          <PrivateRoute path="/admin" component={Admin} />
          <Route path="/adminsignin" component={SignInAdmin} />

          <PrivateRoute1 path="/Customer" component={Customer} />
          <Route path="/customersignup" component={CustomerSignup} />
          <Route path="/customersignin" component={CustomerSignin} />
          <Route path="/ForgotPassword" component={ForgotPassword} />
          <Route path='/ResetPassword/:resetlink' component={PasswordReset} />
          <Route path="/VerifyEmail/:token" component={VerifyEmail} />

          <PrivateRoute2 path="/pharmacy" component={Pharmacy} />
          <Route path="/pharmacysignup" component={SignUpPharmacy} />
          <Route path="/pharmacysignin" component={SignInPharmacy} />
          <Route path="/VerifyEmailPharmacy/:token" component={VerifyEmailPharmacy} />

        </Switch>
      </Router>
    </div>
  ); 
}

export default App;
