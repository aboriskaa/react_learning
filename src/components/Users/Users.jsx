import React from "react";
import { NavLink } from 'react-router-dom';
import classes from './Users.module.css';
import userPhoto from '../../assets/images/user_img.png'
import * as axios from "axios";

let Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    let curP = props.currentPage;
    let curPF = ((curP - 5) < 0) ? 0 : curP - 5;
    let curPL = curP + 5;
    let slicedPages = pages.slice(curPF, curPL);

    return <div className={classes.usersBody}>
        <div>
            {
                slicedPages.map(p => {
                    return <span className={props.currentPage === p && classes.selectedPage} onClick={(e) => { props.onPageChanged(p) }}>{p}</span>
                })
            }
        </div>
        {

            props.users.map(u =>

                <div className={classes.usersBodyList} key={u.id}>
                    <div className={classes.usersBodyListiN} >
                        <div >
                            <div>
                                <NavLink to={'/profile/' + u.id}>
                                    <img className={classes.photo} src={
                                        u.photos.small != null ? u.photos.small : userPhoto
                                    } alt="AVA" />
                                </NavLink>
                            </div>
                            <div>
                                {
                                    u.followed
                                        ? <button disabled={props.followingInProgress.some(id => id === u.id)} className={classes.btn} onClick={() => {
                                            props.toggleFollowingProgress(true, u.id);
                                            axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                                                withCredentials: true,
                                                headers: {
                                                    "API-KEY": "e00e749f-39dc-4ef2-b890-c0c03d04ffab"
                                                }
                                            })
                                                .then(response => {
                                                    if (response.data.resultCode === 0) {

                                                        props.unfollow(u.id)
                                                        props.toggleFollowingProgress(false, u.id);
                                                    }

                                                })


                                        }}
                                        >Un Follow</button>
                                        : <button disabled={props.followingInProgress.some(id => id === u.id)} className={classes.btn} onClick={() => {
                                            props.toggleFollowingProgress(true, u.id);
                                            axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                                                withCredentials: true,
                                                headers: {
                                                    "API-KEY": "e00e749f-39dc-4ef2-b890-c0c03d04ffab"
                                                }
                                            })


                                                .then(response => {
                                                    if (response.data.resultCode === 0) {
                                                        props.follow(u.id)
                                                    }
                                                    props.toggleFollowingProgress(false, u.id);

                                                })



                                        }}>Follow</button>
                                }

                            </div>
                        </div>
                        <div>
                            <div>{u.name}</div>
                            <div>{u.status}</div>
                        </div>
                        <div>
                            <div>{"u.location.country"}</div>
                            <div>{"u.location.city"}</div>
                        </div>
                    </div>
                </div>
            )
        }
    </div >
}

export default Users