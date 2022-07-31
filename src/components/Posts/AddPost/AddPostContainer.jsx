import { addPostActionCreator, updateNewPostTextActionCreator } from "../../../redux/profileReducer";
import AddPost from "./AddPost";
import { connect } from "react-redux";


let mapStateToProps = (state) => {
   return {
      newText: state.ProfilePage.PostNewText,
   };
};

let mapDispatchToProps = (dispatch) => {
   const addPost = () => {
      let action = addPostActionCreator();
      dispatch(action);
   };

   const onChange = (e) => {
      let text = e.target.value;
      dispatch(updateNewPostTextActionCreator(text));
   };

   const onKeyDown = (e) => {
      if (e.code === "Enter") {
         addPost();
         e.preventDefault();
      }
   };

   return {
      addPost: addPost,
      onChange: onChange,
      onKeyDown: onKeyDown
   };
};

const AddPostContainer = connect(mapStateToProps, mapDispatchToProps)(AddPost);

export default AddPostContainer;
