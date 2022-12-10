import React from "react";
import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup({ isOpen, onCloseIcon, onOverlay, onUpdateAvatar }) {

  const avatarRef = React.useRef(null);

  const [isValidInput, setIsValidInput] = React.useState(false);
  const [inputError, setInputError] = React.useState("");
  const [isValid, setIsValid] = React.useState(false);

  const handleChangeInputError = (e) => {
    if (e.target.validity.valid) {
      setInputError("");
      setIsValidInput(true);
      setIsValid(true);
    } else {
      setInputError(e.target.validationMessage);
      setIsValidInput(false);
      setIsValid(false);
    }
  };

  function handleSubmit(e) {
    e.preventDefault();
    onUpdateAvatar(avatarRef.current.value);
  }

  React.useEffect(() => {
    setIsValidInput(true);
    setIsValid(false);
    avatarRef.current.value = "";
  }, [isOpen, onCloseIcon]);

  return (
    <PopupWithForm name="update-avatar" title="Обновить&nbsp;аватар" button="Сохранить"
      isValid={isValid} isOpen={isOpen} onCloseIcon={onCloseIcon} onOverlay={onOverlay} onSubmit={handleSubmit} >

      <fieldset className="popup__inputs">
        <label className="popup__label">
          <input ref={avatarRef} className="popup__input popup__input_type_link" name="avatar-link" type="url" id="avatar-link"
            placeholder="https://somewebsite.com/someimage.jpg" required onChange={handleChangeInputError} />
          <span id="avatar-link-error" className={isValidInput ? 'popup__error' : 'popup__error popup__error_visible'}>{inputError || ""}</span>
        </label>
      </fieldset>

    </PopupWithForm>
  );
}

export default EditAvatarPopup;          