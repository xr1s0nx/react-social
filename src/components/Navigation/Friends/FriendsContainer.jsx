import React from "react";
import Friend from "./BestFriend/BestFriend";
import Friends from "./Friends";
import storeContext from "../../../storeContext";

const FriendsContainer = (props) => {

   return (
      <storeContext.Consumer>
         {
            (store) => {
               debugger
               let FriendsList = [
                  store.getState().FriendsPage.BestFriends.map((friend) => {
                     return <Friend link={"/Profile/" + friend.id} FriendName={friend.name} friendAvatar={friend.avatar} />;
                  }),
               ];
               return (
                  <Friends FriendsList={FriendsList}></Friends>
               )
            }
         }
      </storeContext.Consumer>
   );
};

export default FriendsContainer;
