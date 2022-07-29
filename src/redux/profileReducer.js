import avatar from "../img/avatar.jpg";

const ADD_POST = 'ADD_POST';
const CHANGE_POST_TEXT = 'CHANGE_POST_TEXT';

let initialState = {
    myProfile: [
        {
            id: 0, name: 'xr1s0nx', aboutText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", avatar: avatar
        }
    ],
    PostsData: [
    ],
    PostNewText: ''
};

export const profileReducer = (state = initialState, action) => {

    switch (action.type) {

        case ADD_POST:
            if (state.PostNewText !== '') {
                let date = new Date();
                let outputDate = String(date.getDate()).padStart(2, '0') + '.' + String(date.getMonth() + 1).padStart(2, '0') + '.' + date.getFullYear();
                let newId = state.PostsData.length + 1;

                let newPost = {
                    id: newId,
                    postText: state.PostNewText,
                    likeCount: 0,
                    avatar: avatar,
                    date: outputDate
                };

                state.PostsData.push(newPost);
                state.PostNewText = '';

            }
            return state

        case CHANGE_POST_TEXT:
            state.PostNewText = action.PostMessage;
            return state

        default:
            return state
    }

}

export const updateNewPostTextActionCreator = (text) => ({ type: CHANGE_POST_TEXT, PostMessage: text });

export const addPostActionCreator = () => ({ type: ADD_POST });

