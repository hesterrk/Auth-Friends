import React from 'react';
import { Route } from "react-router-dom";
import './App.css';
import Login from './components/Login';

function App() {
  return (
    <div className="App">
      <Route path to="/login">
          <Login/>
      </Route>
      
    </div>
  );
}

export default App;