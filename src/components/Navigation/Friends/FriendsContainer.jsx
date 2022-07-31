import React from "react";
import Friend from "./BestFriend/BestFriend";
import Friends from "./Friends";
import { connect } from "react-redux";

let mapStateToProps = (state) => {
   let FriendsList = [
      state.FriendsPage.BestFriends.map((friend) => {
         return <Friend key={friend.id} link={"/Profile/" + friend.id} FriendName={friend.name} friendAvatar={friend.avatar} />;
      }),
   ];
   return {
      FriendsList: FriendsList ,
   };
};

const FriendsContainer = connect(mapStateToProps, null)(Friends);

export default FriendsContainer;
