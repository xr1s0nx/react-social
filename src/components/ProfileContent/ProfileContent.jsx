import React from "react";
import MyProfileContainer from "../MyProfile/MyProfileContainer";
import PostsContainer from "../Posts/PostsContainer";

const ProfileContent = (props) => {
   return (
      <div className="ProfileContent">
         <MyProfileContainer/>
         <PostsContainer/>
      </div>
   );
};

export default ProfileContent;
