import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./Friend.module.css";
import moreSettingIcon from '../../../../../img/more.png'

const Friend = (props) => {
   return (
      <div className={classes.friendBlock}>
         <NavLink to={"/Profile/" + props.id} className={classes.ImgBlock}>
            <img src={props.avatar} alt="" />
         </NavLink>
         <div className={classes.friendInfo}>
            <p className={classes.friendName}>{props.name}</p>
            <NavLink to={"/Dialogs/" + props.id} className={classes.GoChat}>Send message</NavLink>
         </div>
         <button className={classes.settingsBtn}>
            <img src={moreSettingIcon} alt="" />
         </button>
      </div>
   );
};

export default Friend;
