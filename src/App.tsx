import React from "react";
import "./App.css";
import IrelandMap from "./Map";

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <div id="ireland" style={{ height: "20px", display: "none" }}></div>
        <IrelandMap />
      </header>
    </div>
  );
};

export default App;
