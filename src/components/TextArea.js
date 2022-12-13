import React, { useState } from 'react'



export default function TextArea(props) {
    const convUpCase = () => {
        let UpperCaseText = text.toUpperCase();
        setText(UpperCaseText);
        props.alertfunc("success","Converted to UpperCase")
    }

    const ThisIsOnChange = (event) => {
        setText(event.target.value);
    }

    const convLoCase = () => {
        let LowerCaseText = text.toLowerCase();
        setText(LowerCaseText);
        props.alertfunc("success","Converted to LowerCase")
    }

    const convExSpaces = () => {
        let removExSpaces = text.split(/ +/);
        let join = removExSpaces.join(" ");
        setText(join);
        props.alertfunc("success","Extra Spaces Removed")
    }

    const clearTxt = () => {
        setText("")
        props.alertfunc("success","Text Cleared")
    }

    const [text, setText] = useState('');



    return (
        <div >
            <div className="mt-5">
                <label htmlFor="exampleFormControlTextarea1" className="form-label display-6 " style={{ color: props.mode === ("light") ? "black" : "white" }}><strong>{props.heading}</strong></label>
                <textarea className="form-control" value={text} onChange={ThisIsOnChange} id="exampleFormControlTextarea1" rows="8" style={{ backgroundColor: props.mode === ("light") ? "white" : "#a1a1a1", color: props.mode === ("light") ? "black" : "white" }}></textarea>
            </div>
            <button disabled={text.length===0} type="button" className="btn btn-primary my-2 mx-2" onClick={convUpCase} >Convert to Uppercase</button>
            <button disabled={text.length===0} type="button" className="btn btn-primary my-2 mx-2" onClick={convLoCase} >Convert to Lowercase</button>
            <button disabled={text.length===0} type="button" className="btn btn-primary my-2 mx-2" onClick={convExSpaces} >Remove Extra Spaces</button>
            <button disabled={text.length===0} type="button" className="btn btn-primary my-2 mx-2" onClick={clearTxt} >Clear Text</button>

            <div className='mt-3' style={{ color: props.mode === ("light") ? "black" : "white" }}>
                <h1>Text Summary</h1>
                <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} WORDS AND {text.length} CHARACTERS</p>
            </div>
        </div>
    )
}