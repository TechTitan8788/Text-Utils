import "./App.css";
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
// import About from "./components/About";
function App() {
  const [mode, setMode] = useState("light");

  const toggleMode = () => {
    if (mode == "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#055052";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
    }
  };

  return (
    <div>
      <Navbar
        title="Text Utils"
        mode={mode}
        aboutText="About Us"
        toggleMode={toggleMode}
      />

      <div className="container my-3">
        <TextForm heading="Enter a Text To Analysed" mode={mode} />

        {/* <About /> */}
      </div>
    </div>
  );
}

export default App;
