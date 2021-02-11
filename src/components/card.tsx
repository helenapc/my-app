// @ts-check
import React, { useState } from "react";
import data from "../data.json";
import BtnAdd from "./BtnAdd";
import Modal from "./Modal";

interface ICardTwo {
  type: string;
}

const Card = (props: ICardTwo): any => {
  const porcentaje: number = 10;
  const [dataJson, setDataJson] = useState(data);

  const chk = (chk: string): any => {
    const tempData = [...dataJson];
    tempData.map((ev) => {
      return ev.id === chk ? (ev.check = !ev.check) : null;
    });
    setDataJson(tempData);
  };

  const modal = (id: string) => {
    document.body.classList.add("overflow");
    const tempModal = [...dataJson];
    tempModal.map((ev) => {
      return (ev.modal = ev.id === id ? !ev.modal : false);
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
      return (
        <div key={e.id} className="card">
          <p>Diamantina</p>
          <p>#{e.id}</p>

          <img
            className="img"
            onClick={() => modal(e.id)}
            src={"/img/" + e.id + ".png"}
            alt=" "
          />

          <p>{e.description}</p>
          <p>${Math.round(e.price - (e.price * porcentaje) / 100)}</p>
          <p>(${Math.round(e.price)})</p>
          <p>-{porcentaje}%</p>

          <BtnAdd id={e.id} check={e.check} onClick={() => chk(e.id)} />
          <Modal
            description={e.description}
            id={e.id}
            open={e.modal}
            onClick={() => closeModal(e.id)}
          />
        </div>
      )
  });
};

export default Card;
