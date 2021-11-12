export const getMessagesFromStore = (state) => state.message || {};
export const getMessages = (state) => getMessagesFromStore(state).messages || {};
export const getChatMessagesById = (chatID) => (state) => getMessages(state)[chatID];