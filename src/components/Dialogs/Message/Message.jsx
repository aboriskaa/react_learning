import React from 'react';
import classes from './Message.module.css';

const Message = (props) => {
    // let path = "";
    return (
        <div className={classes.messageWrapper}>
            <div className={classes.message}>{props.message}</div>
        </div>
    )

}

export default Message;