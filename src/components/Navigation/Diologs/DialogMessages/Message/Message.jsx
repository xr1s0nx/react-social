import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./Message.module.css";



const Message = (props) => {

    let MsgClass = classes.messageBlock;
    if(props.my) {
        MsgClass = `${classes.messageBlock} ${classes.my}`
    }

   return (
      <div className={MsgClass}>
         <NavLink to="/Profile/My" className={classes.avatarblock}>
            <img src={props.avatar} alt="" />
         </NavLink>
         <div className={classes.info}>
            <p className={classes.name}>{props.name}</p>
            <p className={classes.message}>
               {props.textMsg}
            </p>
         </div>
      </div>
   );
};

export default Message;
