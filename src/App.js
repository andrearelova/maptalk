import React, { Component } from 'react';
import './App.css';
import Landing from './Landing.js';
import Finish from './Finish.js'
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Link
} from "react-router-dom";
import cookie from "react-cookies";

function App() {
  return (
      <div>
        <Router>
          <Switch>
            <Route exact path="/" component={Landing}/>
            <Route path="/finish" component={Finish}/>
          </Switch>
        </Router>
      </div>
  );
}

export default App;
