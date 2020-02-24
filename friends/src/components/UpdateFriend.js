import React from 'react';
import { useParams } from 'react-router-dom';

export default function UpdateFriend(props) {

const { id } = useParams();

const friendToUpdate = props.friendupdate.find(fr => fr.id.toString() === id);
console.log(friendToUpdate);



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

