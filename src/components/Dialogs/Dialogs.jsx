import React from 'react';
import { Formik, Form, Field } from "formik";
import classes from './Dialogs.module.css';
import DialogItems from './DialogItems/DialogItems';
import Message from './Message/Message';



const Dialogs = (props) => {

    let state = props.messagesPage;

    let dialogsElements = state.dialogsData.map(d => <DialogItems name={d.name} key={d.id} id={d.id} />);
    let messagesElements = state.dialogsPage.map(m => <Message message={m.message} key={m.id} />);

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogs_items}>

                {dialogsElements}

            </div>
            <div className={classes.messages}>

                <div>{messagesElements}</div>

            </div>
            <div>
                <div className={classes.my_posts}>
                    <div className={classes.conteiner_posts}>
                        <AddMessageForm sendMessage={props.sendMessage} />
                    </div>
                </div>
            </div>
        </div>
    );

}
const AddMessageForm = (props) => {

    let addNewMessage = (values) => { props.sendMessage(values) }

    return (
        <Formik
            initialValues={{
                newMessageBody: ""
            }}
            onSubmit={(values, { resetForm }) => {
                addNewMessage(values.newMessageBody);
                resetForm({ values: '' });
            }
            }
        >
            {() => (
                <Form>
                    <div>
                        <Field
                            name={'newMessageBody'}
                            as={'textarea'}
                            placeholder={'Enter text...'}
                        />
                    </div>
                    <div>
                        <button type={'submit'} className={classes.btn}>Send</button>
                    </div>
                </Form>
            )}
        </Formik>
    )
}

export default Dialogs;