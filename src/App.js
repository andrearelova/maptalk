import React from 'react';
import './App.css';
import Landing from './Landing.js';
import Finish from './Finish.js'
import {
    BrowserRouter as Router,
    Route,
    Switch
} from "react-router-dom";

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
