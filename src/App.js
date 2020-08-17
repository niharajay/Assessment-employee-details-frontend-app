import React from 'react';
import logo from './logo.svg';
import './App.css';
import './Login';
import Login from './Login';
import './Login.css'
import Routes from './Routes'
//import { Router, Switch, Route } from "react-router-dom";
import { BrowserRouter as Router } from 'react-router-dom';
import EmployeeDetails from './EmployeeDetails';

function App() {
  return (
    /*<div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>*/
    
    <div>
      <Router>
				<Routes />
			</Router>
      <Login></Login>
    </div>
  );
}

export default App;
