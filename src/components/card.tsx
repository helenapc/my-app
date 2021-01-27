// @ts-check
import React, { useState } from "react";
import data from "../data.json";
import BtnAdd from "./BtnAdd";
import Modal from "./Modal";

const Card = (): any => {
  const porcentaje: number = 10;
  const [dataJson, setDataJson] = useState(data);

  const chk = (chk: string): any => {
    const tempData = [...dataJson];
    tempData.map((ev) => {
      return ev.id === chk ? (ev.check = !ev.check) : null;
    });
    setDataJson(tempData);
  };


  const modal = (modal: string) => {
    console.log('ok');
    const tempModal = [...dataJson];
    tempModal.map((ev) => {
      return (ev.modal = (ev.id === modal) ? !ev.modal : false) ;
    });
    setDataJson(tempModal);
  };


  return dataJson.map((e) => (
    <div key={e.id} className="card">
      <p>Diamantina</p>
      <p>#{e.id}</p>

      <img className="img" onClick={() => modal(e.id)} src={"/img/" + e.id + ".png"} alt=" " />

      <p>{e.description}</p>
      <p>${Math.round(e.price - (e.price * porcentaje) / 100)}</p>
      <p>(${Math.round(e.price)})</p>
      <p>-{porcentaje}%</p>

      <BtnAdd id={e.id} check={e.check} onClick={() => chk(e.id)} />
      <Modal id={e.id} open={e.modal} onClick={() => modal(e.id)}/>

    </div>
  ));
};

export default Card;
