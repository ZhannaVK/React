
export const CREATE_CHAT = 'CREATE_CHAT';
export const REMOVE_CHAT = 'REMOVE_CHAT';
export const ADD_CHATS = 'ADD_CHAT';

export const createChat = (chat) => ({
    type: CREATE_CHAT,
    payload: chat,
});
export const removeChat = (chatID) => ({
    type: REMOVE_CHAT,
    payload: chatID,
});
export const addChats = (chats) => ({
    type: ADD_CHATS,
    payload: chats,
});
