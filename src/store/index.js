import { combineReducers, createStore } from "redux";
import { profileReducer } from './profile/reducer';
import { chatReduser } from './chats/reducer';
import { messagesReduser } from './messages/reducer';

const mainReducer = combineReducers({
    profile: profileReducer,
    chats: chatReduser,
    messages: messagesReduser,
})

export
    const store = createStore(
        mainReducer,
        window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__()
    );