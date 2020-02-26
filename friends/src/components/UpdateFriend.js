import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { axiosWithAuth } from './utils/axiosWithAuth';

export default function UpdateFriend(props) {

const [updateFriend, setUpdateFriend] = useState(initialValues)
const { id } = useParams();
const history = useHistory();


// useEffect(() => {
// const friendToUpdate = props.friendupdate.find(fr => fr.id.toString() === id);
// console.log(friendToUpdate);
// }, [props.friendupdate, id]);


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
        history.push(`friendslist/${id}`)
    })
    .catch(err => console.log(err));
}



//PASS DOWN SET FRIENDS STATE SETTER FUNCTION FROM FRIENDS LIST SO MY EDITED FRIEND GETS UPDATED--> REFLECTS CHANGES ON THE ui of that component (friends list component --> pass down that prop to Friends then to this one)


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
            <button type="submit"></button>
        </form>
    </div>
    )

}


const initialValues = {
    name: '',
    age: '',
    email: ''

}