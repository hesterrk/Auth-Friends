import React from 'react';
import { Route, Switch, Link } from "react-router-dom";
import './App.css';
import Login from './components/Login';
import FriendsList from './components/FriendsList';
import PrivateRoute from './components/utils/PrivateRoute';

function App() {
  return (
    <div className="App">
      <Link to="/login">Login</Link>
      <Link to="/protected">Friends List: protected page</Link>
      <Switch>
      <PrivateRoute exact path to="/friendslist" component={FriendsList}/>
      <Route path to="/login" component={Login}/>
      <Route component={Login}/>
      </Switch>
      
    </div>
  );
}

export default App;