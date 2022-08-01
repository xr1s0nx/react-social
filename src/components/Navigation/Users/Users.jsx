import React from "react";
import classes from "./Users.module.css";
import { NavLink } from "react-router-dom";
import sIcon from "../../../img/searchIcon.png";
import defaultAvatar from '../../../img/defaultAvatar.png';
import * as axios from "axios";

const Users = (props) => {
   if (props.users.length === 0) {
      axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {props.setUsers(response.data.items)})
   }

   return (
      <div className="UsersPage">
         <div className={classes.inpBlock}>
            <img src={sIcon} alt="" />
            <input type="text" className={classes.searchInp} placeholder="Search friend..." />
         </div>
         {props.users.map((user) => (
            <div className={classes.userBlock}>
               <div className={classes.lSide}>
                  <NavLink to={"/Profile/" + user.id} className={classes.avatarBlock}>
                     <img src={user.photos.small !== null ? user.photo.samll : defaultAvatar} alt="" />
                  </NavLink>
                  <div className={classes.userinfo}>
                     <p className={classes.userName}>{user.name}</p>
                     <p className={classes.userAbout}>{'user.about'}</p>
                  </div>
               </div>
               {user.followed ? (
                  <button
                     onClick={() => {
                        props.unfollow(user.id);
                     }}
                     className={classes.followBtn}
                  >
                     Unfollow
                  </button>
               ) : (
                  <button
                     onClick={() => {
                        props.follow(user.id);
                     }}
                     className={classes.followBtn}
                  >
                     Follow
                  </button>
               )}
            </div>
         ))}
      </div>
   );
};

export default Users;
