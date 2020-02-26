import React, { useState, useEffect } from 'react'
import { axiosWithAuth } from './utils/axiosWithAuth';
import Friend from './Friend';
import { useHistory } from 'react-router-dom';



export default function FriendsList() {

    const [friends, setFriends] = useState([]);
    const history = useHistory();

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

    const onLogout = (e) => {
        localStorage.removeItem('token')
        history.push('/login')
    
    };
    


    return (
        <div>
         <button onClick={onLogout}>Log Out </button>


        {friends.map(fr => {
            return (
                <Friend friend={fr} key={fr.id} setFriends={setFriends}/>
            )
        })}


        </div>
    )
}