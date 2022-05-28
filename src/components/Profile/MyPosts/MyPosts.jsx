import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

    let postsElement = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount} />);

    let newPostElement = React.createRef();

    let onAddPost = () => {
        props.addPost();
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    }

    return (
        <div className={classes.my_posts}>
            <div className={classes.conteiner_posts}>
                <h2>My posts</h2>
                <div>
                    <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText} rows='3'></textarea>
                    <div>
                        <button onClick={onAddPost} className={classes.btn} type='button'>Click Me!</button>
                    </div>
                </div>
                {postsElement}
            </div>
        </div>
    );
}

export default MyPosts;