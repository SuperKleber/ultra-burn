import React, { useState } from "react";
import { Link } from "gatsby";
const Menu = () => {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <header className="header">
      <div onClick={() => setOpenMenu(!openMenu)} className="menuBurger">
        <div className="iconBurger">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <Link to="/">
          <img src="/img/logo.png" alt="" className="logo" />
        </Link>
      </div>
      <div className={`menu ${openMenu ? "openMenu" : "closeMenu"}`}>
        <Link to="/">
          <img src="/img/logo.png" alt="" className="logo" />
        </Link>
        <div className="listMenu" onClick={() => setOpenMenu(false)}>
          <Link to="/carrito" className="itemMenu">
            Ver Productos
          </Link>
          {/* <div className="itemMenu">Preguntas Frecuentes</div> */}
          <Link to="#testimonios" className="itemMenu">
            Testimonios
          </Link>
        </div>
      </div>
      <style jsx="true" global="true">
        {`
          body {
            padding-top: 72px;
          }
        `}
      </style>
    </header>
  );
};

export default Menu;
