import React, { useState, useEffect } from 'react'
import { axiosWithAuth } from './utils/axiosWithAuth';
import Friend from './Friend';



export default function FriendsList() {

    const [friends, setFriends] = useState([]);

    useEffect(() => {
        getFriendData();
    }, []);

    function getFriendData() {
        axiosWithAuth().get('/api/friends')
        .then(res => {
            console.log(res);
            setFriends(res.data);
            console.log(res.data)
        })
        .catch(err=> console.log(err));

    };


    return (
        <div>

        {friends.map(fr => {
            return (
                <Friend friend={fr} key={fr.id} setFriends={setFriends}/>
            )
        })}



        </div>
    )
}