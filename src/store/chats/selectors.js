import { compareById } from '../../components/compareById';














export const getChats = (state) => state.chats;
export const getChatList = (state) => getChats(state).chats;
export const isChatById = (chatID) => (state) => getChatList(state).findIndex(compareById(chatID)) !== -1;
//export const getChatNameById = (chatID) => (state) => getChatList(state).find(item => item.id === chatID).name;
export const getChatById = (chatID) => (state) => getChatList(state).filter(compareById(chatID));