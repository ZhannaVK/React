
//import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { InputForm } from '../../components/message/InputMessage';
import { MessageList } from '../../components/message/MessageList';

//import { getChatById } from '../../store/chats/selectors';
import { withChatMessages } from "../../hocs/withChatMessages";


export const MessagesRender = ({
    messageList, hasChat, onSendMesssage, nameChat,
}) => {


    if (!hasChat) {
        return <Redirect to='/chats' />;
    };

    return (
        <>
            <h1 className="headerChat">{nameChat}</h1>
            <div className="areaChat">
                <InputForm onSend={onSendMesssage} />
                <MessageList messageList={messageList} />
            </div>
        </>
    );

};

export const Messages = withChatMessages(MessagesRender);

