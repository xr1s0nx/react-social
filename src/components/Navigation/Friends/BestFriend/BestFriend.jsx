import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./BestFriend.module.css";

const BestFriend = (props) => {
   return (
      <NavLink to={props.link} className={classes.friend}>
         <div className={classes.imgBlock}>
            <img src={props.friendAvatar} alt="" />
         </div>
         <p className={classes.friendName}>{props.FriendName}</p>
      </NavLink>
   );
};

export default BestFriend;
