import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router,Route,Redirect,Switch} from 'react-router-dom';
import './index.css';
import App from './App';
import Login from './Login'
import EmployeeDetails from './EmployeeDetails'
import Routes from './Routes'
//import * as serviceWorker from './serviceWorker';
/*function Routes(){
  return (
    <Router>
      <div>
        <Switch>
          <Route Path="/EmployeeDetails/" component={EmployeeDetails}></Route>
        </Switch>
      </div>
    </Router>
    )
}*/
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();
