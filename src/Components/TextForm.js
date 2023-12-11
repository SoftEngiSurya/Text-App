import React, {useState} from 'react'
export default function Textform(props) {
    const handUpClick=()=>{
        let newText=text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to UpperCase","success")
    }
    const handOnChange=(event)=>{
        setText(event.target.value)
    }
    const handLowerClick=()=>{
        let lowcase=text.toLowerCase();
        setText(lowcase)
        props.showAlert("Converted to LowerCase","success")
    }
    const handClear=()=>{
        setText(" ")
        props.showAlert("Clear All","danger")
    }
    const copytext=()=>{
        let text=document.getElementById("exampleFormControlTextarea1");
        text.select();
        navigator.clipboard.writeText(text.value)
        props.showAlert("Copy Text","warning")
    }
   const extraspace=()=>{
    let newtext=text.split(/[ ]+/);
    setText(newtext.join(" "))
   }

    const [text,setText] = useState('');
  return (
    <>
    <div className='container dark' style={{color: props.mode==='dark'?'white':'#0b3a7e'}}>
        <h1>{props.heading}</h1>
        <div className=" mb-3" style={{color:props.mode==='dark'?'white':'black'}}>
  <textarea className="form-control " value={text} onChange={handOnChange} style={{backgroundColor:props.mode==='dark'?'grey':'white', color:props.mode==='dark'?'white':'black'}} id="exampleFormControlTextarea1" rows="8" ></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-2 my-2" onClick={handLowerClick}>Convert to Lowcase</button>
        <button className="btn btn-primary mx-2 my-2" onClick={handClear}>Clear</button>
        <button className="btn btn-primary mx-2 my-2" onClick={copytext}>Copy Text</button>
        <button className="btn btn-primary mx-2 my-2" onClick={extraspace}>Remove space</button>
    </div>
    <div className="container my-2 " style={{color:props.mode==='dark'?'white':'#0b3a7e'}}>
        <h1>Your Text Summary</h1>
        <p>{text.split(" ").length} words {text.length} characters</p>
        <p>{0.008*text.split(" ").length}Minutes to read</p>
        <h3>Preview</h3>
        <h6>{text.length>0?text:"Enter Some Thing to Preview Here"}</h6>
    </div>
    </>
  )
}
