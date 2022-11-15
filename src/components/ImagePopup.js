function ImagePopup({ card, onClose, onOverlay }) {
  return (
    <div className={`popup popup_type_zoom-photo ${card ? 'popup_opened' : ''}`} onClick={onOverlay}>
      <div className="popup__wrapper">
        <figure className="figure">
          <img className="figure__image" src={card?.link} alt={card?.name} />
          <figcaption className="figure__caption">{card?.name}</figcaption>
        </figure>
        <button className="popup__close popup__close_type_zoom-photo" type="button" aria-label="Закрыть" onClick={onClose}></button>
      </div>
    </div>
  )
}

export default ImagePopup
