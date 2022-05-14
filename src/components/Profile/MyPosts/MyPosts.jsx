import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {

    let postsData = [
        { id: 1, message: 'POST 1', likesCount: 12 },
        { id: 2, message: 'POST 2', likesCount: 102 }
    ]

    return (
        <div className={classes.my_posts}>
            <div className={classes.conteiner_posts}>
                <h2>My posts</h2>
                <div>
                    <textarea rows='3'></textarea>
                    <div>
                        <button className={classes.btn} type='button'>Click Me!</button>
                    </div>
                </div>
                <Post message={postsData[0].message} likesCount={postsData[0].likesCount} />
                <Post message={postsData[1].message} likesCount={postsData[1].likesCount} />
            </div>
        </div>
    );
}

export default MyPosts;

