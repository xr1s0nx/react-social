import avatar1 from '../img/avatar1.jpg';
import avatar2 from '../img/avatar2.jpg';
import avatar3 from '../img/avatar3.jpg';
import avatar4 from '../img/avatar4.jpg';
import avatar5 from '../img/avatar5.jpg';
import avatar6 from '../img/avatar6.jpg';

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';


let initialState = {
    users: [
        { id: 1, followed: true, name: 'Artem', avatar: avatar1, about: 'About Artem' },
        { id: 2, followed: false, name: 'Egor', avatar: avatar2, about: 'About Egor' },
        { id: 3, followed: true, name: 'Dima', avatar: avatar3, about: 'About Dima' },
        { id: 4, followed: true, name: 'Roman', avatar: avatar4, about: 'About Roman' },
        { id: 5, followed: true, name: 'Maria', avatar: avatar5, about: 'About Maria' },
        { id: 6, followed: true, name: 'Sergey', avatar: avatar6, about: 'About Sergey' },
    ],
};



export const usersReducer = (state = initialState, action) => {

    window.users = state.users;


    switch (action.type) {
        case FOLLOW:
            return {
                ...state,

                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return {
                            ...user,
                            followed: true,
                        }
                    } else {
                        return {
                            ...user
                        }
                    }
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return { ...user, followed: false }
                    } else {
                        return {
                            ...user
                        }
                    }
                })
            }
        case SET_USERS:
            return {
                ...state,
                users: [...state.users, ...action.users]
            }
        default:
            return state
    }

}



export const followAC = (userId) => ({ type: FOLLOW, userId });
export const unfollowAC = (userId) => ({ type: UNFOLLOW, userId });
export const setUsers = (users) => ({ type: SET_USERS, users });

