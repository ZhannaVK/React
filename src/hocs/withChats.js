import { Component } from "react";
import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux"
import { addNewChat } from "../components/utility";
import { getChatList } from "../store/chats/selectors";
import { createChat, removeChat } from '../store/chats/actions';
import { removeMessagesFromChat } from '../store/messages/actions';
import { nanoid } from 'nanoid';


export const withChats = (Component) => {
    return (props) => {
        const chats = useSelector(getChatList);

        const dispatch = useDispatch();

        const onCreateChat = useCallback(() => {
            dispatch(createChat(addNewChat('new chatik_' + nanoid(3))))
        }, []);

        const onDeleteChat = useCallback((chatID) => {
            dispatch(removeChat(chatID));
            dispatch(removeMessagesFromChat(chatID));
        }, [])

        return (
            <Component
                {...props}
                chats={chats}
                onCreateChat={onCreateChat}
                onDeleteChat={onDeleteChat}
            />)

    }
}