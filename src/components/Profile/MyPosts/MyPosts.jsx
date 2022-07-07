import React from 'react';
import { Formik, Form, Field } from "formik";
import classes from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

    let postsElement = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount} />);

    return (
        <div className={classes.my_posts}>
            <div className={classes.conteiner_posts}>
                <h2>My posts</h2>
                <AddNewMessagePost addPost={props.addPost} />
                {postsElement}
            </div>
        </div>
    );
}

const AddNewMessagePost = (props) => {

    let addNewPost = (values) => { props.addPost(values) }

    return (
        <Formik
            initialValues={{
                newPostBody: ""
            }}
            onSubmit={(values, { resetForm, setSubmitting }) => {
                addNewPost(values.newPostBody);
                resetForm({ values: '' });

                setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    setSubmitting(false);
                }, 400);

            }
            }
        >
            {({
                isSubmitting
                /* and other goodies */
            }) => (
                <Form>
                    <Field
                        name={'newPostBody'}
                        as={'textarea'}
                        placeholder={'Enter text...'}
                    />
                    <div>
                        <button className={classes.btn} type='submit' disabled={isSubmitting}>Click Me!</button>
                    </div>
                </Form>
            )}
        </Formik>
    )
}


export default MyPosts;