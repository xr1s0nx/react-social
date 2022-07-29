import { combineReducers, createStore } from "redux";
import { dialogReducer } from "./dialogReducer";
import { friendsReducer } from "./friendsReducer";
import { profileReducer } from "./profileReducer";

const reducers = combineReducers({
    DialogPage: dialogReducer,
    ProfilePage: profileReducer,
    FriendsPage: friendsReducer
});

const store = createStore(reducers);



export default store;