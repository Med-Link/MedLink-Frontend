// import { Container } from '@material-ui/core';
import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
// import './App.css';
import Index from './containers/mainLandingPage/Home'

import Signin from './containers/signin/SignIn'
import Signup from './containers/signup/SignUp'
import SignUpUser from './containers/signup/SignUpUser'
import ResponsiveDrawer from './containers/customerHome/CustomerHome'
import Header from './containers/demo/Demo'
import ButtonBases from './containers/buttons/Buttons'


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
          <Route path="/Demo" component={Header} />
          <Route path="/Buttons" component={ButtonBases} />
          


          <Route path="/Admin" component={Admin} />
        </Switch>
      </Router>
      
      
      
    </div>
  );
}

export default App;
