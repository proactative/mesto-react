import React from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import PopupWithForm from "./PopupWithForm";

function EditProfilePopup({ isOpen, onCloseIcon, onUpdateUser, onOverlay }) {
  const currentUser = React.useContext(CurrentUserContext);

  const [name, setName] = React.useState(currentUser.name);
  const [description, setDescription] = React.useState(currentUser.about);

  const [isInputNameValid, setIsInputNameValid] = React.useState(true);
  const [isInputDescriptionValid, setIsInputDescriptionValid] = React.useState(true);

  const [nameError, setNameError] = React.useState("");
  const [descriptionError, setDescriptionError] = React.useState("");

  const [isValid, setIsValid] = React.useState(false);

  function handleChangeName(e) {
    handleChangeInputError(e, setNameError, setIsInputNameValid);
    setName(e.target.value);
  }

  function handleChangeDescription(e) {
    handleChangeInputError(e, setDescriptionError, setIsInputDescriptionValid);
    setDescription(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();// Запрещаем браузеру переходить по адресу формы

    // Передаём значения управляемых компонентов во внешний обработчик
    onUpdateUser(name, description);
  }

  const handleChangeInputError = (e, setInputError, setInputValid) => {
    if (e.target.validity.valid) {
      setInputError("");
      setInputValid(true);
    } else {
      setInputError(e.target.validationMessage);
      setInputValid(false);
    }
  };

  //reset Input Values
  function resetInputs() {
    setNameError("");
    setDescriptionError("");
    setIsInputNameValid(true);
    setIsInputDescriptionValid(true);
    setIsValid(true);
  }

  React.useEffect(() => {
    setIsValid(isInputNameValid && isInputDescriptionValid);
  }, [isInputNameValid, isInputDescriptionValid, isOpen, onCloseIcon]);

  React.useEffect(() => {
    resetInputs();
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [isOpen, onCloseIcon]);

  return (
    <PopupWithForm name="edit-profile" title="Редактировать&nbsp;профиль" button="Сохранить"
      isOpen={isOpen} onCloseIcon={onCloseIcon} onOverlay={onOverlay} onSubmit={handleSubmit} isValid={isValid}>

      <fieldset className="popup__inputs">
        <label className="popup__label">
          <input className="popup__input popup__input_type_name" id="full-name" name="full-name" type="text"
            placeholder="Имя" minLength="2" maxLength="40" required onChange={handleChangeName} value={name || ''} />
          <span id="full-name-error" className={isInputNameValid ? 'popup__error' : 'popup__error popup__error_visible'}>{nameError || " "}</span>
        </label>

        <label className="popup__label">
          <input className="popup__input popup__input_type_job" id="job" name="job" type="text" minLength="2"
            maxLength="200" placeholder="О себе" required onChange={handleChangeDescription} value={description || ''} />
          <span id="job-error" className={isInputDescriptionValid ? 'popup__error' : 'popup__error popup__error_visible'}>{descriptionError || ""}</span>
        </label>
      </fieldset>
    </PopupWithForm>
  );
}

export default EditProfilePopup;
