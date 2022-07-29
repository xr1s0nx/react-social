import React from "react";
import MyProfile from './MyProfile'
import storeContext from "../../storeContext";



const MyProfileContainer = (props) => {
   return (
      <storeContext.Consumer>
         {
            (store) => {
               debugger
               let propsData = store.getState().ProfilePage.myProfile[0];
               return (
                  <MyProfile name={propsData.name} about={propsData.aboutText} avatar={propsData.avatar}></MyProfile>
               )
            }
           
         }
      </storeContext.Consumer>
   );
};

export default MyProfileContainer;
