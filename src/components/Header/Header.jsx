import React from "react";
import classes from "./Header.module.css";
import profileImg from "../../img/avatar.jpg";
import sIcon from "../../img/searchIcon.png";
import arrow from "../../img/next.png";
import { NavLink } from "react-router-dom";

const Header = () => {
   return (
      <header className={classes.header}>
         <div className={`${classes.container} container`}>
            <a href="/#" className={classes.logoLink}>
               <img src="https://upload.wikimedia.org/wikipedia/commons/d/db/Zeronet_logo.png" alt="" className={classes.logoImg} />
            </a>
            <div className={classes.rightSide}>
               <NavLink to={"/Users"} className={classes.searchIcon}>
                  <img src={sIcon} alt="" />
               </NavLink>
               <NavLink to={'/Profile/My'} className={classes.profileBtn}>
                  <div className={classes.profileImgWrap}>
                     <img src={profileImg} alt="" className={classes.profileImg} />
                  </div>
                  <img src={arrow} alt="" className={classes.arrow} />
               </NavLink>
            </div>
         </div>
      </header>
   );
};

export default Header;
