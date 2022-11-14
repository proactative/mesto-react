import React from 'react';

function Main() {
    return (
        <main className="content">

        <section className="profile">
          <div class="profile__avatar-container">
            <img className="profile__avatar" src="{userAvatar}" alt="фотография Жака-Ив Кусто"/>
            <div className="profile__avatar-edit-sign"></div>
          </div>
          <div className="profile__info">
            <div className="profile__title-container">
              <h1 className="profile__title">Жак-Ив Кусто</h1>
              <button className="profile__edit-button" type="button" aria-label="Редактировать"></button>
            </div>
            <p className="profile__text">Исследователь океана</p>
          </div>
          <button className="profile__add-button" type="button" aria-label="Добавить"></button>
        </section>

        <section className="elements">
        </section>
      </main>
    )
}

export default Main