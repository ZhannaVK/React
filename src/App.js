import { Provider } from "react-redux";
import { store, persistor } from './store';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import { PersistGate } from "redux-persist/integration/react";
import { Button } from '@material-ui/core';
import { Home } from './routes/Home';
import { Profile } from './routes/Profile';
import { Chats } from './routes/Chats';
import { Users } from './routes/Users';

import './App.css';


export function App() {

    return (
        <div>
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                    <BrowserRouter>
                        <Button to="/" component={Link}>Home</Button>
                        <Button to="/profile" component={Link}>Profile</Button>
                        <Button to="/chats" component={Link}>Chats</Button>
                        <Button to="/users" component={Link}>Users</Button>
                        <Switch>
                            <Route component={Chats} path="/chats" />
                            <Route component={Profile} path="/profile" />
                            <Route component={Users} path="/users" />
                            <Route component={Home} path="/" />
                        </Switch>
                    </BrowserRouter>
                </PersistGate>
            </Provider>
        </div>
    )
}


