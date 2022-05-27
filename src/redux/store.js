import { profileReducer } from "./profile_reducer";
import { messageReducer } from "./messages_reducer";
import { sidebarReducer } from "./sidebar_reducer";

let store = {

    _state: {

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
}

export default store;
window.store = store;



