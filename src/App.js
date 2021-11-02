import { makeStyles } from '@material-ui/core/styles';
import { mergeClasses } from '@material-ui/styles';
//import styles from './App.module.css';
import './App.css';
import { Chatik } from './components/message';      //index.js можно не писать
import { ChatBD } from './components/chat';
//import { ChatList } from './components/chat/ChatList';

//разделение окна на 2 части (список чатов/ чат)
const useStyles = makeStyles({
    columns: {
        display: "grid",
        gridTemplateColumns: "200px 1fr"
    }
});

export function App() {
    const classes = useStyles();
    return (
        <div className={classes.columns}>
            <div>
                <ChatBD />
            </div>

            <div>
                <Chatik />
            </div>
        </div>
    );
}


/* export default App; */