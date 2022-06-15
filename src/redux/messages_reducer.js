const SEND_MESSAGE = 'SEND_MESSAGE';

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
    ]
};

export const messageReducer = (state = initialState, action) => {

    switch (action.type) {
        case SEND_MESSAGE:
            return {
                ...state,
                dialogsPage: [...state.dialogsPage, { id: 6, message: action.body }]
            }
        default:
            return state;
    }
}



export const sendMessageCreator = (body) => (
    {
        type: SEND_MESSAGE, body: body
    }
)