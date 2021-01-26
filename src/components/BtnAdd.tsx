import React from "react";

export default function BtnAdd(props: IBnt) {
  return (
    <button
      onClick={props.onClick}
      style={{background: props.check ? "#fff" : "#000", color: props.check ? "#000" : "#fff",}}
      type="submit"
      className="btn-shop"
    >
      {!props.check ? "Agregar al carrito 🛒" : "Agregado 🛒"}
    </button>
  );
}

interface IBnt {
  id: string;
  check: boolean;
  onClick: () => void;
}
