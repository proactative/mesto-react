import React from "react";
import PopupWithForm from "./PopupWithForm";

function DeleteCardPopup({ isOpen, onCloseIcon, onOverlay, onConfirmDeletion }) {
  function handleSubmit(e) {
    e.preventDefault();
    onConfirmDeletion();
  }
  return (
    <PopupWithForm isValid={true} isOpen={isOpen} name='deletion-confirm' title="Вы уверены?" button="Да"
      onCloseIcon={onCloseIcon} onOverlay={onOverlay} onSubmit={handleSubmit} isDeleteForm={true}>
    </PopupWithForm>
  );
}

export default DeleteCardPopup;