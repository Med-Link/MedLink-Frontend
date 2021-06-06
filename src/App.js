import { Container } from '@material-ui/core';
import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import Home from './containers/Home'
import Signin from './containers/Signin'
import Signup from './containers/Signup'
import Button from '@material-ui/core/Button'




function App() {
  return (
    <div className="App">
      
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/Signin" component={Signin} />
          <Route path="/Signup" component={Signup} />

        </Switch>
      </Router>

      
      
    </div>
  );
}

export default App;
