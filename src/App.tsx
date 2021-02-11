// @ts-check

import React from "react";
import "./App.css";
import "./components/Card.css";
import "./components/BtnAdd.css";
import "./components/Modal.css";
import "./components/Nav.css";
import "./components/Title.css";
import "./components/LateralBar.css";
import Card from "./components/Card";

// import data from "./data.json";
import CardTwo from "./components/CardTwo";

function App() {
  // const [dataJson, setDataJson] = useState(data);

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
      document.body.classList.remove("overflow");
    } else {
      bar[0].classList.add("show-bar");
      document.body.classList.add("overflow");
    }
  };

  return (
    <div className="mainApp" id="home">
      {/* <button onClick={() => filter()}> useState </button> */}
      <div className="nav">
        <h1>Diamantina</h1>
        {/* <button className="update">update</button> */}


        <div className="link">
          <button onClick={() => lateralBar()}>☰</button>
          <a className="nav-text" href="#Inicio">Inicio</a>
          <a className="nav-text" href="#Anillos">Anillos</a>
          <a className="nav-text" href="#Cadenas">Cadenas</a>
          <a className="nav-text" href="#Dijes">Dijes</a>
          <a id="account" href="#home">🙍‍♂</a>
          <a id="shop" href="#home">🛒</a>
        </div>


      </div>

      <div className="title"></div>

      <div className="lateral-bar">
        <a href={"#Inicio"} onClick={() => lateralBar()}>Inicio</a>
        <a href={"#Anillos"} onClick={() => lateralBar()}>Anillos</a>
        <a href={"#Cadenas"} onClick={() => lateralBar()}>Cadenas</a>
        <a href={"#Dijes"} onClick={() => lateralBar()}>Dijes</a>
      </div>

      <h1 id="Anillos" className="div">Anillos</h1>
      <div className="items-cards">
        {/* <Card filtro={stateFiltro}/> */}
        <CardTwo type='anillo' />
      </div>

      <h1 id="Anillos2" className="div">Anillos2</h1>
      <div className="items-cards">
        {/* <Card filtro={stateFiltro}/> */}
        <Card type='anillo'/>
      </div>

      <h1 id="Cadenas" className="div">Cadenas</h1>
      <div className="items-cards">
        {/* <Card filtro={stateFiltro}/> */}
        <Card type='cadena'/>
      </div>
      
      <h1 id="Dijes" className="div">Dijes</h1>
      <div className="items-cards">
        {/* <Card filtro={stateFiltro}/> */}
        <Card type='dije'/>
      </div>
    </div>
  );
}

export default App;
