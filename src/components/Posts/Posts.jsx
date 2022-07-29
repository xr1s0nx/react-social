import React from "react";
import AddPostContainer from "./AddPost/AddPostContainer";

import classes from './Posts.module.css'

const Posts = (props) => {


   return (
      <div className="posts">
         <AddPostContainer store={props.store}/>
         <div className={classes.myPosts}>{props.posts}</div>
      </div>
   );
};

export default Posts;
