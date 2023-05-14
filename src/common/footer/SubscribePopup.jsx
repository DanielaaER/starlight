import React, { useState, useEffect } from "react";

const SubscribePopup = ({ isOpen, onClose }) => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [contentHeight, setContentHeight] = useState(0);

  useEffect(() => {
    const popupContent = document.getElementById("popup-content");
    if (popupContent) {
      const height = popupContent.offsetHeight;
      setContentHeight(height);
    }
  }, [fullName, email]);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí podrías hacer lo que quieras con los datos del usuario, como enviarlos al servidor o mostrarlos en la consola.
    console.log({ fullName, email });
    onClose();
  };

  const modalStyle = {
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.6)",
      zIndex: 9999,
    },
    content: {
      margin: "50px auto",
      maxHeight: "calc(100% - 100px)",
      maxWidth: "400px",
      border: "none",
      borderRadius: "10px",
      overflow: "auto",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
    },
  };


  return isOpen ? (
    <div style={modalStyle.overlay}>
      <div style={modalStyle.content}>
        <h2>Suscríbete</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="fullName">Nombre completo:</label>
            <input
              type="text"
              id="fullName"
              value={fullName}
              onChange={(event) => setFullName(event.target.value)}
            />
          </div>
          <div>
            <label htmlFor="email">Correo electrónico:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>
          <div>
            <button type="submit">Enviar</button>
            <button type="button" onClick={onClose}>Cancelar</button>
          </div>
        </form>
      </div>
    </div>
  ) : null;

};

export default SubscribePopup;
