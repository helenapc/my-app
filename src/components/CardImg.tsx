import React from "react";

interface ICardImg {
    id: String;
    click: () => void;
}

export default function CardImg(props:ICardImg) {
  return (
    <div>
      <img
      className="img"
      onClick={props.click}
      src={"/img/" + props.id + ".png"}
      alt=" "
      />
    </div>
  );
}
