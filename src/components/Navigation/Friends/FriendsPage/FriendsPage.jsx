import React from "react";
import classes from './FriendsPage.module.css'

const FriendsPage = (props) => {
    return (
        <div className={classes.friends}>
            {props.FriendsList}
        </div>
    )
}

export default FriendsPage;