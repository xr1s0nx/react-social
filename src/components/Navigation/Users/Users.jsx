import React from "react";
import classes from "./Users.module.css";
import { NavLink } from "react-router-dom";
import sIcon from "../../../img/searchIcon.png";
import defaultAvatar from "../../../img/defaultAvatar.png";
import * as axios from "axios";

class Users extends React.Component {
   componentDidMount() {
      axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then((response) => {
         this.props.setUsers(response.data.items);
         this.props.setPagesCount(response.data.totalCount);
      });
   }

   onPageChanges(page) {
      this.props.setCurrentPage(page);
      axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`).then((response) => {
         this.props.setUsers(response.data.items);
      });
   }
   render() {
      let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);

      let pages = [];
      for (let i = 1; i <= pagesCount; i++) {
         pages.push(i);
      }

      let curP = this.props.currentPage;
      let curPF = curP - 5 < 0 ? 0 : curP - 5;
      let curPL = curP + 5;
      let slicedPages = pages.slice(curPF, curPL);

      return (
         <div className={classes.UsersPage}>
            <p className={classes.AllUsersCount}>{`Users: ${this.props.totalUsersCount}`}</p>
            <div className={classes.inpBlock}>
               <img src={sIcon} alt="" />
               <input type="text" className={classes.searchInp} placeholder="Search friend..." />
            </div>
            {this.props.users.map((user) => (
               <div key={user.id} className={classes.userBlock}>
                  <div className={classes.lSide}>
                     <NavLink to={"/Profile/" + user.id} className={classes.avatarBlock}>
                        <img src={user.photos.small !== null ? user.photos.small : defaultAvatar} alt="" />
                     </NavLink>
                     <div className={classes.userinfo}>
                        <p className={classes.userName}>{user.name}</p>
                        <p className={classes.userAbout}>{user.status == null ? '' : user.status}</p>
                     </div>
                  </div>
                  {user.followed ? (
                     <button
                        onClick={() => {
                           this.props.unfollow(user.id);
                        }}
                        className={classes.followBtn}
                     >
                        Unfollow
                     </button>
                  ) : (
                     <button
                        onClick={() => {
                           this.props.follow(user.id);
                        }}
                        className={classes.followBtn}
                     >
                        Follow
                     </button>
                  )}
               </div>
            ))}
            <div className={classes.pagination}>
               {slicedPages.map((page) => {
                  return (
                     <button
                        onClick={(e) => {
                           this.onPageChanges(page);
                        }}
                        className={this.props.currentPage === page ? `${classes.pageBtn} ${classes.selected}` : `${classes.pageBtn}`}
                     >
                        {page}
                     </button>
                  );
               })}
            </div>
         </div>
      );
   }
}

export default Users;
