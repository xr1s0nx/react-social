import React from "react";
import classes from "./Diologs.module.css";
import DialogMessagesContainer from "./DialogMessages/DialogMessagesContainer";

const Diologs = (props) => {
   return (
      <div className={classes.DiologsContent}>
         <div className={classes.DialogsProfiles}>{props.DialogProfiles}</div>
         <div className={classes.DialogsMesseges}>
            <DialogMessagesContainer />
         </div>
      </div>
   );
};

export default Diologs;
