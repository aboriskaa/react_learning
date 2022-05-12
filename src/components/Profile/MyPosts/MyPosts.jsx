import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
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
                <Post />
            </div>
        </div>
    );
}

export default MyPosts;

