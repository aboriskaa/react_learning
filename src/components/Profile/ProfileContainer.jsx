import React from 'react';
import { connect } from 'react-redux';
import * as axios from "axios";
import Profile from './Profile'
import { setUserProfile } from "../../redux/profile_reducer";
import { useParams } from 'react-router-dom';

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
        if (!userId) userId = 2;
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
            .then(response => {
                // this.props.toggleIsFetching(false);
                this.props.setUserProfile(response.data);
                // debugger;
            })
    }

    render() {
        return <Profile {...this.props} profile={this.props.profile} />
    }
}

let mapStateToProps = (state) => ({ profile: state.profilePage.profile })

let WithUrlDataContainerComponent = withRouter(ProfileContainer)


export default connect(mapStateToProps, { setUserProfile })(WithUrlDataContainerComponent);

