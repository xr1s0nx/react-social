import React from "react";
import { NavLink } from "react-router-dom";
import Friend from "./BestFriend/BestFriend";
import classes from "./Friends.module.css";

const Friends = (props) => {
   let FriendsList = [
      props.FriendsData.map((friend) => {
         return <Friend link={"/Profile/" + friend.id} FriendName={friend.name} friendAvatar={friend.avatar} />;
      }),
   ];

   return (
      <div className={classes.friends}>
         <div className={classes.FriendsTop}>
            <p className={classes.blockTitle}>Friends</p>
            <NavLink to="/Friends" className={classes.linkFriendsPage}>All friends</NavLink>
         </div>
         <div className={classes.bestFriends}>{FriendsList}</div>
      </div>
   );
};

export default Friends;
