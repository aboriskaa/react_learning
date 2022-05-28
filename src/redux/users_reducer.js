const FOLLOW = 'FOLLOW';
const UN_FOLLOW = 'UN_FOLLOW';
const SET_USERS = 'SET_USERS';

let initialState = {
    users: [
        { id: 1, photoUrl: 'https://avatars.mds.yandex.net/get-zen_doc/4078437/pub_606a430a45570e1e4307d1f8_606a433cdae78e3f28ba4932/scale_1200', followed: false, fullName: 'Dmitry', status: 'I am a Boss', location: { city: 'Minsk', country: 'Belarus' } },
        { id: 2, photoUrl: 'https://avatars.mds.yandex.net/get-zen_doc/1773286/pub_5d2b624c998ed600acf9b237_5d2b62fac49f2900aef41c3c/scale_1200', followed: true, fullName: 'Sasha', status: 'I am a Boss2', location: { city: 'Moscow', country: 'Russia' } },
        { id: 3, photoUrl: 'https://s3.stc.all.kpcdn.net/putevoditel/serialy/wp-content/uploads/2021/12/Screenshot-2021-12-09-at-01-25-13-20001110_gaf_rs56_219-jpg-Izobrazhenie-JPEG-2000-3008-pikselov-Masshtabirovannoe-28.jpg', followed: false, fullName: 'Andry', status: 'I am a Boss3', location: { city: 'Kiev', country: 'Ukraine' } }
    ]
}

export const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: true }
                    }
                    return u;
                })
            }
        case UN_FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: false }
                    }
                    return u;
                })
            }
        case SET_USERS:
            return {
                ...state,
                users: [...state.users, ...action.users]

            }
        default:
            return state;
    }
}

export const followAC = (userId) => ({ type: FOLLOW, userId })
export const unFollowAC = (userId) => ({ type: UN_FOLLOW, userId })
export const setUsersAC = (users) => ({ type: SET_USERS, users })