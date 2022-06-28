import React from "react";
import { connect } from 'react-redux';
import { follow, unfollow, setCurrentPage, toggleFollowingProgress, requestUsers } from "../../redux/users_reducer";
import Users from './Users'
import Preloader from '../common/Preloader/Preloader';
// import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";
import { getUsers, getPageSize, getTotalUsersCount, getCurrentPage, getIsFetching, getFollowingInProgress } from "../../redux/users_selectors"

class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.requestUsers(this.props.currentPage, this.props.pageSize);
    }

    onPageChanged = (pageN) => {

        this.props.requestUsers(pageN, this.props.pageSize);

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
                    followingInProgress={this.props.followingInProgress}
                />}

        </>
    }
}

let mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)
    }
}



export default compose(
    // withAuthRedirect,
    connect(mapStateToProps, {
        follow,
        unfollow,
        setCurrentPage,
        toggleFollowingProgress,
        requestUsers
    })
)(UsersContainer)