import React from "react";
import "./Modal.css";

// const styleModal = {
//   height: "200px",
//   width: "200px",
//   background: "red",
// };

const Modal = (props: IModal) => {



  if (!props.open) return null;
  return (
    <div>
      <div className="modal">
        {/* <h1>{props.id}</h1> */}
        <button onClick={props.onClick}>✕</button>
        <img className="imgModal" src={"/img/" + props.id + ".png"} alt=" " />
      </div>
      <div className="bkModal"></div>
    </div>
  );
};


interface IModal {
  id: string;
  open: Boolean;
  onClick: () => void;
}

export default Modal;
