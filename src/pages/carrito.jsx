import React, { useState, useEffect, useRef } from "react";
import Layout from "../components/Layout";
import { productos, info } from "../data/data";
import Card from "../components/Card";
import whatsappApi from "../lib/whatsappApi";
import { FaWhatsapp } from "react-icons/fa";
import ReactPixel from "react-facebook-pixel";
const Carrito = ({ location }) => {
  const [cart, setCart] = useState([]);
  const productsContainer = useRef(null);
  let total = 0;
  cart.forEach((p) => {
    total += p.cantidad * p.precio;
  });
  useEffect(() => {
    try {
      productsContainer.current.scroll(
        productsContainer.current.scrollWidth / 6,
        0
      );
      if (location.state.producto) {
        setCart([{ ...location.state.producto }]);
      }
    } catch (error) {}
  }, []);
  return (
    <Layout>
      <div className="carrito">
        <h3 className="textCenter">Productos</h3>
        <div ref={productsContainer} className="products">
          <div className="productsContainer">
            {productos.map((producto, i) => {
              let add = false;
              let newData = [...cart];
              cart.forEach((p, index) => {
                if (p.titulo == producto.titulo) {
                  add = true;
                  newData.splice(index, 1);
                }
              });
              return (
                <div
                  key={i}
                  className={`productContainer ${add ? "add" : ""}`}
                  onClick={() => {
                    if (add) {
                      setCart(newData);
                    } else {
                      setCart([...cart, { ...producto, cantidad: 1 }]);
                    }
                  }}
                >
                  <Card
                    {...producto}
                    estado={add ? "Ya fue agregado" : "Agregar producto"}
                  />
                </div>
              );
            })}
          </div>
        </div>
        <div className="shoppingCart">
          <h3>Carrito de compras</h3>
          <div className="orderList">
            {cart.map(({ titulo, foto, precio, cantidad }, i) => {
              let newData = [...cart];
              const mas = () => {
                newData[i].cantidad = newData[i].cantidad + 1;
                setCart(newData);
              };
              const menos = () => {
                if (newData[i].cantidad <= 1) {
                  newData.splice(i, 1);
                } else {
                  newData[i].cantidad = newData[i].cantidad - 1;
                }
                setCart(newData);
              };
              return (
                <div key={i} className="orderProduct">
                  <img src={foto} alt={titulo} className="foto" />
                  <div className="precio">{precio} Bs</div>
                  <h1 className="titulo">{titulo}</h1>
                  <div className="controlador">
                    <div onClick={menos} className="control menos">
                      -
                    </div>
                    <div className="cantidad">{cantidad}</div>
                    <div onClick={mas} className="control mas">
                      +
                    </div>
                    <div className="subTotal">
                      Subtotal: {precio * cantidad} Bs
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <br />
          {cart && cart.length > 0 && (
            <div className="accion">
              <div className="total">Total: {total} Bs</div>
              <a
                target="_blank"
                onClick={() => {
                  ReactPixel.track("Contact");
                  ReactPixel.trackCustom("BuyWhatsapp");
                }}
                className="whatsapp"
                href={whatsappApi(
                  info.contacto.whatsapp,
                  `🔥Hola, deseo estos productos:_${cart.map(
                    (p) =>
                      `x${p.cantidad} ${p.titulo} = (${
                        p.precio * p.cantidad
                      } Bs)_`
                  )}_Total a pagar: ${total} Bs`
                )}
              >
                <FaWhatsapp />
                Hacer pedido
              </a>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};
const OrderProduct = ({ titulo, precio, cantidad, foto }) => {
  return <div className="orderProduct"></div>;
};
export default Carrito;
