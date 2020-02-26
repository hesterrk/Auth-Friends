import React from 'react'
import { axiosWithAuth } from './utils/axiosWithAuth';
import {  useHistory } from 'react-router-dom';
// import UpdateFriend from './UpdateFriend';
// import PrivateRoute from './utils/PrivateRoute';


export default function Friend(props) {

const history = useHistory();


//this has got access to props passe from FL: props.friend (contains each person)
const changeFriend = e => {
        e.preventDefault();
        history.push(`/update-friend/${props.friend.id}`)
  
}

const deleteFriend = () => {
    axiosWithAuth().delete(`/api/friends/${props.friend.id}`)
    .then(res => {
        console.log(res, 'deleted')
        //refreshes page after i delete each friend 
        history.push('/friendslist')
        props.setFriends(res.data);
        
       
    })
    .catch(err => console.log(err));
};



    return (
        <div>
                <div>
                <p>{props.friend.name}</p>
                <p>{props.friend.age}</p>
                <p>{props.friend.email}</p>
                <button onClick={deleteFriend}> Delete Friend! </button>
                <button onClick={changeFriend}>Edit</button>
                </div>

        
       

        </div>

    );

}