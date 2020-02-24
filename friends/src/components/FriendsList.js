import React, { useState, useEffect } from 'react'
import FriendsForm from './FriendsForm';
import { Route, Link } from 'react-router-dom';
import { axiosWithAuth } from './utils/axiosWithAuth';


export default function FriendsList() {

// create a list of your friends that you get from the API
    const [friends, setFriends] = useState([]);

    useEffect(() => {
        getFriendData();
    }, []);

    function getFriendData() {
        axiosWithAuth().get('/api/friends')
        .then(res => {
            console.log(res);
            setFriends(res.data);
        })
        .catch(err=> console.log(err));

    };


    return (
        <div>
            {/* //map and display friends here */}

        {friends.map}


        <Link to="/friendsform"> Add New Friend Here! </Link>
        <Route path to="/friendsform" component={FriendsForm}/>
        </div>
    )
}