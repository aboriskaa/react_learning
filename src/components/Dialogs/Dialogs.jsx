import React from 'react';
import classes from './Dialogs.module.css';
import DialogItems from './DialogItems/DialogItems';
import Message from './Message/Message';
import { sendMessageCreator, updateNewMessageBodyCreator } from '../../redux/messages_reducer'

const Dialogs = (props) => {

    let state = props.store.getState().messagesPage;

    let dialogsElements = state.dialogsData.map(d => <DialogItems name={d.name} id={d.id} />);
    let messagesElements = state.dialogsPage.map(m => <Message message={m.message} />);
    let newMessageBody = state.newMessageBody;

    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator());
    }

    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.store.dispatch(updateNewMessageBodyCreator(body));
    }

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
                        <div>
                            <textarea value={newMessageBody}
                                onChange={onNewMessageChange}
                                placeholder='Enter your message'>
                            </textarea>
                        </div>
                        <div>
                            <button onClick={onSendMessageClick} className={classes.btn}>Send</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default Dialogs;