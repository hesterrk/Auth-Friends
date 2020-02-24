import React, { useState } from 'react';
import { axiosWithAuth } from './utils/axiosWithAuth';
import { useHistory } from 'react-router-dom';




export default function FriendsForm () {

    const [addFriend, setAddFriend ] = useState(initialValues);
    const history = useHistory();

    const handleChange = e => {
        setAddFriend({
         ...addFriend,
        [e.target.name]: e.target.value
     })
    
    };

    const onSubmit = e => {
        e.preventDefault();
        axiosWithAuth().post('/api/friends', addFriend)
        .then(res => {
            console.log(res);
            history.push('/friendslist');
        })
        .catch(err => console.log(err));
  
        };



return (
    <div>
        <form onSubmit={onSubmit}>
             <input
                type="text"
                name="name"
                placeholder="Enter name"
                value={addFriend.name}
                onChange={handleChange}
             />
            <input
                type="text"
                name="age"
                placeholder="Enter age"
                value={addFriend.age}
                onChange={handleChange}
            />
              <input
                type="text"
                name="email"
                placeholder="Enter email"
                value={addFriend.email}
                onChange={handleChange}
            />
            <button>Add Friend</button>
        </form>

    

    </div>
)

}

const initialValues = {
    name: '',
    age: '',
    email: ''
}