import React from "react";

const Card = ({ titulo, precio, foto, estado }) => {
  return (
    <div className={`card`}>
      <img className="foto" src={foto} alt={titulo} />
      <h1 className="titulo">{titulo}</h1>
      <h3 className="estado">{estado}</h3>
    </div>
  );
};

export default Card;
