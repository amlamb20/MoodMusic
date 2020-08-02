import React from "react";
import "./App.css";
import Chords from "./components/Chords";
import NavbarTop from "./components/NavbarTop";
import Piano from "./components/Piano";

function App() {
  return (
    <div className="App">
      <NavbarTop />
      <Chords />
    </div>
  );
}

export default App;
