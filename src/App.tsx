// @ts-check

import React, { useState } from "react";
import "./App.css";
import "./components/card.css";
import Card from "./components/card";
import data from "./data.json";

function App() {
  const [dataJson, setDataJson] = useState(data);

  const showCard = () => {
    return dataJson.map((task) => (
      <Card
        key={task.id}
        id={task.id}
        description={task.description}
        price={task.price*2} //MULTIPLY
      />
    ));
  };

  return <div>{showCard()}</div>;
}
export default App;
