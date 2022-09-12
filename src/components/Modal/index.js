import React from "react";

function Modal({ onClose, currentPhoto }) {
  const { name, category, description, index } = currentPhoto;

  return (
    <div className="modalBackdrop">
      <div className="modalContainer">
        <h3 className="modalTitle">{name}</h3>
        <img
          // src={require(`../../assets/images${category}/${index}.jpg`)}

          src={require(`../../assets/images/Movie Finder.jpg`)}
          alt="current category"
        />
        <p>{description}</p>
        <button data-testid="buttontag" onClick={onClose} type="button">
          Close this modal
        </button>
      </div>
    </div>
  );
}

export default Modal;
