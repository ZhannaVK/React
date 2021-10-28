import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css/normalize.css'
import './index.css';
//import App from './App';
import { App, message1 } from './App';
//import { Message } from './components/Message'


ReactDOM.render(<App />,
    document.getElementById('root'));


//React.StrictMode - включает дополнительные проверки кода со стороны react

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals


//reportWebVitals();  было при генерации