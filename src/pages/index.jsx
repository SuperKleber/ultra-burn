import React, { useState } from "react";
import Layout from "../components/Layout";
import "../styles/master.less";
import Modal from "../components/Modal";
import Carrito from "../components/Carrito";
import ReactPixel from "react-facebook-pixel";
const Index = () => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <Layout>
      <div className="landing">
        <img src="/img/bote.png" className="bote" alt="" />
        <div className="containerBote"></div>
        <div className="copy">
          <h3 className="h1">
            APLICA Y <span>QUEMA</span>
          </h3>
          <h1 className="h3">
            El mejor gel <br /> quema grasa del mercado
          </h1>
          <button
            className="button fullWidth"
            onClick={() => {
              setOpenModal(true);
              ReactPixel.track("AddToCart");
            }}
          >
            COMPRA AQUÍ
          </button>
        </div>
      </div>
      <div className="background" />
      <div className="backgroundImage" />
      {openModal && (
        <Modal onClose={() => setOpenModal(false)}>
          <Carrito />
        </Modal>
      )}
    </Layout>
  );
};

export default Index;
