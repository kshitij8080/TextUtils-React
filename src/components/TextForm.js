import React, {useState} from 'react'

export default function TextForm(props) {

    const handleUpClick = () =>{
        //console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to uppercase!", "success");
    }

    const handleLoClick = () =>{
      //console.log("Lowercase was clicked" + text);
      let newText = text.toLowerCase();
      setText(newText)
      props.showAlert("Converted to lowercase!", "success");
  }

    const handleCopy =() => {
      var text = document.getElementById("myBox");
      text.select();
      navigator.clipboard.writeText(text.value);
      props.showAlert("Copied to clipboard!", "success");
    }

  const handleOnclear = () =>{
    let newText = '';
    setText(newText)
    props.showAlert("Text Cleared!", "success");
  }

  const handleExtraSpaces = () =>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
    props.showAlert("Extra spaces eemoved!", "success");
    
  }

    const handleOnChange = (event) =>{
        //console.log("On change");
        setText(event.target.value)
    }

    const [text, setText] = useState('Enter text here');
  return (
    <>
    <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea className="form-control" value={text} id="myBox" onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'gray':'white', color: props.mode==='dark'?'white':'#042743'}} rows="6"></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick} >Convert to uppercase</button>
        <button className="btn btn-primary mx-2" onClick={handleLoClick} >Convert to lowercase</button>
        <button className="btn btn-primary mx-2" onClick={handleCopy} >Copy text</button>
        <button className="btn btn-primary mx-2" onClick={handleExtraSpaces} >Remove extra spaces</button>
        <button className="btn btn-primary mx-2" onClick={handleOnclear} >Clear text</button>

    </div>
    <div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
      <h2>Your text summary</h2>
      <p>{text.split(" ").length} words and {text.length} characters </p>
      <p>{0.008 * text.split(" ").length} Minutes read</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Enter something in the text box above to preview it here"}</p>
    </div>
    </>
  )
}
