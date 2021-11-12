import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import { ChatList } from '../../components/chat/ChatList';
import { Messages } from '../Messages';
import { makeStyles } from '@material-ui/core/styles';
import { getChatList } from '../../store/chats/selectors';
import { createChat, removeChat, addChats } from '../../store/chats/actions';
import { removeMessagesFromChat } from '../../store/messages/actions';
import { nanoid } from 'nanoid';
import { CHATS } from '../../mocks/chats';
import { Button } from '@material-ui/core';


const useStyles = makeStyles({
    columns: {
        display: "grid",
        gridTemplateColumns: "300px 1fr"
    }
});

export const Chats = () => {
    const chats = useSelector(getChatList);
    const dispatch = useDispatch();
    const classes = useStyles();

    const onCreate = useCallback(() => {
        dispatch(createChat({
            id: nanoid(10),
            name: 'Chatik'
        }))
    }, []);

    const onDelete = (chatID) => {
        dispatch(removeChat(chatID))
        dispatch(removeMessagesFromChat(chatID))
    }

    useEffect(() => {
        dispatch(addChats(CHATS))
    }, []);


    //<ChatList list={CHATS} />

    return (
        <div className={classes.columns}>
            <div>
                <ChatList onDelete={onDelete} list={chats} />
                <Button onClick={onCreate}>Add chat</Button>
            </div>
            <div>
                <Switch>
                    <Route component={Messages} path="/chats/:chatID" />
                </Switch>
            </div>
        </div>
    );
}