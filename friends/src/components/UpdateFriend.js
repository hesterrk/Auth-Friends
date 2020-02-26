import React, { useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { axiosWithAuth } from './utils/axiosWithAuth';

export default function UpdateFriend() {

const [updateFriend, setUpdateFriend] = useState(initialValues)
const { id } = useParams();
const history = useHistory();



const handleChange = e => {
    setUpdateFriend({
        ...updateFriend, [e.target.name] : e.target.value

    })
}

function handleSubmit(e) {
    e.preventDefault();
    axiosWithAuth().put(`/api/friends/${id}`, updateFriend)
    .then(res => {
        console.log(res)
        // history.push(`friendslist/${id}`)
        history.push('/friendslist')

    })
    .catch(err => console.log(err));
}


return (
    
    <div>
        <form onSubmit={handleSubmit}>
             <input
                type="text"
                name="name"
                placeholder="Enter name"
                value={updateFriend.name}
                onChange={handleChange}
             />
            <input
                type="text"
                name="age"
                placeholder="Enter age"
                value={updateFriend.age}
                onChange={handleChange}
            />
             <input
                type="text"
                name="email"
                placeholder="Enter email"
                value={updateFriend.email}
                onChange={handleChange}
            />
            <button type="submit">Update ! </button>
        </form>
    </div>
    )

}


const initialValues = {
    name: '',
    age: '',
    email: ''

}