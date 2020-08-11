import React, { useState } from "react";
import whatsappApi from "../lib/whatsappApi";
import ReactPixel from "react-facebook-pixel";
const Carrito = () => {
  const [rojoQuantity, setRojoQuantity] = useState(1);
  return (
    <div className="carrito">
      <div className="container">
        <div className="othersProducts">
          <div className="rojo"></div>
          <div className="azul"></div>
          <div className="combo"></div>
        </div>
        <div className="cart">
          <div className="rojoCart">
            <div className="title">Gel quema grasa</div>
            <img src="/img/rojo.png" alt="" />
            <div className="price">
              Precio: <br /> 199Bs 👉
            </div>
            <div className="subtotal">
              Total: <span>{199 * rojoQuantity}Bs</span>
            </div>
            {/* <div className="subtotal">
              199Bs x {rojoQuantity} = <span>{199 * rojoQuantity}Bs</span>
            </div> */}
            <div className="controls">
              <div
                className="rest"
                onClick={() =>
                  setRojoQuantity(rojoQuantity - 1 < 0 ? 0 : rojoQuantity - 1)
                }
              >
                -
              </div>
              <div className="quantity">{rojoQuantity}</div>
              <div
                className="sum"
                onClick={() => setRojoQuantity(rojoQuantity + 1)}
              >
                +
              </div>
            </div>
          </div>
          <br />
          <a
            target="_blank"
            href={whatsappApi(
              "59176079689",
              `🔥Hola deseo los siguientes productos:_ ${rojoQuantity} x Gel Quema Grasa  _ Total a pagar: *${
                rojoQuantity * 199
              }Bs*`
            )}
            onClick={() => {
              ReactPixel.track("Contact");
              ReactPixel.trackCustom("BuyWhatsapp");
            }}
            className="whatsapp"
          >
            Pedir por whatsapp
          </a>
        </div>
      </div>
    </div>
  );
};

export default Carrito;
