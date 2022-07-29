import React from "react";
import Friend from "./Friend/Friend";
import classes from './FriendsPage.module.css'

const FriendsPage = (props) => {
    let FriendsList = [
        props.Friends.map((friend) => {
            return (
                <Friend name={friend.name} id={friend.id} avatar={friend.avatar}/>
            )
        })
    ]
    return (
        <div className={classes.friends}>
            {FriendsList}
        </div>
    )
}

export default FriendsPage;