function Card({card, onCardClick, onDeleteClick}) {

    function handleCardClick() {
     onCardClick(card);
    }  

    return (
        <article className="element">
        <img className="element__image" alt={card.name} src={card.link} onClick={handleCardClick} />
        <button className="element__delete-button" type="button" aria-label="Удалить" onClick={onDeleteClick}></button>
        <div className="element__info">
          <h2 className="element__title">{card.name}</h2>
          <div className="element__like-area">
            <button className="element__like" type="button" aria-label="Нравится"></button>
            <p className="element__like-counter">{card.likes.length}</p>
          </div>
        </div>
      </article>
    )
}
export default Card
