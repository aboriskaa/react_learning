import React from 'react';
import classes from './Post.module.css';

// let postsData = [
//     { id: 1, message: 'POST 1', likesCount: 12 },
//     { id: 2, message: 'POST 2', likesCount: 102 }
// ]

const Post = (props) => {
    return (
        <div className={classes.post}>
            <div><img src="/eye.jpg" alt={props.likesCount} /></div>
            <div>{props.message}</div>
            <div>{props.likesCount}</div>
        </div>
    );

}

export default Post;
