import React from "react";
import "./modal.css";

const Modal = ({ close, children, width = 500 }, height) => {
  return (
    <>
      <div onClick={() => close(false)} className="overlay"></div>
      <div style={({ width }, { height })} className="model">
        {children}
      </div>
    </>
  );
};

export default Modal;
