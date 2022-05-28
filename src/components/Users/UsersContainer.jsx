import Users from './Users'
import { connect } from 'react-redux';
import { followAC } from "../../redux/users_reducer";
import { unFollowAC } from "../../redux/users_reducer";
import { setUsersAC } from "../../redux/users_reducer";

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId) => {
            dispatch(unFollowAC(userId))
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users))
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Users);