import Users from "./Users";
import { connect } from "react-redux";
import { followAC, setUsers, unfollowAC } from "../../../redux/usersReducer";

let mapStateToProps = (state) => {
   return {
      users: state.UsersPage.users,
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
   };
};

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;
