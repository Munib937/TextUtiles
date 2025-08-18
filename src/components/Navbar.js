

import React from "react";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          {props.title}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                {props.aboutUs}
              </Link>
            </li>
          </ul>

           <div className="d-flex">
           <div className="bg-primary rounded-circle mx-2 " onClick={()=>{props.togglemode("primary")}} style={{height: "20px", width:"20px"}}></div>
           <div className="bg-danger rounded-circle mx-2 " onClick={()=>{props.togglemode("danger")}} style={{height: "20px", width:"20px"}}></div>
           <div className="bg-success rounded-circle mx-2 " onClick={()=>{props.togglemode("success")}} style={{height: "20px", width:"20px"}}></div>
           <div className="bg-warning rounded-circle mx-2 " onClick={()=>{props.togglemode("warning")}} style={{height: "20px", width:"20px"}}></div>
           {/* <div className="bg-dark rounded mx-2 " onClick={()=>{props.togglemode("dark")}} style={{height: "30px", width:"30px"}}></div> */}
           {/* <div className="bg-light rounded mx-2 " onClick={()=>{props.togglemode("light")}} style={{height: "30px", width:"30px"}}></div> */}

           </div>

              <div className={`form-check form-switch text-${props.mode==='light'? 'dark': 'light'}`}>
        <input className="form-check-input"  onClick={()=>{props.togglemode(null)}} type="checkbox" role="switch" id="switchCheckDefault" />
        <label className="form-check-label" htmlFor="switchCheckDefault">Toogle Mode</label>
      </div>
        </div>
      </div>
    </nav>
  );
}




// Navbar.propTypes = {
//   title: PropTypes.string.isRequired,
//   aboutUs: PropTypes.string,
// };


//Default props ; ue in function base components;

  // Navbar.defaultProps = {
  //   title: 'Set as title',
  //   aboutUs:'set about'
  // };
