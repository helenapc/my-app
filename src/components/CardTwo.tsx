// @ts-check
import React, { useState } from "react";
import data from "../data.json";
import Modal from "./Modal";

const Card = (): any => {
  const porcentaje: number = 10;
  const [dataJson, setDataJson] = useState(data);

  const modal = (modal: string) => {
    const tempModal = [...dataJson];
    tempModal.map((ev) => {
      return (ev.modal = (ev.id === modal) ? !ev.modal : false) ;
    });
    setDataJson(tempModal);
  };


  return dataJson.map((e) => (
    <div key={e.id} className="cardTwo">
      {/* <p>Diamantina</p> */}
      {/* <p>#{e.id}</p> */}

      <img className="img" onClick={() => modal(e.id)} src={"/img/" + e.id + ".png"} alt=" " />

      <p>{e.description}</p>
      <p>${Math.round(e.price - (e.price * porcentaje) / 100)}</p>
      <p>(${Math.round(e.price)})</p>
      <p>-{porcentaje}%</p>
      <Modal description={e.description} id={e.id} open={e.modal} onClick={() => modal(e.id)}/>
    </div>
  ));
};

export default Card;
