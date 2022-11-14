import React from 'react';

function Main(props) {
    return (
        <main className="content">

        <section className="profile">
          <div className="profile__avatar-container">
            <img className="profile__avatar" src="{userAvatar}" alt="фотография Жака-Ив Кусто" onClick={props.onUpdateAvatar}/>
            <div className="profile__avatar-edit-sign"></div>
          </div>
          <div className="profile__info">
            <div className="profile__title-container">
              <h1 className="profile__title">Жак-Ив Кусто</h1>
              <button className="profile__edit-button" type="button" aria-label="Редактировать" onClick={props.onUpdateProfile}></button>
            </div>
            <p className="profile__text">Исследователь океана</p>
          </div>
          <button className="profile__add-button" type="button" aria-label="Добавить" onClick={props.onAddElement}></button>
        </section>

        <section className="elements">
        </section>
      </main>
    )
}

// used for imperative approach

// function handleEditAvatarClick() {
//   document.querySelector('.popup_type_update-avatar').classList.add('popup_opened');
 
// }

// function handleEditProfileClick() {
//  document.querySelector('.popup_type_edit-profile').classList.add('popup_opened');
// }

// function handleAddPlaceClick() {
//   document.querySelector('.popup_type_add-element').classList.add('popup_opened');
// }

export default Main