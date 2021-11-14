import { CREATE_CHAT, REMOVE_CHAT, ADD_CHATS } from './actions';

const initState = {
    chats: [],
}

export const chatReduser = (state = initState, action) => {
    switch (action.type) {
        case CREATE_CHAT: {
            return {
                chats: [...state.chats, action.payload,]
            }
        }
        case REMOVE_CHAT: {
            return {
                chats: state.chats.filter((item) => item.id !== action.payload)
            }
        }
        case ADD_CHATS: {
            return {
                chats: [...action.payload,]
            }
        }
        default: { return state; }
    }
}