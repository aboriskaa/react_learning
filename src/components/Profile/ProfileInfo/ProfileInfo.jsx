import React from 'react';
import classes from './ProfileInfo.module.css';
import Preloader from '../../common/Preloader/Preloader';
import userImg from '../../../assets/images/user_img.png'
import ProfileStatus from "./ProfileSatus"

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader />
    }
    return (
        <div className={classes.my_profile}>
            <div className={props.profile.photos.large === null ? classes.ava : classes.isAva}>
                <img className={classes.avatar} src={props.profile.photos.large === null ? userImg : props.profile.photos.large} alt="" />
            </div>

            <div className={classes.desc}>
                <p>ИМЯ: {props.profile.fullName}</p>
                <p>РАБОЧИЙ СТАТУС: {props.profile.lookingForAJob ? "В поиске работы" : "Не нуждаюсь в работе"}</p>
                <p>ПОЖЕЛАНИЯ К РАБОТЕ: {props.profile.lookingForAJobDescription}</p>
                <div>СТАТУС: </div>
            </div>
            <div className={classes.desc2}>
                <p>BIO: {props.profile.aboutMe}</p>
                <ProfileStatus status={"Hello my friends!"} />
            </div>
        </div>
    );
}

export default ProfileInfo;

