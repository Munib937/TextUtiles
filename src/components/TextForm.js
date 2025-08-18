import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");
  {
    /*ya variable state ko set krna ma help krta hain  ,,,  text , variable ;, settext , value chnge krna liya */
  }
  //  setText("Enter your Name")    iss trah sa text ko change krtay hain.update
  const handleclick = () => {
    let newtext = text.toUpperCase();
    setText(newtext);
    // props.showAlert("convert to uppercase");
  }

  const handleloclick= ()=>{
    let newtext = text.toLowerCase();
    setText(newtext);
      //  props.showAlert("convert to Lowercase");
  }

   const handleclear= ()=>{
    let newtext = '';
    setText(newtext);
  }

  const handlecopy = ()=>{
    // var text = document.getElementById("mybox");
    // text.select()
    // text.setSelectionrange(0,9999);
    // document.getSelection().removeAllRanges();
    navigator.clipboard.writeText(text)
  }


  const handleextraspace = ()=>{
    let newtext = text.split(/[  ]+/);
    setText(newtext.join(" "))
  }

  const handleonchange = (event) => {
    setText(event.target.value);
  }

  return (
    <>
    <div className="container" style={{color:props.mode==='dark'? 'white': 'black'}}>
      <h1>{props.heading}</h1>

      <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleonchange}id="mybox" rows="12" style={{backgroundColor:props.mode==='dark'? 'white': 'white', color:props.mode==='dark'? 'black': 'black'}}  ></textarea>
      </div>

      <button disabled={text.length===0} className="btn btn-primary mx-1 my-2" onClick={handleclick}> Convert to UpperCase</button>
      <button disabled={text.length===0} className="btn btn-primary" onClick={handleloclick}>  Convert to LowerCase </button>
      <button disabled={text.length===0} className="btn btn-danger mx-1 my-2" onClick={handleclear}> Clear Text </button>
      <button disabled={text.length===0} className="btn btn-success mx-1 my-2" onClick={handlecopy}> Copy Text </button>
      <button disabled={text.length===0} className="btn btn-warning mx-0 my-2" onClick={handleextraspace}> Remove Space </button>

    </div>

   
    

    <div className="container my-4" style={{color:props.mode==='dark'? 'white': 'black'}}>
      <h2>Your text summary</h2>
      <p> {text.split(/\s+/).filter((element)=>{return element.length!==0}).length} word and {text.length} character</p>
      <p>  {0.008 *text.split(" ").filter((element)=>{return element.length!==0}).length} Mintues read</p>                  {/* one word read in 0.008s*/}                
      <h2>Preview Text</h2>
      <p>{text.length>0?text: "Nothing to preview"}</p>
    </div>
    </>
  );
}