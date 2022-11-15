import React from 'react';

import {api} from '../utils/api.js';
import Card from './Card.js';

function Main(props) {

  const [userName, setUserName] = React.useState('');
  const [userDescription, setUserDescription] = React.useState('');
  const [userAvatar, setUserAvatar] = React.useState('');
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    Promise.all([api.getUserInfo(), api.getInitialCards()])
    .then(([data, cards]) => {
        setUserName(data.name)
        setUserDescription(data.about)
        setUserAvatar(data.avatar)
        setCards(cards)
    })
    .catch((err) => {
        console.log(`Ошибка: ${err}`);
    })
    }, []);

  return (
      <main className="content">

      <section className="profile">
        <div className="profile__avatar-container">
          <img className="profile__avatar" src={userAvatar} alt="Мой аватар" onClick={props.onUpdateAvatar}/>
          <div className="profile__avatar-edit-sign"></div>
        </div>
        <div className="profile__info">
          <div className="profile__title-container">
            <h1 className="profile__title">{userName}</h1>
            <button className="profile__edit-button" type="button" aria-label="Редактировать" onClick={props.onUpdateProfile}></button>
          </div>
          <p className="profile__text">{userDescription}</p>
        </div>
        <button className="profile__add-button" type="button" aria-label="Добавить" onClick={props.onAddElement}></button>
      </section>

      <section className="elements">
      {cards.map((card) => (
                    <Card key={card._id} card={card} onCardClick={props.onCardClick} onDeleteClick={props.onDeleteClick}></Card>
                ))}
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
