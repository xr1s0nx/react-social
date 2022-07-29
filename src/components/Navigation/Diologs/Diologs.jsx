import React from "react";
import DialogProfile from "./DialogProfile/DialogProfile";
import classes from "./Diologs.module.css";
import DialogMessagesContainer from "./DialogMessages/DialogMessagesContainer";

const Diologs = (props) => {

   let DialogProfiles = [
      props.store.getState().DialogPage.DialogData.map(dialog => <DialogProfile name={dialog.name} lastMsg={dialog.lastMsg} avatar={dialog.avatar} classActive={dialog.classActive} dialogLink={"/Dialogs/" + dialog.id} />)];

   return (
      <div className={classes.DiologsContent}>
         <div className={classes.DialogsProfiles}>{DialogProfiles}</div>
         <div className={classes.DialogsMesseges}>
            <DialogMessagesContainer store={props.store}/>
         </div>
      </div>
   );
};

export default Diologs;
