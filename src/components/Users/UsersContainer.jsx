import React from "react";
import { connect } from 'react-redux';
import { follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount, toggleIsFetching } from "../../redux/users_reducer";
import Users from './Users'
import Preloader from '../common/Preloader/Preloader';
import { usersAPI } from "../../api/api";



class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.toggleIsFetching(true);

        usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
            this.props.toggleIsFetching(false);
            this.props.setUsers(data.items);
            this.props.setTotalUsersCount(data.totalCount);
        })

    }

    onPageChanged = (pageN) => {
        this.props.toggleIsFetching(true);
        this.props.setCurrentPage(pageN);
        usersAPI.getUsers(pageN, this.props.pageSize).then(data => {
            this.props.toggleIsFetching(false);
            this.props.setUsers(data.items);
        })
    }

    render() {

        return <>
            {this.props.isFetching ? <Preloader />
                : <Users
                    totalUsersCount={this.props.totalUsersCount}
                    pageSize={this.props.pageSize}
                    currentPage={this.props.currentPage}
                    onPageChanged={this.onPageChanged}
                    users={this.props.users}
                    follow={this.props.follow}
                    unfollow={this.props.unfollow}
                />}

        </>

    }
}


let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
}
// let mapDispatchToProps = (dispatch) => {
//     return {
//         follow: (userId) => {
//             dispatch(followAC(userId))
//         },
//         unfollow: (userId) => {
//             dispatch(unFollowAC(userId))
//         },
//         setUsers: (users) => {
//             dispatch(setUsersAC(users))
//         },
//         setCurrentPage: (pageN) => {
//             dispatch(setCurrentPageAC(pageN))
//         },
//         setTotalUsersCount: (totalCount) => {
//             dispatch(setTotalUsersCountAC(totalCount))
//         },
//         toggleIsFetching: (isFetching) => {
//             dispatch(setIsFetchingAC(isFetching))
//         }
//     }
// }


export default connect(mapStateToProps, {
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    toggleIsFetching
})(UsersContainer);