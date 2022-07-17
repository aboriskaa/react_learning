import React from "react";
import classes from './Users.module.css';
import Paginator from '../Paginator/Paginator'
import User from './User';

let Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    // let curP = props.currentPage;
    // let curPF = ((curP - 5) < 0) ? 0 : curP - 5;
    // let curPL = curP + 5;
    // let slicedPages = pages.slice(curPF, curPL);

    return <div className={classes.usersBody}>

        <Paginator currentPage={props.currentPage} onPageChanged={props.onPageChanged} totalUsersCount={props.totalUsersCount} pageSize={props.pageSize} />

        {props.users.map(u => <User user={u} followingInProgress={props.followingInProgress} unfollow={props.unfollow} follow={props.follow} />)}

    </div >
}

export default Users