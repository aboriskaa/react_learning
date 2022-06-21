import React from 'react';
import Header from './Header'
import { connect } from 'react-redux';
import { getAuthUserData } from '../../redux/auth_reducer'
import { compose } from 'redux';
import { logout } from '../../redux/auth_reducer'

class HeaderContainer extends React.Component {
    componentDidMount() {
        this.props.getAuthUserData();
    }
    render() {
        return <Header {...this.props} />
    }
}
const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})

export default compose(
    connect(mapStateToProps, { getAuthUserData, logout })
)(HeaderContainer)


