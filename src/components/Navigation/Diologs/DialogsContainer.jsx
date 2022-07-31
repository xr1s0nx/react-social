import React from "react";
import DialogProfile from "./DialogProfile/DialogProfile";
import Dialogs from "./Diologs";
import { connect } from "react-redux";

let mapStateToProps = (state) => {
   let DialogProfiles = [
      state.DialogPage.DialogData.map((dialog) => (
         <DialogProfile
            key={dialog.id}
            name={dialog.name}
            lastMsg={dialog.lastMsg}
            avatar={dialog.avatar}
            classActive={dialog.classActive}
            dialogLink={"/Dialogs/" + dialog.id}
         />
      )),
   ];

   return {
      DialogProfiles: DialogProfiles,
   };
};

const DialogsContainer = connect(mapStateToProps, null)(Dialogs);

export default DialogsContainer;
