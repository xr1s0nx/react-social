import React from "react";
import { sendMessageActionCreator, updateMessageTextActionCreator } from "../../../../redux/dialogReducer";
import DialogMessages from "./DialogMessages";
import Message from "./Message/Message";
import storeContext from "../../../../storeContext";

const DialogMessagesContainer = (props) => {
  

   return (
   <storeContext.Consumer>
      {
         (store) => {
            const sendMessage = () => {
               store.dispatch(sendMessageActionCreator());
            };
         
            let onChange = (e) => {
               let text = e.target.value;
               store.dispatch(updateMessageTextActionCreator(text));
            };
         
            let keyDown = (e) => {
               if (e.code === "Enter") {
                  sendMessage();
                  e.preventDefault();
               }
            };
         
            let Messages = [
               store
                  .getState()
                  .DialogPage.MessagesData.map((messageData) => (
                     <Message name={messageData.name} avatar={messageData.avatar} textMsg={messageData.textMsg} my={messageData.my} />
                  )),
            ];
            let messagesData = store.getState().DialogPage;
            return (
               <DialogMessages MessageText={messagesData.NowMessage}></DialogMessages>
            )
         }
      }
   </storeContext.Consumer>
   )
};

export default DialogMessagesContainer;
