import React from "react";
import { sendMessageActionCreator, updateMessageTextActionCreator } from "../../../../redux/dialogReducer";
import DialogMessages from "./DialogMessages";
import Message from "./Message/Message";
import { connect } from "react-redux";


let mapDispatchToProps = (dispatch) => {

   const sendMessage = () => {
      dispatch(sendMessageActionCreator());
   };

   const onChange = (e) => {
      let text = e.target.value;
      dispatch(updateMessageTextActionCreator(text));
   };

   const keyDown = (e) => {
      if (e.code === "Enter") {
         sendMessage();
         e.preventDefault();
      }
   };

   return {
      keyDown: keyDown,
      onChange: onChange,
      sendMessage: sendMessage,
   };
};

let mapStateToProps = (state) => {

   let Messages = [
      state.DialogPage.MessagesData.map((messageData) => (
         <Message key={messageData.msgNum} name={messageData.name} avatar={messageData.avatar} textMsg={messageData.textMsg} my={messageData.my} />
      )),
   ];

   let NowMessage = state.DialogPage.NowMessage;

   return {
      Messages: Messages,
      MessageText: NowMessage,
   };
};


const DialogMessagesContainer = connect(mapStateToProps, mapDispatchToProps)(DialogMessages);
export default DialogMessagesContainer;
