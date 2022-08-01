import Users from "./Users";
import { connect } from "react-redux";
import { followAC, setUsers, unfollowAC, setCurrentPage, setPagesCount } from "../../../redux/usersReducer";

let mapStateToProps = (state) => {
   return {
      users: state.UsersPage.users,
      pageSize: state.UsersPage.pageSize,
      totalUsersCount: state.UsersPage.totalUsersCount,
      currentPage: state.UsersPage.currentPage
   };
};

let mapDispatchToProps = (dispatch) => {
   return {
      follow: (userId) => {
         dispatch(followAC(userId));
      },
      unfollow: (userId) => {
         dispatch(unfollowAC(userId));
      },
      setUsers: (users) => {
         dispatch(setUsers(users));
      },
      setCurrentPage: (page) => {
         dispatch(setCurrentPage(page));
      },
      setPagesCount: (totalPages) => {
         dispatch(setPagesCount(totalPages));
      }
   };
};

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;
