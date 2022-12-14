import avatar from "../img/avatar.jpg";
import avatar1 from '../img/avatar1.jpg';
import avatar2 from '../img/avatar2.jpg';
import avatar3 from '../img/avatar3.jpg';
import avatar4 from '../img/avatar4.jpg';
import avatar5 from '../img/avatar5.jpg';


const avatarFriend = avatar1;

const CHANGE_MESSAGE_TEXT = 'CHANGE_MESSAGE_TEXT';
const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
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
            lastMsg: "Да",
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
        { msgNum: 1, name: "xr1s0nx", avatar: avatar, textMsg: "Как дела?", my: true },
        { msgNum: 2, name: "Artem", avatar: avatarFriend, textMsg: "Все хорошо", my: false },
    ],
    NowMessage: '',
};

export const dialogReducer = (state = initialState, action) => {

    let stateCopy = {...state};

    switch (action.type) {
        case CHANGE_MESSAGE_TEXT:
            stateCopy.NowMessage = action.messageText;
            return {
                ...state,
                NowMessage: action.messageText
            }

        case SEND_MESSAGE:
            if (state.NowMessage !== '') {
                let newMsgNum = stateCopy.MessagesData.length + 1;
                let newMessage = {
                    msgNum: newMsgNum,
                    name: 'xr1s0nx',
                    avatar: avatar,
                    textMsg: state.NowMessage,
                    my: true
                }
                return {
                    ...state,
                    MessagesData: [...state.MessagesData, newMessage],
                    NowMessage: '',
                };
            }
            return stateCopy

        default: return state
    }
}


export const updateMessageTextActionCreator = (textMessage) => ({ type: CHANGE_MESSAGE_TEXT, messageText: textMessage });

export const sendMessageActionCreator = () => ({ type: SEND_MESSAGE })