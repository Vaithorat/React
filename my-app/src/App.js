// import logo from './logo.svg';
import { useState } from "react";
import "./App.css";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

function App() {
  const [mode, setMode] = useState("light");
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = 'black'
    } else {
      setMode("light");
      document.body.style.backgroundColor = 'white'

    }
  };
  // Shows whether dark mode is enabled or not
  return (
    <>
      <Navbar
        title="TextUtils"
        mode={mode}
        toggleMode={toggleMode}
        aboutText="About"
      />
      <div className="container my-3">
        <TextForm heading="Enter text" mode = {mode} />
        {/* <About></About> */}
      </div>
    </>
  );
}

export default App;
