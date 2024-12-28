import React from "react";
import { useState } from "react";

export default function About() {
  const [myStyle, setMyStyle] = useState({
    color: "white",
    backgroundColor: "gray",
  });

  const [btnText, setBtnText] = useState("Enable Dark  Mode");

  let toggleStyle = () => {
    if (myStyle.color === "white") {
      setMyStyle({
        color: "gray",
        backgroundColor: "white",
      });

      setBtnText("Enable Dark Mode");
    } else {
      setMyStyle({
        color: "white",
        backgroundColor: "gray",
        border: "1px dotted black",
      });
      setBtnText("Enable Light Mode");
    }
  };

  //   const myStyle={
  //   color: 'white',
  //   backgroundColor: 'black'
  //  }
  return (
    <div className="container" style={myStyle}>
      <h1>About Us</h1>

      <div className="accordion" id="accordionExample">
        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              style={myStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              1: About TextUtils
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <strong>Content : </strong> TextUtils is a versatile text
              manipulation tool designed to make your text editing tasks simple
              and efficient. Whether you're formatting text, analyzing its
              structure, or transforming it to fit your needs, TextUtils
              provides an easy-to-use interface with a range of powerful
              features. Our goal is to save your time and enhance productivity.
            </div>
          </div>
        </div>
        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed"
              style={myStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              2: Features
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <strong>Content : </strong>
              "TextUtils offers a range of features to streamline your text
              management: Convert to Uppercase/Lowercase: Instantly change the
              case of your text. Remove Extra Spaces: Clean up unnecessary
              spaces for a neat and professional look. copy Text: Quickly copy
              your formatted text to the clipboard. Dark Mode: Reduce eye strain
              and switch to a sleek dark theme. Real-Time Alerts: Get instant
              feedback with our alert system for all actions."
            </div>
          </div>
        </div>
        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed"
              style={myStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              3: Why Choose TextUtils?
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
            <strong>Content : </strong>
            
               "TextUtils stands out because of its simplicity and
              efficiency. It’s lightweight, fast, and packed with essential text
              utilities, all in one place. With the added convenience of React
              Router, you can easily navigate between features, and the
              responsive design ensures seamless usage on any device. Perfect
              for students, professionals, and anyone needing quick text
              manipulation tools."
            </div>
          </div>
        </div>
      </div>

      <div className="container my-3">
        <button type="button" onClick={toggleStyle} className="btn btn-primary">
          {btnText}
        </button>
      </div>
    </div>
  );
}
