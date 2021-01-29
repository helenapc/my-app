// @ts-check

import React from "react";
import "./App.css";
import "./components/Card.css";
import "./components/BtnAdd.css";
import "./components/Modal.css";
import "./components/LateralBar.css";
import Card from "./components/Card";

// import data from "./data.json";
import CardTwo from "./components/CardTwo";

function App() {
  // const [dataJson, setDataJson] = useState(data);

  console.log("init");
  console.log(document.body.clientWidth);

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

  
  const filter = () => {
    const pepe = [...dataJson];
    pepe.map((e) => {
      return e.type === "anillo" ? (e.check = !e.check) : e;
    });
    setDataJson(pepe);
  };
  */

  const bar = document.getElementsByClassName("lateral-bar");
  const lateralBar = () => {
    if (bar[0].classList.contains("show-bar")) {
      bar[0].classList.remove("show-bar");
      document.body.classList.remove('overflow')
    } else {
      bar[0].classList.add("show-bar");
      document.body.classList.add('overflow')
    }
  };

  return (
    <div className="mainApp" id="home">
      {/* <button onClick={() => filter()}> useState </button> */}

      <div className="nav">
        <h1>Diamantina</h1>
        <div className="link">
          <button onClick={() => lateralBar()}>☰</button>
          {/* <button onClick={() => lateralBar()}>
            <b>_</b>
            <b>_</b>
            <b>_</b>
          </button> */}
          {/* <button>✕</button> */}
          <a href="#home">Inicio</a>
          <a href="#tag01">Tag01</a>
          <a href="#tag02">Tag02</a>
          <a href="#tag03">Tag03</a>
        </div>
      </div>

      <div className="title"></div>

      <div className="lateral-bar">
        <a href={"#home"} onClick={() => lateralBar()}>Home</a>
        <a href={"#tag01"} onClick={() => lateralBar()}>Tag01</a>
        <a href={"#tag02"} onClick={() => lateralBar()}>Tag02</a>
        <a href={"#tag03"} onClick={() => lateralBar()}>tag03</a>
      </div>
      <h1 id="tag01" className="div">Tag01</h1>
      <div className="items-cards">
        {/* <Card filtro={stateFiltro}/> */}
        <CardTwo />
      </div>
      <h1 id="tag02" className="div">Tag02</h1>
      <div className="items-cards">
        {/* <Card filtro={stateFiltro}/> */}
        <Card />
      </div>
      <h1 id="tag03" className="div">Tag03</h1>
      <div className="items-cards">{/* <Card filtro={stateFiltro}/> */}
        <Card />
      </div>
    </div>
  );
}

export default App;
