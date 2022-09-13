import React from "react";

function Modal({ onClose, currentPhoto }) {
  console.log(currentPhoto);
  const { name, description } = currentPhoto;

  return (
    <div className="modalBackdrop">
      <div className="modalContainer">
        <h3 className="modalTitle">{name}</h3>
        <img
          // src={require(`../../assets/images${category}/${index}.jpg`)}

          src={currentPhoto}
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
