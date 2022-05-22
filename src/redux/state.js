let rerenderEntireTree = () => {
    console.log('State was changed')
}

let state = {
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
        messagesData: [
            { id: 1, message: '1 Lorem ipsum dolor sit amet.' },
            { id: 2, message: '2 Lorem, ipsum dolor sit amet consectetur adipisicing.' },
            { id: 3, message: '3 Lorem, ipsum dolor.' },
            { id: 4, message: '4 Lorem ipsum dolor sit amet consectetur.' }
        ]
    },
    sidebar: {}

}
window.state = state;

export const addPost = () => {
    let newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        likesCount: 0
    }

    state.profilePage.postsData.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree(state);
}

export const updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
}

export const subscribe = (observer) => {  //Remember it's pattern OBSERVER! like 
    rerenderEntireTree = observer;
}

export default state;




