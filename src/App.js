import React from 'react'

import './App.css';

import {Navigation} from "./components/Navigation";
import {Login} from "./components/Login";
import {User} from "./components/User";
import {Department} from "./components/Department";
import {Event} from "./components/Event";
import { BrowserRouter, Route, Switch} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <div className="container">

      <h3 className="m-3 d-flex justify-content-center">Church Service Planner</h3>
      <h5 className="m-3 d-flex justify-content-center"> Plan your next Church event </h5>
        <Navigation />
      <Switch>
        <Route path='/' component={Login} exact />
        <Route path='/user' component={User} exact />
        <Route path='/department' component={Department} exact />
        <Route path='/event' component={Event} exact />
        
        
      </Switch>
      
    </div>
    </BrowserRouter>
    
  );
}

export default App;
