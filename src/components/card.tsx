// @ts-check
import React, { useState } from "react";
import data from "../data.json";

const Card = (): any => {
  const porcentaje: number = 10;
  const [newData] = useState(data);

  

  return newData.map((e) => (
    <div key={e.id} className="card">
      {/* <p>Diamantina</p> */}
      <p>#{e.id}</p>
      <img src={"/img/" + e.id + ".png"} alt="" />
      <p>{e.description}</p>
      <p>${Math.round(e.price - (e.price * porcentaje) / 100)}</p>
      <p>(${Math.round(e.price)})</p>
      <p>-{porcentaje}%</p>

      <button type="submit" className="btn-shop">
        Comprar
      </button>

      <button type="submit" className="btn-shop">
        Agregar al carro
      </button>
    </div>
  ));
};

export default Card;
