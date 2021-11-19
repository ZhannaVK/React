import { AUTHOR_BOT, CLASS_NAME_IN, CLASS_NAME_OUT } from '../../components/constants';
import { addNewMessage } from '../../components/utility';

export const CREATE_MESSAGE = 'CREATE_MESSAGE';
export const REMOVE_MESSAGE_FROM_CHAT = 'REMOVE_MESSAGE_FROM_CHAT';

export const createMessage = (message, chatID) => ({
    type: CREATE_MESSAGE,
    payload: {
        message, chatID,
    }
});

export const removeMessagesFromChat = (chatID) => ({
    type: REMOVE_MESSAGE_FROM_CHAT,
    payload: chatID
});

export const sendMessageWithThunk = (author, text, chatID) => (dispatch) => {
    const messageUser = addNewMessage(author, text, CLASS_NAME_OUT);

    dispatch(createMessage(messageUser, chatID));

    if (author === AUTHOR_BOT) { return; }

    const messageBot = addNewMessage(AUTHOR_BOT, "Привет, как дела?", CLASS_NAME_IN);

    dispatch(createMessage(messageBot, chatID));
};
