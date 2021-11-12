import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Redirect } from "react-router-dom";
import { InputForm } from '../../components/message/InputMessage';
import { Chat } from '../../components/message/MessageList';

import { getChatMessagesById } from '../../store/messages/selectors';
import { createMessage } from "../../store/messages/actions";
import { isChatById } from '../../store/chats/selectors';
import { getChatById } from '../../store/chats/selectors';

//import { CHATS } from '../../mocks/chats';
//форма ввода сообщений

//форма
export const Messages = () => {
    const { chatID } = useParams();
    const dispatch = useDispatch();
    const messageList = useSelector(getChatMessagesById(chatID));
    const hasChat = useSelector(isChatById(chatID));

    const userName = "user";
    const botName = "bot";
    const classNameIn = "messageIn";
    const classNameOut = "messageOut";
    let nameChat = "Чатик";
    const nameCh = useSelector(getChatById(chatID));
    // console.log(nameCh);
    if (nameCh.find(item => item.id === chatID)) {

        nameChat = nameCh[0].name;
    }
    // console.log(nameChat);
    const sendMessage = (id, author, text, className) => {
        const newMessage = {
            id,
            author,
            text,
            className,
        };
        dispatch(createMessage(newMessage, chatID));
    };

    const onSendMesssage = (value) => {
        sendMessage(Date.now(), userName, value, classNameOut);
    };

    useEffect(() => {
        console.log(12);
        if (!messageList || messageList.length === 0) {
            return;
        }

        const prevous = messageList[messageList.length - 1];

        if (prevous.author === botName) {
            return;
        }

        //const timerId = setTimeout(() => {
        sendMessage(Date.now(), botName, "Привет, как дела?", classNameIn);
        //}, 1500);

        //return () => {
        //  clearTimeout(timerId);
        //}

    }, [messageList]);

    if (!hasChat) {
        return <Redirect to='/chats' />;
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
