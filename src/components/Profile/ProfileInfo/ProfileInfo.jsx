import React from 'react';
import classes from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div className={classes.my_profile}>
            <div className={classes.ava}></div>
            <div className={classes.desc}>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam culpa quia quas mollitia, ipsam maxime. Error accusamus, modi culpa mollitia, alias tempora tenetur adipisci repudiandae obcaecati nostrum quos ratione eaque. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet quas, magnam sint magni hic vel assumenda dolorum porro autem dolores. Aspernatur quos cupiditate, voluptatibus fuga voluptate natus eaque inventore quod?</p>
            </div>
        </div>
    );
}

export default ProfileInfo;

