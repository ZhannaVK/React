import { Switch, Route, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { TOGGLE_CHECK_PROFILE } from '../../store/profile/action';
import { Toolbar, Button } from '@material-ui/core';
import { Chats } from '../Chats';
import { Home } from '../Home';
import { makeStyles } from "@material-ui/core/styles";

//стили для @material-ui
const useStyles = makeStyles((theme) => ({
    input: { marginLeft: theme.spacing(2), },
}));

export const Profile = () => {
    const dispatch = useDispatch();
    const isCheck = useSelector((state) => state.isCheck);
    const classes = useStyles();

    return (
        <div>
            <h1>PROFILE</h1>
            <Toolbar>
                <Button to="/" component={Link}>Home</Button>
                <Button to="/chats" component={Link}>Chats</Button>

                <Switch>
                    <Route component={Chats} path="/chats" />
                    <Route component={Home} path="/home" />

                </Switch>
            </Toolbar>
            <input type="checkbox" className={classes.input} checked={isCheck} onChange={() => {
                dispatch({ type: TOGGLE_CHECK_PROFILE })
            }} />
        </div>
    );
};