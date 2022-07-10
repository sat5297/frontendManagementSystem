import './App.css';
import React, { useState } from 'react';
import reactRouterDom from 'react-router-dom';
import Header from './Header';
import Employee from './Employee';
import Manager from './Manager';
import ManagerLogin from './managerLogin';
import ViewEmployeeInfo from './viewEmployeeInfo';
import ViewPersonalInfo from './viewPersonalInfo';
import CreateEmployee from './createEmployee';
import AllEmployee from './AllEmployee';
// import Leave from './Leave';
import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'

function App({props}) {
    return (
      <div>
      <h1 style={{textAlign:"center"}}>Employee Management System</h1>
          <div className="App">
            <Switch>
              <Route exact path='/allEmployee'>
                <AllEmployee/>
              </Route>
              <Route exact path='/employee'>
                <Employee/> 
              </Route>
              {/* <Route exact path='/employee/leave'>
                <Leave/> 
              </Route> */}
              {/* <Route exact path='/manager/viewEmployee'>
                <ManagerLogin/>
                <ViewEmployeeInfo props={props}/>
              </Route>
              <Route exact path='/manager/viewInfo'>
                <ManagerLogin/>
                <ViewPersonalInfo props={props}/>
              </Route>
              <Route exact path='/manager/addEmployee'>
                <ManagerLogin/>
                <CreateEmployee props={props}/>
              </Route> */}
              <Route exact path='/manager'>
                <Manager/>
              </Route>
              <Route exact path='/'>
                <Header/>
              </Route>
            </Switch>
          </div>
        </div>
  );
}

export default App;