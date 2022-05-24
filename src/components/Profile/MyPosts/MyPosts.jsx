import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';
import { updateNewPostTextActionCreator, addPostActionCreator } from '../../../redux/state';

const MyPosts = (props) => {


    let postsElement = props.postsData.map(p => <Post message={p.message} likesCount={p.likesCount} />);


    let newPostElement = React.createRef();

    let addPost = () => {
        props.dispatch(addPostActionCreator())
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        //let action = {type: 'UPDATE-NEW-POST-TEXT',newText: text}
        props.dispatch(updateNewPostTextActionCreator(text));
        //props.updateNewPostText(text);
    }


    return (
        <div className={classes.my_posts}>
            <div className={classes.conteiner_posts}>
                <h2>My posts</h2>
                <div>
                    <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText} rows='3'></textarea>
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