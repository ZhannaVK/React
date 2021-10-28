import React from 'react';

/* export const Message = (props) => {
    return <div className={props.className}>{props.message}</div>
} */

export const FullMessage = (props) => {
    return <div className={props.className}>{props.user}: {props.message}</div>
}