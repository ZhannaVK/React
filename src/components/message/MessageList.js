import React from "react";
import { FullMessage } from './Message';
import { propTypes } from "prop-types";

//вывод сообщений в чате
export const Chat = (props) => {
    //   console.log(props);
    return (
        <div className="chat">
            {
                props.messageList.map((item) => (
                    < FullMessage key={item.id} {...item} />

                ))}
        </div>
    );
};

Chat.defaultProps = {
    messageList: []
};