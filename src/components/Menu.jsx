import React from "react";

const Menu = () => {
  return (
    <>
      <header className="menu">
        <img src="/img/logo.png" alt="" className="logo" />
        <div className="listMenu">
          <div className="itemMenu">Ver Productos</div>
          <div className="itemMenu">Preguntas Frecuentes</div>
          <div className="itemMenu">Testimonios</div>
        </div>
      </header>
      <header className="menuBurger">
        <div className="iconBurger">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className="listMenu">
          <div className="itemMenu"></div>
          <div className="itemMenu"></div>
          <div className="itemMenu"></div>
        </div>
      </header>
    </>
  );
};

export default Menu;
