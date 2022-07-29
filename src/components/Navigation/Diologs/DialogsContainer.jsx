import React from "react";
import DialogProfile from "./DialogProfile/DialogProfile";
import Dialogs from "./Diologs";
import storeContext from "../../../storeContext";

const DiologsContainer = () => {
   return (
      <storeContext.Consumer>
         {(store) => {
            let DialogProfiles = [
               store
                  .getState()
                  .DialogPage.DialogData.map((dialog) => (
                     <DialogProfile
                        name={dialog.name}
                        lastMsg={dialog.lastMsg}
                        avatar={dialog.avatar}
                        classActive={dialog.classActive}
                        dialogLink={"/Dialogs/" + dialog.id}
                     />
                  )),
            ];
            return <Dialogs DialogProfiles={DialogProfiles}></Dialogs>;
         }}
      </storeContext.Consumer>
   );
};

export default DiologsContainer;
