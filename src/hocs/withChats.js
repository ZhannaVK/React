import { Component } from "react";
import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux"
import { addNewChat } from "../components/utility";
import { getChatList } from "../store/chats/selectors";
import { createChat, removeChat } from '../store/chats/actions';
import { removeMessagesFromChat } from '../store/messages/actions';


export const withChats = (Component) => {
    return (props) => {
        const chats = useSelector(getChatList);

        // console.log(chats);


        const dispatch = useDispatch();

        const onCreateChat = useCallback(() => {
            dispatch(createChat(addNewChat('new chatik')))
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