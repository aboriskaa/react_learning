import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Dialogs.module.css';
import DialogItems from './DialogItems/DialogItems';
import Message from './Message/Message';

const Dialogs = () => {

    let dialogsData = [
        { id: 1, name: 'Dimych' },
        { id: 2, name: 'Andrew' },
        { id: 3, name: 'Sveta' },
        { id: 4, name: 'Sasha' },
        { id: 5, name: 'Viktor' },
        { id: 6, name: 'Valera' },
        { id: 7, name: 'Gul' }
    ]

    let messagesData = [
        { id: 1, message: '1 Lorem ipsum dolor sit amet.' },
        { id: 2, message: '2 Lorem, ipsum dolor sit amet consectetur adipisicing.' },
        { id: 3, message: '3 Lorem, ipsum dolor.' },
        { id: 4, message: '4 Lorem ipsum dolor sit amet consectetur.' }
    ]

    let dialogsElements = dialogsData.map(d => <DialogItems name={d.name} id={d.id} />);
    let messagesElements = messagesData.map(m => <Message message={m.message} />);

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