import { combineReducers, createStore } from "redux";
import { dialogReducer } from "./dialogReducer";
import { friendsReducer } from "./friendsReducer";
import { profileReducer } from "./profileReducer";
import { usersReducer } from "./usersReducer";

const reducers = combineReducers({
    DialogPage: dialogReducer,
    ProfilePage: profileReducer,
    FriendsPage: friendsReducer,
    UsersPage: usersReducer
});

const store = createStore(reducers);



export default store;