const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_PAGES_COUNT = 'SET_PAGES_COUNT';


let initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 21,
    currentPage: 2
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
                users: [...action.users]
            }
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.page
            }
        case SET_PAGES_COUNT:
            return {
                ...state,
                totalUsersCount: action.count
            }
        default:
            return state
    }

}



export const followAC = (userId) => ({ type: FOLLOW, userId });
export const unfollowAC = (userId) => ({ type: UNFOLLOW, userId });
export const setUsers = (users) => ({ type: SET_USERS, users });
export const setCurrentPage = (page) => ({ type: SET_CURRENT_PAGE, page });
export const setPagesCount = (count) => ({ type: SET_PAGES_COUNT, count });

