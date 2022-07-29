import avatar1 from '../img/avatar1.jpg';
import avatar2 from '../img/avatar2.jpg';
import avatar3 from '../img/avatar3.jpg';
import avatar4 from '../img/avatar4.jpg';
import avatar5 from '../img/avatar5.jpg';
import avatar6 from '../img/avatar6.jpg';

let initialState = {
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

export const friendsReducer = (state = initialState, action) => {
    return state
}