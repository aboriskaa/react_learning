import React from "react";
import { NavLink } from 'react-router-dom';
import classes from './Users.module.css';
import userPhoto from '../../assets/images/user_img.png'

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

            props.users.map(u => <div className={classes.usersBodyList} key={u.id}>

                <span>
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
                                ? <button onClick={() => { props.unfollow(u.id) }}
                                >Un Follow</button>
                                : <button onClick={() => { props.follow(u.id) }}>Follow</button>
                        }

                    </div>
                </span>
                <span>
                    <div>{u.name}</div>
                    <div>{u.status}</div>
                </span>
                <span>
                    <div>{"u.location.country"}</div>
                    <div>{"u.location.city"}</div>
                </span>
            </div>)
        }
    </div>
}

export default Users