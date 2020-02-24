import React from 'react'
import { axiosWithAuth } from './utils/axiosWithAuth';
import {  useHistory } from 'react-router-dom';
import UpdateFriend from './UpdateFriend';
import PrivateRoute from './utils/PrivateRoute';


export default function Friend(props) {

const history = useHistory();


//this has got access to props passe from FL: props.friend (contains each person)
const changeFriend = e => {
        e.preventDefault();
//     axiosWithAuth().put(`/api/friends/${props.friend.id}`, props.friend)
//     .then(res => {
//         console.log(res, 'updated')
       history.push(`/update-friend/${props.friend.id}`)
  
//     })
//     .catch(err => console.log(err));

}



const deleteFriend = () => {
    axiosWithAuth().delete(`/api/friends/${props.friend.id}`)
    .then(res => {
        console.log(res, 'deleted')
        //refreshes page after i delete each friend 
        history.go(0)
        
       
    })
    .catch(err => console.log(err));
}




    return (
        <div>
                <div>
                <p>{props.friend.name}</p>
                <p>{props.friend.age}</p>
                <p>{props.friend.email}</p>
                <button onClick={deleteFriend}> Delete Friend! </button>
                <button onClick={changeFriend}>Edit</button>
                </div>

        
        <PrivateRoute path="/update-friend/:id" 
        render={props => <UpdateFriend {...props} friendupdate={props.friend}/>} />

        </div>

    );

}