import { ListItem, ListItemText } from '@material-ui/core';
import { Link } from 'react-router-dom';
import propTypes from 'prop-types';

import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

//вывод одного элемента списка чатов
/* export const OneChat = ({ name, id }) => {

    return (
        <ListItem component={Link} to={`/chats/${id}`}>
            <ListItemText>
                {name} - {id}

            </ListItemText>

        </ListItem>
    );
};
 */
export const OneChat = (props) => {

    return (
        <ListItem component={Link} to={`/chats/${props.id}`}>
            <ListItemText>
                {props.name} - {props.id}

                <IconButton aria-label="delete" onClick={props.onDelete}>
                    <DeleteIcon />
                </IconButton>
            </ListItemText>

        </ListItem>
    );
};
//<Button onClick={props.onDelete} variant="primary">Delete</Button>

OneChat.propTypes = {
    id: propTypes.string,
    name: propTypes.string
}