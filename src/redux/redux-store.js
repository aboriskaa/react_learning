import { configureStore, applyMiddleware } from '@reduxjs/toolkit'

import thunk from 'redux-thunk'
// ThunkMiddleware
import { profileReducer } from "./profile_reducer";
import { messageReducer } from "./messages_reducer";
import { sidebarReducer } from "./sidebar_reducer";
import { usersReducer } from './users_reducer';
import { authReducer } from './auth_reducer';


let store = configureStore({
    reducer: {
        profilePage: profileReducer,
        messagesPage: messageReducer,
        sidebar: sidebarReducer,
        usersPage: usersReducer,
        auth: authReducer
    }
},
    applyMiddleware(thunk)
)

// window.store = store;

export default store