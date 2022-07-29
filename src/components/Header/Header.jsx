import React from "react";
import classes from "./Header.module.css";
import profileImg from "../../img/avatar.jpg";
import arrow from "../../img/next.png";

const Header = () => {
   return (
      <header className={classes.header}>
         <div className={`${classes.container} container`}>
            <a href="/#" className={classes.logoLink}>
               <img src="https://upload.wikimedia.org/wikipedia/commons/d/db/Zeronet_logo.png" alt="" className={classes.logoImg} />
            </a>
            <a href="/#" className={classes.profileBtn}>
               <div className={classes.profileImgWrap}>
                  <img src={profileImg} alt="" className={classes.profileImg} />
               </div>
               <img src={arrow} alt="" className={classes.arrow} />
            </a>
         </div>
      </header>
   );
};

export default Header;
