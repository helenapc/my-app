// @ts-check
import React, { useState } from "react";
import data from "../data.json";
import Modal from "./Modal";

interface ICardTwo {
  type: string;
}

const Card = (props: ICardTwo): any => {
  const porcentaje: number = 10;
  const [dataJson, setDataJson] = useState(data);

  const modal = (modal: string) => {
    document.body.classList.add("overflow");
    const tempModal = [...dataJson];
    tempModal.map((ev) => {
      return (ev.modal = (ev.id === modal) ? !ev.modal : false) ;
    });
    setDataJson(tempModal);
  };

  const closeModal = (id: string) => {
    document.body.classList.remove("overflow");
    const tempModal = [...dataJson];
    tempModal.map((ev) => {
      return (ev.modal = ev.id === id ? !ev.modal : false);
    });
    setDataJson(tempModal);
  };

  
  return dataJson.map((e) => {
    if (props.type !== e.type) return null; 
    // if (props.type === e.type){
      return (
        <div key={e.id} className="cardTwo">
          <img className="img" onClick={() => modal(e.id)} src={"/img/" + e.id + ".png"} alt=" " />
          <p>{e.description}</p>
          <p>${Math.round(e.price - (e.price * porcentaje) / 100)}</p>
          <p>(${Math.round(e.price)})</p>
          <p>-{porcentaje}%</p>
          <Modal description={e.description} id={e.id} open={e.modal} onClick={() => closeModal(e.id)}/>
        </div>
      )
    // }else{
    //   return null
    // }
  });

};

export default Card;
