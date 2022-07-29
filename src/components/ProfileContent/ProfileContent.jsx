import React from "react";
import MyProfile from "../MyProfile/MyProfile";
import PostsContainer from "../Posts/PostsContainer";

const ProfileContent = (props) => {
   return (
      <div className="ProfileContent">
         
         <MyProfile/>
         <PostsContainer/>
      </div>
   );
};

export default ProfileContent;
