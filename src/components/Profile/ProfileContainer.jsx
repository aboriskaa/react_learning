import React from 'react';
import { connect } from 'react-redux';
import Profile from './Profile'
import { getUserProfile, getStatus, updateStatus } from "../../redux/profile_reducer";
import { useParams, Navigate } from 'react-router-dom';
// import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';



export function withRouter(ProfileContainer) {
    return (props) => {
        const match = { params: useParams() };
        return <ProfileContainer {...props} match={match} />
    }
}


class ProfileContainer extends React.Component {
    // debugger;

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = this.props.authorizedUserId;
            if (!userId) {
                if (!userId) {
                    return <Navigate to="/login" />
                }
            }
        }
        this.props.getUserProfile(userId);
        this.props.getStatus(userId);
    }

    render() {
        return <Profile {...this.props}
            profile={this.props.profile}
            status={this.props.status}
            updateStatus={this.props.updateStatus} />
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizedUserId: state.auth.userId,
    isAuth: state.auth.isAuth
})

export default compose(
    connect(mapStateToProps, { getUserProfile, getStatus, updateStatus }),
    withRouter,
    //withAuthRedirect 
)(ProfileContainer)

