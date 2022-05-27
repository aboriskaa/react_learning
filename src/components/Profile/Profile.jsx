import React from 'react';
import MyPostsConteiner from './MyPosts/MyPostsConteiner';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import classes from './Profile.module.css';

const Profile = () => {
    return (
        <div className={classes.content}>
            <ProfileInfo />
            <MyPostsConteiner />
        </div>
    );
}

export default Profile;

