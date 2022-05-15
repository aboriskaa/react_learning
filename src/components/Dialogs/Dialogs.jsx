import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Dialogs.module.css';
import DialogItems from './DialogItems/DialogItems';
import Message from './Message/Message';

const Dialogs = (props) => {

    let dialogsElements = props.dialogsData.map(d => <DialogItems name={d.name} id={d.id} />);
    let messagesElements = props.messagesData.map(m => <Message message={m.message} />);

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogs_items}>

                {dialogsElements}

            </div>
            <div className={classes.messages}>

                {messagesElements}

            </div>
        </div>
    );

}

export default Dialogs;