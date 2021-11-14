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
})