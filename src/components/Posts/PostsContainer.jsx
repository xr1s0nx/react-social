import React from "react";
import Post from "./Post/Post";
import Posts from "./Posts";
import { connect } from "react-redux";

let mapStateToProps = (state) => {
   let PostsData = [
      state.ProfilePage.PostsData.map((post) => {
         return <Post key={post.id} avatar={post.avatar} id={post.id} postText={post.postText} likeCount={post.likeCount} date={post.date} />;
      }),
   ];
   return {
      posts: PostsData,
   }
}

const PostsContainer = connect(mapStateToProps, null)(Posts);

export default PostsContainer;
