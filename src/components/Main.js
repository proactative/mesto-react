import React from 'react';
import Card from './Card.js';

//11th task
import { useContext } from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function Main(props) {

  const currentUser = useContext(CurrentUserContext);

  return (
    <main className="content">

      <section className="profile">
        <div className="profile__avatar-container" onClick={props.onChangeAvatar}>
          <img className="profile__avatar" src={currentUser.avatar} alt="Мой аватар" />
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
        {props.cards.map((card) => (
          <Card key={card._id} card={card} onCardClick={props.onCardClick} onCardLike={props.handleCardLike} onDeleteClick={props.onDeleteClick}></Card>
        ))}
      </section>
    </main>
  )
}

export default Main
