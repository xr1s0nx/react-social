import React from "react";
import Post from "./Post/Post";
import Posts from "./Posts";
import storeContext from "../../storeContext";

const PostsContainer = () => {
   return (
      <storeContext.Consumer>
         {(store) => {
            let PostsData = [
              store.getState().ProfilePage.PostsData.map((post) => {
                  return <Post avatar={post.avatar} id={post.id} postText={post.postText} likeCount={post.likeCount} date={post.date} />;
               }),
            ];
            return <Posts posts={PostsData} store={store} />;
         }}
      </storeContext.Consumer>
   );
};

export default PostsContainer;
