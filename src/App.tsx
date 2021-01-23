// @ts-check

import React, { useState } from "react";
import "./App.css";
import "./components/card.css";
import Card from "./components/card";
import Modal from "./components/modal";
import BtnModal from "./components/btnModal"
import data from "./data.json";

function App() {

  const [dataJson, setDataJson] = useState(data);
  const [isOpen, setIsOpen] = useState(false);

  const showCard = () => {
    return dataJson.map((task) => (
      <Card
        key={task.id}
        id={task.id}
        description={task.description}
        price={task.price * 1} //MULTIPLY
      />
    ));
  };

  return (
    <div>
      // BUSCAR COMO USAR Y MANEJAR OTROS ESTADOS DESDE DIFERENTES ARCHIVOS
      <BtnModal open={isOpen}/>
      <button onClick={() => setIsOpen(!isOpen)}>Modal(OK)</button>
      <Modal open={isOpen} />
      <div className="items-cards">{showCard()}</div>
    </div>
  );
}
export default App;
