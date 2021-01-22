import React from "react";



const Card = (props: IProps) => {
  const porcentaje:number = 20;
  return (
    <div className="card">
      <img src={"/img/" + props.id + ".jpg"} alt="" />
      <h3>{props.description}</h3>
      <h3>${Math.round(props.price)}</h3>
      <h4>(${Math.round(props.price + props.price * porcentaje/100)})</h4>
    </div>
    
  );
};

interface IProps {
  id: string;
  description: string;
  price: number;
  key: string;
}

export default Card;
