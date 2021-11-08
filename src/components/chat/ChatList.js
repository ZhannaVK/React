import { List } from "@material-ui/core";
import { OneChat } from "./Chat";

//вывод  списка чатов
export const ChatList = ({ list }) => {
    return (<List>
        {
            list.map((item) => (
                <OneChat key={item.id} {...item} />
            ))
        }
        <OneChat id="1" name="empty" />
    </List>
    );
};

