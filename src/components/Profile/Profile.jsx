import React from 'react';
import MyPostsConteiner from './MyPosts/MyPostsConteiner';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import classes from './Profile.module.css';


const Profile = ({ profile, updateStatus, status }) => {

    return (
        <div className={classes.content}>
            <ProfileInfo profile={profile} status={status} updateStatus={updateStatus} />
            <MyPostsConteiner />
        </div>
    );
}

export default Profile;

