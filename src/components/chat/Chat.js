import { ListItem, ListItemText } from '@material-ui/core';
import { Link } from 'react-router-dom';
import propTypes from 'prop-types';


//вывод одного элемента списка чатов
export const OneChat = ({ name, id }) => {
    return (
        <ListItem component={Link} to={`/chats/${id}`}>
            <ListItemText>{name} - {id}</ListItemText>
        </ListItem>
    );
};

OneChat.propTypes = {
    id: propTypes.string,
    name: propTypes.string
}