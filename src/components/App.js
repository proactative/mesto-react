import React from 'react';

//import all components
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import ImagePopup from './ImagePopup.js';
import PopupWithForm from './PopupWithForm.js';

function App() {
  return (
    <div className="page">
      <div className="page__container">
        <Header />
        <Main />
        <Footer />
        <ImagePopup />
        <PopupWithForm />

        <div className="popup popup_type_update-avatar">
          <div className="popup__container">
            <form name="update-avatar-form" action="#" class="popup__form popup__form_type_update-avatar" novalidate>
              <h2 className="popup__title">Обновить аватар</h2>
              <fieldset className="popup__inputs">
                <label className="popup__label">
                  <input className="popup__input popup__input_type_link" name="avatar-link" type="url" value="" id="avatar-link"
                    placeholder="https://somewebsite.com/someimage.jpg" required />
                  <span className="popup__error" id="avatar-link-error"></span>
                </label>
              </fieldset>
              <button className="popup__button popup__button_type_update-avatar" type="submit" disabled>Сохранить</button>
            </form>
            <button className="popup__close popup__close_type_update-element" type="button" aria-label="Закрыть"></button>
          </div>
        </div>

        <div className="popup popup_type_confirm-deletion">
          <div className="popup__container">
            <form name="delition-confirm-form" action="#" class="popup__form popup__form_confirm-delition">
              <h2 className="popup__title popup__title_type_confirm-deletion">Вы уверены?</h2>
              <button className="popup__button" type="submit">Да</button>
            </form>
            <button className="popup__close popup__close_type_add-element" type="button" aria-label="Закрыть"></button>
          </div>
        </div>

        <div className="popup popup_type_add-element">
          <div className="popup__container">
            <form name="add-form" action="#" class="popup__form popup__form_type_add-form" novalidate>
              <h2 className="popup__title">Новое&nbsp;место</h2>
              <fieldset className="popup__inputs">
                <label className="popup__label">
                  <input className="popup__input popup__input_type_place-name" name="place-name" id="place-name" type="text"
                    value="" placeholder="Название" required minlength="2" maxlength="30"  />
                  <span className="popup__error" id="place-name-error"></span>
                </label>
                <label className="popup__label">
                  <input className="popup__input popup__input_type_link" name="place-link" type="url" value="" id="place-link"
                    placeholder="Ссылка на картинку" required />
                  <span className="popup__error" id="place-link-error"></span>
                </label>
              </fieldset>
              <button className="popup__button popup__button_type_submit popup__button_disabled" disabled
                type="submit">Создать</button>
            </form>
            <button className="popup__close popup__close_type_add-element" type="button" aria-label="Закрыть"></button>
          </div>
        </div>

        <div className="popup popup_type_edit-profile">
          <div className="popup__container">
            <form name="form" action="#" class="popup__form popup__form_type_edit-form" novalidate>
              <h2 className="popup__title">Редактировать&nbsp;профиль</h2>
              <fieldset className="popup__inputs">
                <label className="popup__label">
                  <input className="popup__input popup__input_type_name" id="full-name" name="full-name" type="text" value=""
                    placeholder="Имя" minlength="2" maxlength="40" required />
                  <span className="popup__error" id="full-name-error">ошибка</span>
                </label>
                <label className="popup__label">
                  <input className="popup__input popup__input_type_job" id="job" name="job" type="text" value="" minlength="2"
                    maxlength="200" placeholder="О себе" required />
                  <span className="popup__error" id="job-error"></span>
                </label>
              </fieldset>
              <button className="popup__button popup__button_type_edit-profile" type="submit">Сохранить</button>
            </form>
            <button className="popup__close popup__close_type_edit-profile" type="button" aria-label="Закрыть"></button>
          </div>
        </div>

      </div>
    </div> 
  );
}

export default App;
