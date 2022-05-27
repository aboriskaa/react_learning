import { configureStore } from '@reduxjs/toolkit'
import { profileReducer } from "./profile_reducer";
import { messageReducer } from "./messages_reducer";
import { sidebarReducer } from "./sidebar_reducer";

let store = configureStore({
    reducer: {
        profilePage: profileReducer,
        messagesPage: messageReducer,
        sidebar: sidebarReducer
    }
})

window.store = store;

export default store