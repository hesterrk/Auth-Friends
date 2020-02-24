import React, { useState } from 'react';
import axios from 'axios'
import { useHistory } from "react-router-dom";


export default function Login ()  {


    
const [credentials, setCredentials] = useState({});
const [isLoading, setIsLoading] = useState(false);
const history = useHistory();

        
        
        
const handleChange = e => {
    setCredentials({
     ...credentials,
    [e.target.name]: e.target.value
 })

}
        
       
const login = e => {
e.preventDefault();
axios.post('http://localhost:5000/api/login', credentials)
    .then(res => {
        localStorage.setItem('token', res.data.payload)
        console.log(res);
        history.push('/friendslist');
        
    })
    .catch(err => console.log(err))
            
};
        
        
 return (
    
    <div>
        <form onSubmit={login}>
             <input
                type="text"
                name="username"
                placeholder="Enter Username"
                value={credentials.username}
                onChange={handleChange}
             />
            <input
                type="password"
                name="password"
                placeholder="Enter Password"
                value={credentials.password}
                onChange={handleChange}
            />
            <button>Log in</button>
        </form>
    </div>
    )
        
        
    
}