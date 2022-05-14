import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Dialogs.module.css';

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;
    return (<div className={classes.dialog + ' ' + classes.active}>
        <NavLink to={path}>{props.name}</NavLink>
    </div>)
}

const Message = (props) => {
    // let path = "";
    return <div className={classes.message}>{props.message}</div>
}

const Dialogs = () => {

    let dialogsData = [
        { id: 1, name: 'Dimych' },
        { id: 2, name: 'Andrew' },
        { id: 3, name: 'Sveta' },
        { id: 4, name: 'Sasha' },
        { id: 5, name: 'Viktor' },
        { id: 6, name: 'Valera' }
    ]

    let messagesData = [
        { id: 1, message: '1 Lorem ipsum dolor sit amet.' },
        { id: 2, message: '2 Lorem, ipsum dolor sit amet consectetur adipisicing.' },
        { id: 3, message: '3 Lorem, ipsum dolor.' },
        { id: 4, message: '4 Lorem ipsum dolor sit amet consectetur.' }
    ]

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogs_items}>
                <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />
                <DialogItem name={dialogsData[1].name} id={dialogsData[1].id} />
            </div>
            <div className={classes.messages}>
                <Message message={messagesData[0].message} />
                <Message message={messagesData[1].message} />
                <Message message={messagesData[2].message} />
            </div>
        </div>
    );

}

export default Dialogs;