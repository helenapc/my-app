// @ts-check
import React, { useState } from "react";
import data from "../data.json";
import BtnAdd from "./BtnAdd";
import Modal from "./Modal";

const Card = (): any => {
  const porcentaje: number = 10;
  const [dataJson, setDataJson] = useState(data);
  const [openModal, setOpenModal] = useState(false);

  // const [state, setstate] = useState(initialState)

  const chk = (chk: string): any => {
    const tempData = [...dataJson];
    tempData.map((ev) => {
      return ev.id === chk ? (ev.check = !ev.check) : null;
    });
    setDataJson(tempData);
  };

  let tempOpenModal = openModal;

  const modal = (valor: string) => {
    // dataJson.map((evModal) => {
    //   return evModal.id === valor ? (tempOpenModal = !openModal) : null;
    // });
    // setOpenModal(tempOpenModal);
    console.log(valor)
  };


  return dataJson.map((e) => (
    <div key={e.id} className="card">
      <p>Diamantina</p>
      <p>#{e.id}</p>

      <img onClick={() => modal(e.id)} src={"/img/" + e.id + ".png"} alt=" " />


      <p>{e.description}</p>
      <p>${Math.round(e.price - (e.price * porcentaje) / 100)}</p>
      <p>(${Math.round(e.price)})</p>
      <p>-{porcentaje}%</p>

      <BtnAdd id={e.id} check={e.check} onClick={() => chk(e.id)} />
      <Modal id={e.id} open={openModal} />

      {/* <button onClick={() => chk(e.id)} style={{background: e.check ? '#fff' : '#000', color: e.check ? '#000' : '#fff'}} type="submit" className="btn-shop">
        {!e.check ? 'Agregar al carrito 🛒' : 'Agregado 😀'}
      </button> */}

    </div>
  ));
};

export default Card;
