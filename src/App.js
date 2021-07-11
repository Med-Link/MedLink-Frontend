// import { Container } from '@material-ui/core';
import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
// import './App.css';
import Index from './containers/mainLandingPage/Home'

import Signin from './containers/signin/SignIn'
import Signup from './containers/signup/SignUpPharmacy'
import SignUpUser from './containers/signup/SignUpUser'
import ResponsiveDrawer from './containers/customerHome/CustomerHome'
import Profile from './containers/customer/profile/Profile'

import SignUpAdmin from './containers/admin/SignUpAdmin'
import SignInAdmin from './containers/admin/SignInAdmin'

import customerSignup from './containers/customer/customersignup'
import customerSignin from './containers/customer/customersignin'

//import AdminDashboard from './containers/admin/AdminDashboard';
import Admin from './containers/admin/layouts/Admin.js'



function App() {
  return (
    <div className="App">
       <Router>
        <Switch>
          <Route path="/" exact component={Index} />
          <Route path="/Signin" component={Signin} />
          <Route path="/Signup" component={Signup} />
          <Route path="/SignupUser" component={SignUpUser} />
          <Route path="/CustomerHome" component={ResponsiveDrawer} />
          <Route path="/Profile" component={Profile} />
           


          <Route path="/Admin" component={Admin} />
          <Route path="/adminsignup" component={SignUpAdmin} />
          <Route path="/adminsignin" component={SignInAdmin} />


          <Route path="/customersignup" component={customerSignup} />
          <Route path="/customersignin" component={customerSignin} />

        </Switch>
      </Router>
      
      
      
    </div>
  );
}

export default App;
