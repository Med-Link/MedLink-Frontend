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
<<<<<<< HEAD
import Form from './containers/customer/form/Form'

=======
import SignUpAdmin from './containers/admin/SignUpAdmin'
>>>>>>> 2bd93050b4e9d3a6cfe288d2582b2c50455e6de0

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
          <Route path="/Form" component={Form} />
           


          <Route path="/Admin" component={Admin} />
          <Route path="/register" component={SignUpAdmin} />
        </Switch>
      </Router>
      
      
      
    </div>
  );
}

export default App;
