import React from "react";
import Friend from "./Friend/Friend";
import FriendsPage from "./FriendsPage";
import { connect } from "react-redux";





let mapSateToProps = (state) => {
    let FriendsList = [
        state.FriendsPage.AllFriends.map((friend) => {
            return (
                <Friend key={friend.id} name={friend.name} id={friend.id} avatar={friend.avatar}/>
            )
        })
    ]

    return {
        FriendsList: FriendsList
    }
}

const FriendsPageContainer = connect(mapSateToProps, null)(FriendsPage)

export default FriendsPageContainer;