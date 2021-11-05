import { useState, useEffect } from "react";

import { useParams, Redirect } from "react-router-dom";
import { InputForm } from '../../components/message/InputMessage';
import { Chat } from '../../components/message/MessageList';
import { CHATS } from '../../mocks/chats';
//форма ввода сообщений

//форма
export const Messages = () => {
    const { chatID } = useParams();

    const [messageList, setMessageList] = useState([]);

    const userName = "user";
    const botName = "bot";
    const classNameIn = "messageIn";
    const classNameOut = "messageOut";
    let nameChat = "Чатик";

    const sendMessage = (id, author, text, className) => {
        const newMessageList = [...messageList];
        const newMessage = {
            id,
            author,
            text,
            className,
        };
        newMessageList.push(newMessage);
        setMessageList(newMessageList);
    };

    const onSendMesssage = (value) => {
        sendMessage(Date.now(), userName, value, classNameOut);
    };

    useEffect(() => {
        if (messageList.length === 0) {
            return;
        }

        const prevous = messageList[messageList.length - 1];

        if (prevous.author === botName) {
            return;
        }

        const timerId = setTimeout(() => {
            sendMessage(Date.now(), botName, "Привет, как дела?", classNameIn);
        }, 1500);

        return () => {
            clearTimeout(timerId);
        }

    }, [messageList]);

    if (!CHATS.find(({ id }) => id === chatID)) {
        return <Redirect to="/chats" />;
    } else {
        const nomerCh = CHATS.find(({ id }) => id === chatID);
        if (nomerCh !== 0) {
            nameChat = nomerCh.name;
        };
    }

    return (
        <div className="App">
            <h1 className="headerChat">{nameChat}</h1>
            <div className="areaChat">
                <InputForm onSend={onSendMesssage} />
                <Chat messageList={messageList} />
            </div>

        </div>
    )

};
