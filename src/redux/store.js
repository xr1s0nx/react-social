import avatar1 from '../img/avatar1.jpg';
import avatar2 from '../img/avatar2.jpg';
import avatar3 from '../img/avatar3.jpg';
import avatar4 from '../img/avatar4.jpg';
import avatar5 from '../img/avatar5.jpg';
import avatar6 from '../img/avatar6.jpg';
import avatar from "../img/avatar.jpg";
import avatarFriend from "../img/avatar1.jpg";
import { dialogReducer } from './dialogReducer';
import { profileReducer } from './profileReducer';
import { friendsReducer } from './friendsReducer';


let Store = {
    _State: {
        DialogPage: {
            DialogData: [
                {
                    id: 1,
                    name: "Artem",
                    lastMsg: "Все ок",
                    avatar: avatar1,
                    classActive: true,
                },
                {
                    id: 2,
                    name: "Egor",
                    lastMsg: "Нет",
                    avatar: avatar2,
                    classActive: false,
                },
                {
                    id: 3,
                    name: "Dima",
                    lastMsg: "Hello World",
                    avatar: avatar3,
                    classActive: false,
                },
                {
                    id: 4,
                    name: "Roman",
                    lastMsg: "Phonk",
                    avatar: avatar4,
                    classActive: false,
                },
                {
                    id: 5,
                    name: "Maria",
                    lastMsg: "Бушидо",
                    avatar: avatar5,
                    classActive: false,
                },
            ],
            MessagesData: [
                { name: "xr1s0nx", avatar: avatar, textMsg: "Как дела?", my: true },
                { name: "Artem", avatar: avatarFriend, textMsg: "Все хорошо", my: false },
            ],
            NowMessage: '',
        },

        ProfilePage: {
            myProfile: [
                {
                    id: 0, name: 'xr1s0nx', aboutText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", avatar: avatar
                }
            ],
            PostsData: [

            ],
            PostNewText: ''
        },

        FriendsPage: {
            AllFriends: [
                { id: 1, name: 'Artem', avatar: avatar1 },
                { id: 2, name: 'Egor', avatar: avatar2 },
                { id: 3, name: 'Dima', avatar: avatar3 },
                { id: 4, name: 'Roman', avatar: avatar4 },
                { id: 5, name: 'Maria', avatar: avatar5 },
                { id: 6, name: 'Sergey', avatar: avatar6 },
            ],

            BestFriends: [
                { id: 1, name: 'Artem', avatar: avatar1 },
                { id: 2, name: 'Egor', avatar: avatar2 },
                { id: 3, name: 'Dima', avatar: avatar3 }
            ],
        }
    },
    _rerender() {
        console.log('Changed');
    },
    getState() {
        return this._State;
    },

    subscribe(observer) {
        this._rerender = observer;
    },

    dispatch(action) {

        this._State.DialogPage = dialogReducer(this._State.DialogPage, action);
        this._State.ProfilePage = profileReducer(this._State.ProfilePage, action);
        this._State.FriendsPage = friendsReducer(this._State.FriendsPage, action);


        this._rerender(this._State);

    },


}






export default Store;