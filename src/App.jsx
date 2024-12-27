import "./App.css";
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
// import About from "./components/About";
function App() {
  const [mode, setMode] = useState("light");

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      type: type,
      msg: message,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  const toggleMode = () => {
    if (mode == "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#055052";
      showAlert("sucess", "Dark mode has be enable ");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("sucess", "Light mode has be enable");
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

      <Alert alert={alert} />
      <div className="container my-3">
        <TextForm
          heading="Enter a Text To Analysed"
          showAlert={showAlert}
          mode={mode}
        />

        {/* <About /> */}
      </div>
    </div>
  );
}

export default App;
