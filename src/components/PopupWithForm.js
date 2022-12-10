import React from 'react';

function PopupWithForm(props) {
    
    return (
        <div className={`popup popup_type_${props.name} ${props.isOpen ? 'popup_opened' : ''}`} onClick={props.onOverlay}>
            <div className="popup__container">
                <form className={`popup__form popup__form_type_${props.name}`} name={`${props.name}-form`} noValidate onSubmit={props.onSubmit}>
                    <h2 className={props.isDeleteForm ? "popup__title popup__title_type_confirm-deletion" : "popup__title"}>{props.title}</h2>
                    {props.children}
                    <button type="submit" className={props.isValid ? "popup__button" : "popup__button popup__button_disabled"}>{props.button}</button>
                </form>

                <button type="button" className="popup__close" aria-label="Закрыть" onClick={props.onCloseIcon}></button>
            </div>
        </div>
    )
}

export default PopupWithForm
