import React from "react";

export default function About(props) {
  // const [mystyle, setmystyle] = useState({
  //   color: "black",
  //   backgroundColor: "white",
  // });

  let mystyle = {
    color: props.mode==="dark"? "white" : "black",
    backgroundColor : props.mode==="dark"? "rgba(84, 87, 178, 1)" : "white",
    // border: "2px solid white"
  }


  //burtton was created;

  // const [mybtn, setmybtn] = useState("Enable to dark mode");

  // const modechange = () => {
  //   if (mystyle.color === "black") {
  //     setmystyle({
  //       color: "white",
  //       backgroundColor: "black",
  //     });
  //     setmybtn("Enable to Light mode");
  //   } else {
  //     setmystyle({
  //       color: "black",
  //       backgroundColor: "white",
  //     });
  //     setmybtn("Enable to dark mode");
  //   }
  // };

  return (
    <div className="container">
      <h2  style={{ color: props.mode==="dark"? "white" : "black",}}>About us </h2>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              type="button"
              style={mystyle}
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
             <strong> Analysize your Text</strong>
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={mystyle}>
              <strong>This is the first item’s accordion body.</strong> It is
              shown by default, until the collapse plugin adds the appropriate
              classes that we use to style each element. These classes control
              the overall appearance, as well as the showing and hiding via CSS
              transitions. You can modify any of this with custom CSS or
              overriding our default variables. It’s also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              style={mystyle}
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
             <strong>Free using</strong>

            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={mystyle}>
              <strong>This is the second item’s accordion body.</strong> It is
              hidden by default, until the collapse plugin adds the appropriate
              classes that we use to style each element. These classes control
              the overall appearance, as well as the showing and hiding via CSS
              transitions. You can modify any of this with custom CSS or
              overriding our default variables. It’s also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              style={mystyle}
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              <strong>relable</strong>
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={mystyle}>
              <strong>This is the third item’s accordion body.</strong> It is
              hidden by default, until the collapse plugin adds the appropriate
              classes that we use to style each element. These classes control
              the overall appearance, as well as the showing and hiding via CSS
              transitions. You can modify any of this with custom CSS or
              overriding our default variables. It’s also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
            </div>
          </div>
        </div>
      </div>

      {/* <div className="container">
    <button type="button" onClick={modechange} className="btn btn-primary my-2 ">{mybtn}</button>
</div> */}
    </div>
  );
}
