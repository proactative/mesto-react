function ImagePopup() {
    return (
    <div className="popup popup_type_zoom-photo">
    <div className="popup__wrapper">
      <figure className="figure">
        <img className="figure__image" src="#" alt=""/>
        <figcaption className="figure__caption"></figcaption>
      </figure>
      <button className="popup__close popup__close_type_zoom-photo" type="button" aria-label="Закрыть"></button>
    </div>
  </div>    
    )
}

export default ImagePopup
