import React, {useState} from 'react'

export default function TextForm(props) {
    const [text,setText] = useState('Enter Text here');
    const handUpCase = () => {
        // console.log("handUpCase Clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handLoCase = () => {
        // console.log("handUpCase Clicked" + text);
        let newText = text.toLowerCase();
        setText(newText);
    }
    const handClear = () => {
        // console.log("handUpCase Clicked" + text);
        let newText = '';
        setText(newText);
    }
    const handRev = () => {
        // console.log("handUpCase Clicked" + text);
        let newText = text.split("").reverse().join("");
        setText(newText);
    }
    const handleOnChange = (event) => {
        // console.log("onChange Clicked");
        setText(event.target.value);
    }
    // text="new text" //wrong way
    // setText("new text") //correct way
    return (
        <>
        <div className="container" style={{color: props.mode==='dark'?'white':'black'}} >
        
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'black'}} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handUpCase}>Convert to Upper Case</button>
        <button className="btn btn-primary mx-1" onClick={handLoCase}>Convert to Lower Case</button>
        <button className="btn btn-primary mx-1" onClick={handClear}>Clear</button>
        <button className="btn btn-primary mx-1" onClick={handRev}>Reverse Text</button>
        </div>
        <div className="container my-3" style={{color: props.mode==='dark'?'grey':'white'}}>
        <h1>Your text summary</h1>
        {text.split(' ').length} words and {text.length} characters
        <p>That is {0.008 * text.split(' ').length} minutes to read</p>
        <h3>Preview</h3>
        {text}
        </div>
        </>
    )
}
