import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css/normalize.css'
import './index.css';
import { App } from './App';


const Message = (props) => {
    return <div>
        <div className={props.className}>
            <p>{props.textMessage}</p>
        </div>
    </div>
}

const textSend = 'Привет, как дела?'

ReactDOM.render(<Message
    textMessage={textSend}
    className="messageOut"
/>,
    document.getElementById('root'));


//React.StrictMode - включает дополнительные проверки кода со стороны react

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals


//reportWebVitals();  было при генерации