class Api {
  constructor(baseUrl, headers) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  _getResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(new Error(res.status));
  }

  // 1 - loading user-info from the server
  getUserInfo() {
    return fetch(`${this._baseUrl}/users/me`, {
      headers: this._headers
    })
      .then(this._getResponse);
  }

  // 2 - loading cards from the server
  getInitialCards() {
    return fetch(`${this._baseUrl}/cards`, {
      headers: this._headers
    })
      .then(this._getResponse);
  }

  //3 - updating profile data and avatar
  editProfile(name, job) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        name: name,
        about: job,
      })
    })
      .then(this._getResponse);
  }

  updateAvatar(link) {
    return fetch(`${this._baseUrl}/users/me/avatar`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        avatar: link,
      })
    })
      .then(this._getResponse);
  }

  //4 - adding a new card
  addCard(title, link) {
    return fetch(`${this._baseUrl}/cards`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({ name: title, link: link })
    })
      .then(this._getResponse);
  }

  //5 - adding and deleting my like
  addLike(id) {
    return fetch(`${this._baseUrl}/cards/${id}/likes`, {
      method: 'PUT',
      headers: this._headers
    })
      .then(this._getResponse);
  }

  deleteLike(id) {
    return fetch(`${this._baseUrl}/cards/${id}/likes`, {
      method: 'DELETE',
      headers: this._headers
    })
      .then(this._getResponse);
  }

  //11 task
  toggleLikeApi(cardId, isLiked) {
    //alert(la)
    return fetch(`${this._baseUrl}/cards/${cardId}/likes`, {
      method: `${isLiked ? "DELETE" : "PUT"}`,
      headers: this._headers,
    })
      .then(this._getResponse)
  }

  //6 - removing the card
  deleteCard(id) {
    return fetch(`${this._baseUrl}/cards/${id}`, {
      method: 'DELETE',
      headers: this._headers
    })
      .then(this._getResponse);
  }

}

export const api = new Api(
  'https://mesto.nomoreparties.co/v1/cohort-52',
  {
    authorization: '2d9ff2df-e659-4f7f-80c0-40ca2d274d7d',
    'Content-Type': 'application/json'
  }
);
