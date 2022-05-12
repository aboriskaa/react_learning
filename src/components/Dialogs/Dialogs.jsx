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
    return <div className={classes.message}>{props.dialog}</div>
}

const Dialogs = () => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogs_items}>
                <DialogItem name="Маша" id="1" />
                <DialogItem name="Миша" id="2" />
                <DialogItem name="Саша" id="3" />
                <DialogItem name="Даша" id="4" />

            </div>
            <div className={classes.messages}>

                <Message dialog="Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, fuga!" />
            </div>
        </div>
    );

}

export default Dialogs;