import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {

    let postsData = [
        { id: 1, message: 'POST 1', likesCount: 12 },
        { id: 2, message: 'POST 2', likesCount: 102 }
    ]

    let postsElement = postsData.map(p => <Post message={p.message} likesCount={p.likesCount} />);

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
                {postsElement}
            </div>
        </div>
    );
}

export default MyPosts;

