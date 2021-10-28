//import logo from './logo.svg';
//import styles from './App.module.css';
import './App.css';
import { InputForm } from './components/InputMessage'


export const message1 = "Всем привет!"

export function App() {
    return (
        <div className="App">
            <h1 className="headerChat">Чатик</h1>
            <div className="areaChat">
                <InputForm />
            </div>

        </div>
    );
}


/* export default App; */