import React from 'react'
import { axiosWithAuth } from './utils/axiosWithAuth';
import { useHistory } from 'react-router-dom';


export default function Friend(props) {

const history = useHistory();


// const changeFriend = () => {
//     axiosWithAuth().put(`/api/friends/${props.friend.id}`, props.friend)
//     .then(res => {
//         console.log(res, 'updated')
  
//     })
//     .catch(err => console.log(err));

// }



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
                <button>Edit</button>
                </div>



        </div>

    );

}