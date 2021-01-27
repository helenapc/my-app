// @ts-check

import React from "react";
import "./App.css";
import "./components/Card.css";
import "./components/BtnAdd.css";
import "./components/Modal.css";
import Card from "./components/Card";

function App() {

  return (
    <div>
      {/* NAV */}
      <div style={{background:'red', height:'50px'}}></div>
      {/* NAV */}

      <div className="items-cards">
        <Card />
      </div>
    </div>
  );
}

export default App;
