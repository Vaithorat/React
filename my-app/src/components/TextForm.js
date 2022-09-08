import React, { useState } from "react";

export default function TextForm(props) {
    const handleUpClick = () =>{
        console.log("Uppercase was clicked")
        let newText = text.toUpperCase()
        setText(newText)
    }
    const handleOnChange = (event) =>{
        console.log("On change")
        setText(event.target.value)
    }
  const [text, setText] = useState("Enter text here");
  
  return (
    <div>
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
      <button className="btn btn-primary" onClick={handleUpClick}>Convert to UpperCase</button>
    </div>
  );
}
