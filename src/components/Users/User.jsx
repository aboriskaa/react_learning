import React from "react";
import { NavLink } from 'react-router-dom';
import classes from './Users.module.css';
import userPhoto from '../../assets/images/user_img.png'
let User = ({ user, followingInProgress, unfollow, follow }) => {

    return <div className={classes.usersBodyList} key={user.id}>
        <div className={classes.usersBodyListiN} >
            <div >
                <div>
                    <NavLink to={'/profile/' + user.id}>
                        <img className={classes.photo} src={
                            user.photos.small != null ? user.photos.small : userPhoto
                        } alt="AVA" />
                    </NavLink>
                </div>
                <div>
                    {user.followed
                        ? <button disabled={followingInProgress.some(id => id === user.id)} className={classes.btn} onClick={() => {
                            unfollow(user.id);
                        }}
                        >Un Follow</button>
                        : <button disabled={followingInProgress.some(id => id === user.id)} className={classes.btn} onClick={() => {
                            follow(user.id);
                        }}>Follow</button>
                    }

                </div>
            </div>
            <div>
                <div>{user.name}</div>
                <div>{user.status}</div>
            </div>
            <div>
                <div>{"u.location.country"}</div>
                <div>{"u.location.city"}</div>
            </div>
        </div>
    </div>
}

export default User