import React from "react";
import avatar from "../../img/avatar.jpg";
import setPhotoIcon from "../../img/setPhoto.png";
import bannerImg from '../../img/banner-img.jpg'

import classes from './MyProfile.module.css'


const MyProfile = (props) => {
   return (
      <div className="myProfileBlock">
         <div className={classes.bannerBlock}>
            <img src={bannerImg} alt="" className={classes.profileBg} />
            <div className={classes.hoverBg}></div>
         </div>
         <div className={classes.profile}>
            <div className={classes.avatarBlock}>
               <div className={classes.avatarFrame}>
                  <img src={avatar} alt="" className={classes.avatarImg} />
               </div>
               <div className={classes.borderAvatar}></div>
               <div className={classes.setPhoto}>
                  <img src={setPhotoIcon} alt="" className={classes.icon} />
               </div>
            </div>
            <div className={classes.profileDescr}>
               <div className={classes.nickWrap}>
                  <p className={classes.nickname}>{props.name}</p>
               </div>
               <p className={classes.about}>
                 {props.about}
               </p>
            </div>
         </div>
      </div>
   );
};

export default MyProfile;
