import React from 'react';

//import all components
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import ImagePopup from './ImagePopup.js';
import PopupWithForm from './PopupWithForm.js';

//11th task
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import { api } from '../utils/api';

function App() {

  const [isUpdateAvatarPopupOpen, setIsUpdateAvatarPopupOpen] = React.useState(false);
  const [isUpdateProfilePopupOpen, setIsUpdateProfilePopupOpen] = React.useState(false);
  const [isAddElementPopupOpen, setIsAddElementPopupOpen] = React.useState(false);
  const [isConfirmDeletionPopupOpen, setIsConfirmDeletionPopupOpen] = React.useState(false);

  //11th task
  const [currentUser, setCurrentUser] =React.useState({ name: '', about: '', id: '', avatar: '' });

  React.useEffect(() => {
    Promise.all([api.getUserInfo()])
      .then(([userData]) => {
        setCurrentUser(userData)
      })
      .catch((err) => {
        console.log(`Ошибка: ${err}`);
      })
  }, []);

  //open all popups
  function handleUpdateAvatarClick() {
    setIsUpdateAvatarPopupOpen(true);
  }

  function handleUpdateProfileClick() {
    setIsUpdateProfilePopupOpen(true);
  }

  function handleAddElementClick() {
    setIsAddElementPopupOpen(true);
  }

  function handleEConfirmDeletionClick() {
    setIsConfirmDeletionPopupOpen(true);
  }

  //close all popups
  function closeAllPopups() {
    setIsUpdateAvatarPopupOpen(false);
    setIsUpdateProfilePopupOpen(false);
    setIsAddElementPopupOpen(false);
    setIsConfirmDeletionPopupOpen(false);
    setSelectedCard(null);
  }

  function closeViaOverlayClick(event) {
    if (event.target.classList.contains('popup')) {
      closeAllPopups();
    }
  }

  //for opening chosen card
  const [selectedCard, setSelectedCard] = React.useState(null);
  function handleCardClick(card) {
    setSelectedCard(card);
  }



 //потом перенесу
  // function handleCardLike(card) {
  //   // Снова проверяем, есть ли уже лайк на этой карточке
  //   const isLiked = card.likes.some(i => i._id === currentUser._id);
  //   // Отправляем запрос в API и получаем обновлённые данные карточки
  //   api.changeLikeCardStatus(card._id, !isLiked).then((newCard) => {
  //       setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
  //   }).catch(err => console.log(err.message));
  // };


  return (
    <CurrentUserContext.Provider value={{currentUser, setCurrentUser}} >

      <div className="page">
        <div className="page__container">
          <Header />
          <Main
            onUpdateAvatar={handleUpdateAvatarClick} onUpdateProfile={handleUpdateProfileClick} onAddElement={handleAddElementClick}
            onCardClick={handleCardClick}  onDeleteClick={handleEConfirmDeletionClick} />
          <Footer />

          <ImagePopup card={selectedCard} onClose={closeAllPopups} onOverlay={closeViaOverlayClick} />

          {/*update avatar*/}
          <PopupWithForm name="update-avatar" title="Обновить&nbsp;аватар" button="Сохранить" isOpen={isUpdateAvatarPopupOpen} onCloseIcon={closeAllPopups} onOverlay={closeViaOverlayClick}>
            <fieldset className="popup__inputs">
              <label className="popup__label">
                <input className="popup__input popup__input_type_link" name="avatar-link" type="url" id="avatar-link"
                  placeholder="https://somewebsite.com/someimage.jpg" required />
                <span className="popup__error" id="avatar-link-error"></span>
              </label>
            </fieldset>
          </PopupWithForm>

          {/*update profile*/}
          <PopupWithForm name="edit-profile" title="Редактировать&nbsp;профиль" button="Сохранить" isOpen={isUpdateProfilePopupOpen} onCloseIcon={closeAllPopups} onOverlay={closeViaOverlayClick}>
            <fieldset className="popup__inputs">
              <label className="popup__label">
                <input className="popup__input popup__input_type_name" id="full-name" name="full-name" type="text" 
                  placeholder="Имя" minLength="2" maxLength="40" required />
                <span className="popup__error" id="full-name-error">ошибка</span>
              </label>
              <label className="popup__label">
                <input className="popup__input popup__input_type_job" id="job" name="job" type="text"  minLength="2"
                  maxLength="200" placeholder="О себе" required />
                <span className="popup__error" id="job-error"></span>
              </label>
            </fieldset>
          </PopupWithForm>

          {/*add element*/}
          <PopupWithForm name="add-element" title="Новое&nbsp;место" button="Создать" isOpen={isAddElementPopupOpen} onCloseIcon={closeAllPopups} onOverlay={closeViaOverlayClick}>
            <fieldset className="popup__inputs">
              <label className="popup__label">
                <input className="popup__input popup__input_type_place-name" name="place-name" id="place-name" type="text"
                  placeholder="Название" required minLength="2" maxLength="30" />
                <span className="popup__error" id="place-name-error"></span>
              </label>
              <label className="popup__label">
                <input className="popup__input popup__input_type_link" name="place-link" type="url" id="place-link"
                  placeholder="Ссылка на картинку" required />
                <span className="popup__error" id="place-link-error"></span>
              </label>
            </fieldset>
          </PopupWithForm>

          {/*confirm deletion*/}
          <PopupWithForm name="deletion-confirm" title="Вы уверены?" button="Да" isOpen={isConfirmDeletionPopupOpen} onCloseIcon={closeAllPopups} onOverlay={closeViaOverlayClick} />

        </div>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
