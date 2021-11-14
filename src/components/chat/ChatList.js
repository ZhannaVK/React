import { List } from "@material-ui/core";
import { OneChat } from "./Chat";
// import IconButton from '@material-ui/core/IconButton';
// import DeleteIcon from '@material-ui/icons/Delete';
import { connect, useSelector } from 'react-redux';
import { removeChat } from '../../store/chats/actions';
import { removeMessagesFromChat } from '../../store/messages/actions';

import { getChatList } from '../../store/chats/selectors';


import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles((theme) => ({
    lines: {
        display: "flex",
        justifyContent: "space-between",

        height: theme.spacing(5),

    },
}));

//вывод  списка чатов

export const ChatListRender = ({ list, removeChat }) => {
    const classes = useStyles();
    return (<List>
        {
            list.map((item) => (
                <div className={classes.lines}>
                    <OneChat
                        onDelete={() => {
                            removeChat(item.id);
                        }}
                        key={item.id} {...item} />

                </div>
            ))
        }
    </List>
    );
};

const mapStateToProps = (state) => ({
    list: getChatList(state)
})


const mapDispatchToProps = {
    removeChat
}


export const ChatList = connect(mapStateToProps, mapDispatchToProps)(ChatListRender);

/* export const ChatList = ({ list, removeChat }) => {
    const classes = useStyles();
    return (<List>
        {
            list.map((item) => (
                <div className={classes.lines}>
                    <OneChat
                        onDelete={() => {
                            removeChat(item.id);
                        }}
                        key={item.id} {...item} />

                </div>
            ))
        }
    </List>
    );
}; */
//        <OneChat id="1" name="empty" />
/**<IconButton aria-label="delete" action={onClick}>
                        <DeleteIcon />
                    </IconButton> */