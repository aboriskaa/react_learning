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
            messagesData: [
                { id: 1, message: '1 Lorem ipsum dolor sit amet.' },
                { id: 2, message: '2 Lorem, ipsum dolor sit amet consectetur adipisicing.' },
                { id: 3, message: '3 Lorem, ipsum dolor.' },
                { id: 4, message: '4 Lorem ipsum dolor sit amet consectetur.' }
            ]
        },
        sidebar: {}

    },
    getState() {
        return this._state;
    },
    _callSubscriber() {
        console.log('State was changed')
    },
    addPost() {
        let newPost = {
            id: 5,
            message: this._state.profilePage.newPostText,
            likesCount: 0
        }
        this._state.profilePage.postsData.push(newPost);
        this._state.profilePage.newPostText = '';
        this._callSubscriber(this._state);
    },
    updateNewPostText(newText) {
        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this._state);
    },
    subscribe(observer) {  //Remember it's pattern OBSERVER! like 
        this._callSubscriber = observer;
    }

}

export default store;
window.store = store;



