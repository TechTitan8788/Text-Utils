import React , {useState} from 'react'

export default function TextForm(props) {

  const handelUpClick= () =>{
    let newText=Text.toUpperCase();
    setText(newText);
  }

  const handelOnChange= (event)=>{
    setText(event.target.value);
  }
  const [Text, setText]=useState("Enter Text Here....");

  return (
    <div>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea className="form-control " value={Text} onChange={handelOnChange}style={{ borderWidth: '8px' }} id="myBox" rows="8"></textarea>
      </div>

      <button className="btn btn-primary"  onClick={handelUpClick} >Convert To Uppercase</button>
    </div>
  );
}
