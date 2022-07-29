import React from "react";
import { addPostActionCreator, updateNewPostTextActionCreator } from "../../../redux/profileReducer";
import AddPost from "./AddPost";

const AddPostContainer = (props) => {


   const addPost = () => {
      let action = addPostActionCreator();
      props.store.dispatch(action);
   }

   const onChange = (e) => {
      let text = e.target.value;
      props.store.dispatch(updateNewPostTextActionCreator(text));
   }

   const onKeyDown = (e) => {
      if(e.code === 'Enter') {
         addPost();
         e.preventDefault();
      }
   }



   return (
      <AddPost newText={props.store.getState().ProfilePage.PostNewText} onKeyDown={onKeyDown} addPost={addPost} onChange={onChange}/>
   );
};

export default AddPostContainer;
