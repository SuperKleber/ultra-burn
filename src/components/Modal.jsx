import React from "react";
import ReactDom from "react-dom";
const Modal = ({ children, onClose }) => {
  return ReactDom.createPortal(
    <div className="modal">
      {children}
      <span className="close" onClick={onClose}>
        X
      </span>
    </div>,
    document.getElementById("modal")
  );
};

export default Modal;
