const SEND_MESSAGE = 'SEND_MESSAGE';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';

let initialState = {
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
};

export const messageReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body;
            return state;
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            state.newMessageBody = '';
            state.dialogsPage.push({ id: 6, message: body })
            return state;
        default:
            return state;
    }
}



export const sendMessageCreator = () => ({ type: SEND_MESSAGE })
export const updateNewMessageBodyCreator = (body) => ({ type: UPDATE_NEW_MESSAGE_BODY, body: body })