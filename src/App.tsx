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

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

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
      <div className="nav">
        <h1>Diamantina</h1>

        <div className="link">
          <button onClick={() => lateralBar()}>☰</button>
          <a className="nav-text" href="/#home">
            Inicio
          </a>
          <a className="nav-text" href="/#Anillos">
            Anillos
          </a>{" "}
          {/* &#709; */}
          <a className="nav-text" href="/#Cadenas">
            Cadenas
          </a>
          <a className="nav-text" href="/#Dijes">
            Dijes
          </a>
          <a className="nav-text" href="/#Contacto">
            Contacto
          </a>
          <a id="account" href="/account">
            🙍‍♂
          </a>
          <a id="shop" href="/test">
            🛒
          </a>
        </div>
      </div>

      <div className="lateral-bar">
        <a href={"/#home"} onClick={() => lateralBar()}>
          Inicio
        </a>
        <a href={"/#Anillos"} onClick={() => lateralBar()}>
          Anillos
        </a>
        <a href={"/#Cadenas"} onClick={() => lateralBar()}>
          Cadenas
        </a>
        <a href={"/#Dijes"} onClick={() => lateralBar()}>
          Dijes
        </a>
        <a href={"/#Contacto"} onClick={() => lateralBar()}>
          Contacto
        </a>
      </div>

      <Router>
        <Switch>
          <Route exact path="/">
            <div className="title"></div>

            <h1 id="Anillos" className="div">
              Anillos
            </h1>
            <div className="items-cards">
              <CardTwo type="anillo" />
            </div>
            <div className="items-cards">
              <Card type="anillo" />
            </div>

            <h1 id="Cadenas" className="div">
              Cadenas
            </h1>
            <div className="items-cards">
              <Card type="cadena" />
            </div>

            <h1 id="Dijes" className="div">
              Dijes
            </h1>
            <div className="items-cards">
              <Card type="dije" />
            </div>
            <div id="Contacto">
              <ul>
                <li>CONTACTO</li>
                <li>CONTACTO</li>
                <li>CONTACTO</li>
                <li>CONTACTO</li>
              </ul>
            </div>
          </Route>

          <Route exact path="/test">
            <h1>hola</h1>
          </Route>

          <Route exact path="/account">
            <h1>cuenta</h1>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
