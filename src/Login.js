import React,{Component} from 'react';
import {Redirect,Link} from 'react-router-dom';
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
//import {history} from history;
import { createBrowserHistory as history} from 'history';

import EmployeeDetails from './EmployeeDetails';
//import { Component } from 'react';

class Login extends React.Component{
    state = {
        username : "",
        password : ""

    }

    /*setUserName = (e)=>{
        this.state.username = e.target.value;
    }
    setPassword = (e)=>{
        this.state.password = e.target.value;
    }*/
    handleInputChange = (e) =>
    {
        const name = e.target.name;
        const value = e.target.value;
        this.setState(
            {
                [name]: value
            }
        )
    }
    onLogging = () => {
        var username = this.state.username;
        var password = this.state.password;
        if(username == '' && password == ''){
            alert('Pleaser Enter User name and Password before login.');
        }
        else if(username == ''){
            alert('Pleaser Enter User name before login.')
        }
        else if(password == ''){
            alert('Pleaser Enter Password before login.')
        }
        else if(username != 'test' || password != 'test'){
            alert('User name or password incorrect. Please enter valid user name and password to login.')
        }
        else if (username == 'test' && password == 'test'){
            alert('Login Success.');
            //this.props.history.push('/EmployeeDetails/');
            //this.props.history.push('/EmployeeDetails/');
            //history.push('/EmployeeDetails');
            return  <Link  to="/EmployeeDetails" />
            
        }
    }
    render()
    {
        return(
            <div className="center div">
                <h3>Login</h3>
                <div className="inline">
                    <div className="inline">
                        <label className="label inline">User Name</label>
                    </div>
                    <div className="inline">
                        <input className="textBox" placeholder="username" type="email" name="username" onChange={this.handleInputChange}></input>
                    </div>
                </div>
                <div>
                    <div className="inline">
                        <label className="label inline">Password</label>
                    </div>
                    <div className="inline">
                        <input className="textBox" placeholder="password" type="password" name="password" onChange={this.handleInputChange}></input>
                    </div>
                </div>
                <div>
                    <button className="btn" onClick={this.onLogging}>Login</button>
                </div>  
            </div>
            
        )
    }
}
export default Login;