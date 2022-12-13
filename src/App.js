import './App.css';
import Navbar from "./components/Navbar";
import TextArea from "./components/TextArea";
import React, { useState } from 'react'
import Alert from './components/Alert';


function App() {
    const [mode, setmode] = useState("light")
    const [alert, setalert] = useState(null)

    const alertfunc = (type, message) => {
        setalert({
            typ: type,
            mess: message
        })
        setTimeout(() => {
            setalert(null)
        }, 2000);
    }

    const themeBtn = () => {
        if (mode === "light") {
            setmode("dark")
            document.body.style.backgroundColor = "#0c1768"
            alertfunc("success", "DarkMode has been activated")
        }
        else {
            setmode("light")
            document.body.style.backgroundColor = "#d8d8d8"
            alertfunc("success", "LightMode has been activated")
        }
    }

    return (
        <>
            <Navbar title="Text Converter" num2="About" mode={mode} themeBtn={themeBtn} />
            <Alert alert={alert} />
            <div className='container'>
                <TextArea heading="Enter Text Hear" mode={mode} alertfunc={alertfunc} />
            </div>
        </>
    );
}

export default App;