import React from "react";

interface IProps {
  id: string;
  description: string;
  price: number;
  key: string;
}


const Card = (props: IProps) => {
  const porcentaje: number = 30;
  return (
    <div className="card">
      <p>{props.description}</p>
      <img src={"/img/" + props.id + ".png"} alt="" />
      <p>${Math.round(props.price - (props.price * porcentaje) / 100)}</p>
      <p>(${Math.round(props.price)})</p>
      <p>-{porcentaje}%</p>
      <button type="submit" className="btn-shop">Comprar</button>
      <button type="submit" className="btn-shop">Agregar al carro</button>
    </div>
  );
};


export default Card;
