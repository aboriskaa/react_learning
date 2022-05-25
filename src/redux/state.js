import { profileReducer } from "./profile_reducer";
import { messageReducer } from "./messages_reducer";
import { sidebarReducer } from "./sidebar_reducer";

let store = {

    _state: {
        profilePage: {

            postsData: [
                { id: 1, message: 'POST 1', likesCount: 12 },
                { id: 2, message: 'POST 2', likesCount: 102 }
            ],
            newPostText: 'Random text'
        },
        messagesPage: {
            dialogsData: [
                { id: 1, name: 'Dimych' },
                { id: 2, name: 'Andrew' },
                { id: 3, name: 'Sveta' },
                { id: 4, name: 'Sasha' },
                { id: 5, name: 'Viktor' },
                { id: 6, name: 'Valera' },
                { id: 7, name: 'Gul' }
            ],
            dialogsPage: [
                { id: 1, message: '1 Lorem ipsum dolor sit amet.' },
                { id: 2, message: '2 Lorem, ipsum dolor sit amet consectetur adipisicing.' },
                { id: 3, message: '3 Lorem, ipsum dolor.' },
                { id: 4, message: '4 Lorem ipsum dolor sit amet consectetur.' }
            ],
            newMessageBody: ''
        },
        sidebar: {}

    },
    _callSubscriber() {
        console.log('State was changed')
    },
    getState() {
        return this._state;
    },

    subscribe(observer) {  //Remember it's pattern OBSERVER!
        this._callSubscriber = observer;
    },
    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.messagesPage = messageReducer(this._state.messagesPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubscriber(this._state);
    }
}

export default store;
window.store = store;



