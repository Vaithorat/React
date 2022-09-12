import React, { useState } from "react";

export default function TextForm(props) {
    const handleUpClick = () =>{
        // console.log("Uppercase was clicked")
        let newText = text.toUpperCase()
        setText(newText)
    }
    const handleLowClick = () =>{
      // console.log("Uppercase was clicked")
      let newText = text.toLowerCase()
      setText(newText)
  }
  const handleClear = () =>{
    // console.log("Uppercase was clicked")
    let newText = ""
    setText(newText)
}
const handleExtraSpace = () =>{
  let newText = text.split(/[ ]+/)
  setText(newText.join(" "))
}
    const handleOnChange = (event) =>{
        // console.log("On change")
        setText(event.target.value)
    }

  const [text, setText] = useState("");
  
  return (
    <>
    <div className = "container">
      <h1>
        {props.heading} 
      </h1>
      <div className="mb-3">
        <textarea
        value={text}
        className="form-control"
        id="exampleFormControlTextarea1"
        rows="8"
        onChange={handleOnChange}
        ></textarea>
      </div>
      <button className="btn btn-primary mx-3" onClick={handleUpClick}>Convert to UPPER CASE</button>
      <button className="btn btn-primary mx-3" onClick={handleLowClick}>Convert to lower CASE</button>
      <button className="btn btn-primary mx-3" onClick={handleClear}>Clear</button>
      <button className="btn btn-primary mx-3" onClick={handleExtraSpace}>Remove Extra Spaces</button>
    </div>
    <div className="container my-2"> {/* my-2 adds margin of 2 */}
      <h2>Text Summary</h2>
      <p>{text.split(" ").length} Words in text and {text.length} characters in text</p>
      <p>This will take {text.split(" ").length*0.008} Minutes to read</p>
      <h2>Preview</h2>
      <p>{text}</p>
    </div>
        </>
  );
}
