// @ts-check
import React from "react";

interface IProps {
  id: string;
  description: string;
  price: number;
  key: string;
}


const Card = (props: IProps) => {

  const test = (id: string) => {
    console.log("id: " + id);
  };

  const testDiv = (id: string) => {
    console.log("Divid: " + id);

  };

  const porcentaje: number = 30;
  return (
    <div className="card">
      <p>#{props.id}</p>
      <img
        src={"/img/" + props.id + ".png"}
        alt=""
        onClick={() => testDiv(props.id)}
      />
      <p>{props.description}</p>
      <p>${Math.round(props.price - (props.price * porcentaje) / 100)}</p>
      <p>(${Math.round(props.price)})</p>
      <p>-{porcentaje}%</p>
      <button type="submit" className="btn-shop" onClick={() => test(props.id)}>
        Comprar
      </button>
      <button type="submit" className="btn-shop">
        Agregar al carro
      </button>
    </div>
  );
};

export default Card;
