import { ListItem, ListItemText } from '@material-ui/core';
import propTypes from 'prop-types';
//вывод одного элемента списка чатов
export const OneChat = ({ name }) => {
    return (
        <ListItem>
            <ListItemText>{name}</ListItemText>
        </ListItem>
    );
};

OneChat.propTypes = {

    name: propTypes.string
}