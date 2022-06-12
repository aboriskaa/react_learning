import React from 'react';
import MyPostsConteiner from './MyPosts/MyPostsConteiner';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import classes from './Profile.module.css';


const Profile = (props) => {

    return (
        <div className={classes.content}>
            <ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus} />
            <MyPostsConteiner />
        </div>
    );
}

export default Profile;

