import React from 'react';
import { Route, Switch } from "react-router-dom";
import './App.css';
import Login from './components/Login';
import FriendsList from './components/FriendsList';
import PrivateRoute from './components/utils/PrivateRoute';

function App() {
  return (
    <div className="App">
      <Switch>
      <PrivateRoute exact path to="/friendslist" component={FriendsList}/>
      <Route path to="/login" component={Login}/>
      <Route component={Login}/>
      </Switch>
      
    </div>
  );
}

export default App;