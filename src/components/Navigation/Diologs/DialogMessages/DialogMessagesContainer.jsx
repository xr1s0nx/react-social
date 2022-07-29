import React from "react";
import { sendMessageActionCreator, updateMessageTextActionCreator } from "../../../../redux/dialogReducer";
import DialogMessages from "./DialogMessages";
import Message from "./Message/Message";


const DialogMessagesContainer = (props) => {
   
   const sendMessage = () => {
      props.store.dispatch(sendMessageActionCreator())
   }

   let onChange = (e) => {
      let text = e.target.value;
      props.store.dispatch(updateMessageTextActionCreator(text))
   }

   let keyDown = (e) => {
      if(e.code === 'Enter') {
         sendMessage();
         e.preventDefault();
      }
   }

   let Messages = [
      props.store.getState().DialogPage.MessagesData.map((messageData) => (
         <Message name={messageData.name} avatar={messageData.avatar} textMsg={messageData.textMsg} my={messageData.my} />
      )),
   ];


   return (
      <DialogMessages MessagesText={props.store.getState().DialogPage.NowMessage} Messages={Messages} onChange={onChange} sendMessage={sendMessage} keyDown={keyDown}/>
   );
};

export default DialogMessagesContainer;
