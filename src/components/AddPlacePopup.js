import React from "react";
import PopupWithForm from "./PopupWithForm";

function AddPlacePopup({ isOpen, onCloseIcon, onOverlay, onAddElement }) {

  const [placeName, setPlaceName] = React.useState("");
  const [placeLink, setPlaceLink] = React.useState("");

  //for validation
  const [isValidInputPlaceName, setIsValidInputPlaceName] = React.useState(false);
  const [isValidInputPlaceLink, setIsValidInputPlaceLink] = React.useState(false);
  const [placeNameError, setPlaceNameError] = React.useState("");
  const [placeLinkError, setPlaceLinkError] = React.useState("");
  const [isValid, setIsValid] = React.useState(false);

  const handleChangeInputError = (e, setInputError, setInputValid) => {
    if (e.target.validity.valid) {
      setInputError("");
      setInputValid(true);
    } else {
      setInputError(e.target.validationMessage);
      setInputValid(false);
    }
  };

  function handleChangePlaceName(e) {
    handleChangeInputError(e, setPlaceNameError, setIsValidInputPlaceName);
    setPlaceName(e.target.value);
  }

  function handleChangePlaceLink(e) {
    handleChangeInputError(e, setPlaceLinkError, setIsValidInputPlaceLink);
    setPlaceLink(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    onAddElement(placeName, placeLink);
  }

  function resetInputValues() {
    setPlaceName("");
    setPlaceLink("");
    setIsValidInputPlaceName(true);
    setIsValidInputPlaceLink(true);
    setIsValid(false);
  }

  React.useEffect(() => {
    resetInputValues();
  }, [isOpen, onCloseIcon]);

  React.useEffect(() => {
    setIsValid(isValidInputPlaceName && isValidInputPlaceLink);
  }, [isValidInputPlaceName, isValidInputPlaceLink]);

  return (
    <PopupWithForm name="add-element" title="Новое&nbsp;место" button="Создать"
      onCloseIcon={onCloseIcon} onOverlay={onOverlay} isValid={isValid} isOpen={isOpen} onSubmit={handleSubmit}>

      <fieldset className="popup__inputs">
        <label className="popup__label">
          <input className="popup__input popup__input_type_place-name" name="place-name" id="place-name" type="text"
            placeholder="Название" required minLength="2" maxLength="30" onChange={handleChangePlaceName} value={placeName || ''} />
          <span className={(!isValidInputPlaceName && isOpen) ? 'popup__error popup__error_visible' : 'popup__error'} id="place-name-error">{placeNameError || ""}</span>
        </label>
        <label className="popup__label">
          <input className="popup__input popup__input_type_link" name="place-link" type="url" id="place-link"
            placeholder="Ссылка на картинку" required onChange={handleChangePlaceLink} value={placeLink || ''} />
          <span className={(!isValidInputPlaceLink && isOpen) ? 'popup__error popup__error_visible' : 'popup__error'} id="place-link-error">{placeLinkError || ""}</span>
        </label>
      </fieldset>

    </PopupWithForm>
  );
}

export default AddPlacePopup;