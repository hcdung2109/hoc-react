import './App.css';
import RuseState from "./Components/RuseState";
import RuseRef from "./Components/RuseRef";
import {useState, createContext} from "react";
import RuseImperativeHandle from "./Components/RuseImperativeHandle";

export const TestContext = createContext(); // return object gồm provider & consumer

function App() {
    const [dulieu, setDulieu] = useState('test truyen du lieu');

    return (
        <TestContext.Provider value={dulieu}>
            <div className="App">
                <RuseState/>
                <RuseRef/>
                <RuseImperativeHandle/>
            </div>
        </TestContext.Provider>
    );
}

export default App;
