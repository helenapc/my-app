// @ts-check

import React, { useState } from "react";
import "./App.css";
import "./components/Card.css";
import "./components/BtnAdd.css";
import "./components/Modal.css";
import Card from "./components/Card";
import data from "./data.json";
import CardTwo from "./components/CardTwo";

function App() {
  const [dataJson, setDataJson] = useState(data);

  console.log("test");

  // const [stateFiltro, setStateFiltro] = useState('todo')

  /* 
  const filter-anillo = () => {
    const pepe = [...dataJson];
    pepe.map((e) => {
      return e.type === "anillo"? (e.show = !e.show) : e;
    });
    setStateFiltro('anillo')
  }
  
  const filter-cadena = () => {
    const pepe = [...dataJson];
    pepe.map((e) => {
      return e.type === "anillo"? (e.show = !e.show) : e;
    });
    setStateFiltro('cadena')
  }
  
  const filter-dije = () => {
    const pepe = [...dataJson];
    pepe.map((e) => {
      return e.type === "anillo"? (e.show = !e.show) : e;
    });
    setStateFiltro('dije')
  }
  
  const filter-todo = () => {
    const pepe = [...dataJson];
    pepe.map((e) => {
      return e.type === "all"? (e.show = !e.show) : e;
    });
    setStateFiltro('todo')
  }

  */

  const filter = () => {
    const pepe = [...dataJson];
    pepe.map((e) => {
      return e.type === "anillo" ? (e.check = !e.check) : e;
    });
    setDataJson(pepe);
  };

  return (
    <div>
      {/* <button onClick={() => filter()}> useState </button> */}

      <div>
        <div className="nav">
          <h1>Diamantina</h1>
          <div className="link">
            <p onClick={() => console.log("Home")}>Home</p>
            <p onClick={() => console.log("News")}>News</p>
            <p onClick={() => console.log("Contact")}>Contact</p>
            <p onClick={() => console.log("About")}>About</p>
            <button>☰</button>
          </div>
        </div>
      </div>

      <div className="items-cards">
        {/* <Card filtro={stateFiltro}/> */}
        <CardTwo />
        <Card />
      </div>
    </div>
  );
}

export default App;
