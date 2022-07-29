import React from "react";
import classes from "./DialogProfile.module.css";
import { NavLink } from "react-router-dom";


const DialogProfile = (props) => {
    
    let NavClass = classes.Profile;
    if(props.classActive) {
        NavClass = classes.Profile + ' ' + classes.active;
    }
   return (
      <NavLink to={props.dialogLink} className={NavClass}>
         <NavLink to="/Profile" className={classes.ProfileTo}>
            <img src={props.avatar} alt="" />
         </NavLink>
         <p></p>
         <div className={classes.ProfileInfo}>
            <p className={classes.ProfileName}>{props.name}</p>
            <div className={classes.lastMsgWrap}>
               <p className={classes.LastMessage}><nobr>{props.lastMsg}</nobr></p>
            </div>
         </div>
      </NavLink>
   );
};

export default DialogProfile;
