import React from "react";
import classes from './AddPost.module.css'

const AddPost = (props) => {

   return (
      <div className={classes.AddPostBlock}>
         <textarea onKeyDown={props.onKeyDown} onChange={props.onChange} className={classes.Area} placeholder="Your news..." value={props.newText}></textarea>
         <button onClick={props.addPost} className={classes.sendPost}>Send</button>
      </div>
   );
};

export default AddPost;
