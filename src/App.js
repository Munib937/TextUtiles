import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import About from "./components/About";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";

  import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Routes
  } from "react-router-dom";



function App() {
const [mode, setmode] = useState('light');
const [alert, setalert] = useState(null);

  const showAlert = (massege,type)=>{
  setalert({
    msg:massege,
    type:type,
  })

  setTimeout(()=>{
   setalert("null");
  },1500)
  }

  // remove previous class

  const removeclasses=()=>{
    document.body.classList.remove("bg-primary")
    document.body.classList.remove("bg-success")
    document.body.classList.remove("bg-warning")
    document.body.classList.remove("bg-danger")
    document.body.classList.remove("bg-light")
    document.body.classList.remove("bg-dark")
  }


const togglemode = (cls)=>{
  removeclasses();
  console.log(cls)
  document.body.classList.add('bg-' + cls)
  if(mode==="light"){
    setmode("dark");
    document.body.style.backgroundColor="#4b4f89"
    showAlert("Dark mode has been Enable" , "success");
    // document.title="TextUtiles-Dark"
     
  //  title change krnay ka liya;

    // setInterval(()=>{
    //   document.title="TextUtiles- is amazing"
    // },2000);

    //  setInterval(()=>{
    //   document.title="TextUtiles- is install"
    // },1500);

  }else{
    setmode("light")
    document.body.style.backgroundColor="white"
    showAlert("light mode has been Enable" , "success");
      // document.title="TextUtiles-light"
  }
}

  return (

  <>

  <Router>
    <Navbar title="TextUtils" aboutUs="About" mode={mode} togglemode={togglemode} />
    <Alert alert={alert} />
    <div className="container my-3">
      <Routes>
        {/* ✅ Correct way */}
        <Route exact path="/about" element={<About  mode ={mode}/>} />
       
        <Route
         exact path="/"
          element={ <TextForm heading="Word Counter , TextUppercase , TextLowercase , cleartext" mode={mode} />}
        />
      </Routes>
    </div>
    </Router>
  </>
);
}

export default App;


    
