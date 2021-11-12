import { Provider } from "react-redux";
import { store } from './store';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import { Button } from '@material-ui/core';
import { Home } from './routes/Home';
import { Profile } from './routes/Profile';
import { Chats } from './routes/Chats';

import './App.css';


export function App() {

    return (
        <div>
            <Provider store={store}>
                <BrowserRouter>


                    <Button to="/" component={Link}>Home</Button>
                    <Button to="/profile" component={Link}>Profile</Button>
                    <Button to="/chats" component={Link}>Chats</Button>
                    <Switch>
                        <Route component={Chats} path="/chats" />
                        <Route component={Profile} path="/profile" />
                        <Route component={Home} path="/" />
                    </Switch>
                </BrowserRouter>
            </Provider>
        </div>
    )
}


