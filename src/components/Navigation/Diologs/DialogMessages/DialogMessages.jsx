import React from "react";
import classes from "./DialogMessages.module.css";


const DialogMessages = (props) => {
   return (
      <div className={classes.messages}>
         <div className={classes.messagesBlock}>{props.Messages}</div>
         <div className={classes.messageInputBlock}>
            <textarea value={props.MessageText} onChange={props.onChange} onKeyDown={props.keyDown} type="text" className={classes.input} placeholder="Your message..." />
            <button onClick={props.sendMessage} className={classes.enterBtn}>Send</button>
         </div>
      </div>
   );
};

export default DialogMessages;
