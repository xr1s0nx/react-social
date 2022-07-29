import React from "react";
import classes from "./Navigation.module.css";
import { NavLink } from "react-router-dom";
import profileIcon from "../../img/profile.png";
import dialogsIcon from "../../img/dialogs.png";
import newsIcon from "../../img/news.png";
import settingsIcon from "../../img/settings.png";
import musicIcon from "../../img/music.png";
import Friends from "./Friends/Friends";

const Navigation = (props) => {


   return (
      <nav className={classes.navigation}>
         <NavLink to="/Profile/My" className={({ isActive }) => (isActive ? classes.item + " " + classes.active : classes.item)}>
            <img src={profileIcon} alt="" />
            Profile
         </NavLink>
         <NavLink to="/Dialogs" className={({ isActive }) => (isActive ? classes.item + " " + classes.active : classes.item)}>
            <img src={dialogsIcon} alt="" />
            Messages
         </NavLink>
         <NavLink to="/News" className={({ isActive }) => (isActive ? classes.item + " " + classes.active : classes.item)}>
            <img src={newsIcon} alt="" />
            News
         </NavLink>
         <NavLink to="/Music" className={({ isActive }) => (isActive ? classes.item + " " + classes.active : classes.item)}>
            <img src={musicIcon} alt="" />
            Music
         </NavLink>
         <NavLink to="/Settings" className={({ isActive }) => (isActive ? classes.item + " " + classes.active : classes.item)}>
            <img src={settingsIcon} alt="" />
            Settings
         </NavLink>
         <Friends FriendsData={props.Friends}/>
      </nav>
   );
};

export default Navigation;
