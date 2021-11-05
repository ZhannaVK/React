import { Switch, Route, Link } from 'react-router-dom';
import { Button } from '@material-ui/core';
import { Chats } from '../Chats';
import { Home } from '../Home';

export const Profile = () => {
    return (
        <div>
            <h1>PROFILE</h1>

            <Button to="/" component={Link}>Home</Button>
            <Button to="/chats" component={Link}>Chats</Button>

            <Switch>
                <Route component={Chats} path="/chats" />
                <Route component={Home} path="/home" />

            </Switch>
        </div>
    );
};