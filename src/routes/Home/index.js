import { Switch, Route, Link } from 'react-router-dom';
import { Button } from '@material-ui/core';
import { Profile } from '../Profile';
import { Chats } from '../Chats';

export const Home = () => {
    return (
        <div>
            <h1>HOME</h1>

            <Button to="/profile" component={Link}>Profile</Button>
            <Button to="/chats" component={Link}>Chats</Button>

            <Switch>

                <Route component={Chats} path="/chats" />
                <Route component={Profile} path="/profile" />
                {/* <Route component={Home} path="/" /> */}
            </Switch>
        </div >
    );
};

