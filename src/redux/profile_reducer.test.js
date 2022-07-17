import { profileReducer, addPostActionCreator, deletePost } from "./profile_reducer";
import ReactDOM from "react-dom";
import App from "../App";
import React from "react";

it('lenght of post should be incremented', () => {
    //1. start data
    let action = addPostActionCreator("it-kamasutra.com");
    let state = {
        postsData: [
            { id: 1, message: 'POST 1', likesCount: 12 },
            { id: 2, message: 'POST 2', likesCount: 102 }
        ]
    }
    //2. action
    let newState = profileReducer(state, action)

    //3. expectation
    expect(newState.postsData.length).toBe(3);
    expect(newState.postsData[2].message).toBe("it-kamasutra.com");
})

it('after deleting length of messages should be decrement', () => {
    let action = deletePost(1);
    //2. action
    let newState = profileReducer(state, action)
    //3. expectation
    expect(newState.postsData.length).toBe(2);

})