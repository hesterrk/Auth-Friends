import React from 'react';
import { useParams } from 'react-router-dom';
import { axiosWithAuth } from './utils/axiosWithAuth';

export default function UpdateFriend(props) {

const { id } = useParams();

const friendToUpdate = props.friendupdate.find(fr => fr.id.toString() === id);
console.log(friendToUpdate);

//PASS DOWN SET FRIENDS STATE SETTER FUNCTION FROM FRIENDS LIST SO MY EDITED FRIEND GETS UPDATED--> REFLECTS CHANGES ON THE ui of that component (friends list component --> pass down that prop to Friends then to this one)

//put request with auth 

return (
    
    <div>
        <form>
             <input
                type="text"
                name="name"
                placeholder="Enter name"
                // value={}
                // onChange={}
             />
            <input
                type="text"
                name="age"
                placeholder="Enter age"
                // value={}
                // onChange={}
            />
             <input
                type="text"
                name="email"
                placeholder="Enter email"
                // value={}
                // onChange={}
            />
            <button type="submit"></button>
        </form>
    </div>
    )

}

