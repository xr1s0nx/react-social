import React from "react";
import Post from "./Post/Post";
import Posts from "./Posts";


const PostsContainer = (props) => {


   let PostsData = [
      props.store.getState().ProfilePage.PostsData.map((post) => {
         return <Post avatar={post.avatar} id={post.id} postText={post.postText} likeCount={post.likeCount} date={post.date}/>;
      }),
   ];

   return (
      <Posts posts={PostsData} store={props.store}/>
   );
};

export default PostsContainer;
