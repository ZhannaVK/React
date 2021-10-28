import React, { useEffect, useState } from "react";
import { FullMessage } from '../components/Message';


export const InputForm = () => {
    const [messageList, setMessageList] = useState([]);
    const [textMes, TextMes] = useState('');

    const userName = "user";
    const botName = "bot";
    const classNameIn = "messageIn";
    const classNameOut = "messageOut";

    const _scrollToTop = () => {
        let scroll = document.getElementById('chatID');
        scroll.scrollTop = 0;
    }

    const onChangeMessageText = (event) => {
        TextMes(event.target.value);

    }

    const sendMessage = (author, text, className) => {
        const newMessageList = [...messageList];
        const newMessage = {
            author,
            text,
            className,
        }
        newMessageList.push(newMessage);
        setMessageList(newMessageList);
    }

    const onSendMes = (event) => {
        event.preventDefault();
        sendMessage(userName, textMes, classNameOut);
        TextMes("");
    }

    useEffect(() => {
        if (messageList.length === 0) {
            return
        }

        const prevous = messageList[messageList.length - 1];

        if (prevous.author === botName) {
            return
        }

        const timerId = setTimeout(() => {
            sendMessage(botName, "Привет, как дела?", classNameIn);
        }, 1500);

        return () => {
            clearTimeout(timerId);
        }

    }, [messageList]);

    return (<div>
        <div className="placeForm">
            <form className="inputForm" onSubmit={onSendMes}>
                <input type="text" className="formField" placeholder="Your message" value={textMes} onChange={onChangeMessageText} />
                <button className="formInputBtn">Send</button>
            </form >
        </div>
        <div className="chat">
            {
                messageList.map((item) => (
                    <FullMessage user={item.author} message={item.text} className={item.className}></FullMessage>

                ))}
        </div>

    </div >
    );
};

