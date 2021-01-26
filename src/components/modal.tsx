import React from "react";

interface IModal {
  id: string;
    open: Boolean;
//   open: () => Boolean;
}

const styleModal = {
  height: "200px",
  width: "200px",
  background: "red",
  zIndex: 100,
};

const Modal = (props: IModal) => {
  if (!props.open) return null;
  return (
    <div style={styleModal}>
      <img src={"/img/" + props.id + ".png"} alt=" " />
      <h1>{props.id}</h1>
    </div>
  );
};

export default Modal;
