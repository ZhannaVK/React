import { Component } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { isChatById, getChatById } from '../store/chats/selectors';
import { getChatMessagesById } from '../store/messages/selectors';
import { sendMessageWithThunk } from '../store/messages/actions';
import { AUTHOR_USER } from "../components/constants";


export const withChatMessages = (Component) => {
    return (props) => {
        const { chatID } = useParams();
        const dispatch = useDispatch();
        const messageList = useSelector(getChatMessagesById(chatID));
        const hasChat = useSelector(isChatById(chatID));

        let nameChat = "Чатик";
        /*const nameCh = useSelector(getChatById(chatID));
       // console.log(nameCh);
       if (nameCh.find(item => item.id === chatID)) {
 
           nameChat = nameCh[0].name;
       }; */

        const onSendMesssage = (text) => {
            dispatch(sendMessageWithThunk(AUTHOR_USER, text, chatID))
        };

        return <Component {...props}
            messageList={messageList}
            hasChat={hasChat}
            onSendMesssage={onSendMesssage}
            nameChat={nameChat} />
    }
}