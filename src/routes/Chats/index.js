import { Switch, Route } from 'react-router-dom';
import { ChatList } from '../../components/chat/ChatList';
import { Messages } from '../Messages';
import { makeStyles } from '@material-ui/core/styles';

import { CHATS } from '../../mocks/chats';


const useStyles = makeStyles({
    columns: {
        display: "grid",
        gridTemplateColumns: "300px 1fr"
    }
});

export const Chats = () => {
    const classes = useStyles();
    return (
        <div className={classes.columns}>
            <ChatList list={CHATS} />

            <div>
                <Switch>
                    <Route component={Messages} path="/chats/:chatID" />
                </Switch>
            </div>
        </div>
    );
}