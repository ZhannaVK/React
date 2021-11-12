import { CREATE_MESSAGE, REMOVE_MESSAGE_FROM_CHAT } from './actions';

const initState = {
    messages: {},
}

export const messagesReduser = (state = initState, action) => {
    switch (action.type) {
        case CREATE_MESSAGE: {
            const { message, chatID, } = action.payload;

            const newMessages = { ...state.messages };

            newMessages[chatID] = [...(newMessages[chatID] || []), message,]

            return { messages: newMessages }
        }

        case REMOVE_MESSAGE_FROM_CHAT: {
            if (!state.messages.hasOwnProperty(action.payload)) {
                return state
            }

            const newMessages = { ...state.messages };
            delete newMessages[action.payload];

            return { messages: newMessages }
        }

        default: { return state; }

    }
}