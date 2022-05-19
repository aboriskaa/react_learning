import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

    let postsElement = props.postsData.map(p => <Post message={p.message} likesCount={p.likesCount} />);


    let newPostElement = React.createRef();

    let addPost = () => {
        let textOut = newPostElement.current.value
        props.addPost(textOut)
    }


    return (
        <div className={classes.my_posts}>
            <div className={classes.conteiner_posts}>
                <h2>My posts</h2>
                <div>
                    <textarea rows='3' ref={newPostElement}></textarea>
                    <div>
                        <button onClick={addPost} className={classes.btn} type='button'>Click Me!</button>
                    </div>
                </div>
                {postsElement}
            </div>
        </div>
    );
}

export default MyPosts;

