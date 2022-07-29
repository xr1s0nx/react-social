import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./Friends.module.css";

const Friends = (props) => {

   return (
      <div className={classes.friends}>
         <div className={classes.FriendsTop}>
            <p className={classes.blockTitle}>Friends</p>
            <NavLink to="/Friends" className={classes.linkFriendsPage}>All friends</NavLink>
         </div>
         <div className={classes.bestFriends}>{props.FriendsList}</div>
      </div>
   );
};

export default Friends;
