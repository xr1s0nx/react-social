import React from "react";
import Friend from "./Friend/Friend";
import storeContext from "../../../../storeContext";
import FriendsPage from "./FriendsPage";

const FriendsPageContainer = (props) => {
   
    return (
        <storeContext.Consumer>
            {
                (store) => {
                    let FriendsList = [
                        store.getState().FriendsPage.AllFriends.map((friend) => {
                            return (
                                <Friend name={friend.name} id={friend.id} avatar={friend.avatar}/>
                            )
                        })
                    ]
                    return (
                        <FriendsPage FriendsList={FriendsList}></FriendsPage>
                    )
                }
            }
        </storeContext.Consumer>
    )
}

export default FriendsPageContainer;