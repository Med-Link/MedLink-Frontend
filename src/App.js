// import { Container } from '@material-ui/core';
import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
// import './App.css';
import Index from './containers/mainLandingPage/Home'

import Signin from './containers/signin/SignIn'
import Signup from './containers/signup/SignUp'
import SignUpUser from './containers/signup/SignUpUser'
import ResponsiveDrawer from './containers/customerHome/CustomerHome'




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

        </Switch>
      </Router>
      
      
      
    </div>
  );
}

export default App;
