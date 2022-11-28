import React from 'react';
import { api } from '../utils/api.js';
import Card from './Card.js';

//11th task
import { useContext } from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function Main(props) {

  const { currentUser } = useContext(CurrentUserContext);
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    Promise.all([api.getInitialCards()])
      .then(([cards]) => {
        setCards(cards)
      })
      .catch((err) => {
        console.log(`Ошибка: ${err}`);
      })
  }, []);

  function handleCardLike(card) {
    const isLiked = card.likes.some(i => i._id === currentUser._id);//проверка наличия like

    //обновление api
    api.toggleLikeApi(card._id, isLiked)
      .then((newCard) => {
        setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
      })
      .catch(err => console.log(err.message));
  }

  function handleDeleteCard(card) {
    alert('1');

    //обновление api
    api.deleteCard(card._id)
      .then((newCard) => {
        setCards((state) => state.filter((c) => c._id === card._id ? newCard : c));
      })
      .catch(err => console.log(err.message));
  }

  return (
    <main className="content">

      <section className="profile">
        <div className="profile__avatar-container">
          <img className="profile__avatar" src={currentUser.avatar} alt="Мой аватар" onClick={props.onUpdateAvatar} />
          <div className="profile__avatar-edit-sign"></div>
        </div>
        <div className="profile__info">
          <div className="profile__title-container">
            <h1 className="profile__title">{currentUser.name}</h1>
            <button className="profile__edit-button" type="button" aria-label="Редактировать" onClick={props.onUpdateProfile}></button>
          </div>
          <p className="profile__text">{currentUser.about}</p>
        </div>
        <button className="profile__add-button" type="button" aria-label="Добавить" onClick={props.onAddElement}></button>
      </section>

      <section className="elements">
        {cards.map((card) => (
          <Card key={card._id} card={card} onCardClick={props.onCardClick} onCardLike={handleCardLike} onDeleteClick={handleDeleteCard}></Card>
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

//вместо пропс потом
// onEditAvatar,
// onEditProfile,
// onAddPlace,
// onCardClick,
// onCardLike,
// onCardDelete,
// cards,
