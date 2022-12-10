import { useContext } from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function Card({ card, onCardClick, onDeleteClick, onCardLike }) {

  function handleCardClick() {
    onCardClick(card);
  }

  function handleLikeClick() {
    onCardLike(card);
  }

  function handleDeleteClick() {
    onDeleteClick(card._id);
  }

  const currentUser = useContext(CurrentUserContext);

  //for visibility delete-button
  const isOwn = card.owner._id === currentUser._id;
  const cardDeleteButtonClassName = isOwn ? 'element__delete-button_visible element__delete-button ' : 'element__delete-button';

  // for like-button 
  const isLiked = card.likes.some(i => i._id === currentUser._id);
  const cardLikeButtonClassName = isLiked ? 'element__like element__like_active' : 'element__like';

  return (
    <article className="element">
      <img className="element__image" alt={card.name} src={card.link} onClick={handleCardClick} />
      <button className={cardDeleteButtonClassName} type="button" aria-label="Удалить" onClick={handleDeleteClick}></button>
      <div className="element__info">
        <h2 className="element__title">{card.name}</h2>
        <div className="element__like-area">
          <button className={cardLikeButtonClassName} type="button" aria-label="Нравится" onClick={handleLikeClick}></button>
          <p className="element__like-counter">{card.likes.length}</p>
        </div>
      </div>
    </article>
  )
}
export default Card
