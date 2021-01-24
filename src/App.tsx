// @ts-check

import React, { useState } from "react";
import "./App.css";
import "./components/card.css";
import BtnModal from "./components/BtnModal";
import Modal from "./components/Modal";
import Card from "./components/Card";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <BtnModal open={isOpen} />
      <button onClick={() => setIsOpen(!isOpen)}>Modal(OK)</button>
      <Modal open={isOpen} />
      <div className="items-cards">
        <Card />
      </div>
    </div>
  );
}

export default App;
