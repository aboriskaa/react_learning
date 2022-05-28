import { configureStore } from '@reduxjs/toolkit'
import { profileReducer } from "./profile_reducer";
import { messageReducer } from "./messages_reducer";
import { sidebarReducer } from "./sidebar_reducer";
import { usersReducer } from './users_reducer';

let store = configureStore({
    reducer: {
        profilePage: profileReducer,
        messagesPage: messageReducer,
        sidebar: sidebarReducer,
        usersPage: usersReducer
    }
})

// window.store = store;

export default store