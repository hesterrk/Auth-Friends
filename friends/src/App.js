import React from 'react';
import { Route, Switch, Link } from "react-router-dom";
import './App.css';
import Login from './components/Login';
import FriendsList from './components/FriendsList';
import PrivateRoute from './components/utils/PrivateRoute';
import FriendsForm from './components/FriendsForm';


function App() {
  return (


    <div className="App">
       <Link to="/login">Login</Link> 
       <br></br>
      <Link to="/friendslist">Friends List: protected page</Link> 
      <br>
      </br>
      <Link to="/friendsform">Friends form: new friend </Link> 
      
      <Switch>
      <PrivateRoute exact path="/friendslist" component={FriendsList}/>
      <PrivateRoute exact path="/friendsform" component={FriendsForm}/>

      <Route path="/login" component={Login}/>
      {/* <Route component={Login}/> */}
      </Switch>
      
    </div>
  );
}

export default App;