class ApiMain {
  constructor(options) {
    this._url = options.baseUrl;
  }

  _checkResponse(res) {return res.ok ? res.json() : Promise.reject(res.status)}

  _request(url, options) {
    return fetch(`${this._url}${url}`, options)
      .then(this._checkResponse)
  }



  getUserData(token) {
    return this._request('/users/me', {
      headers: {
        "Authorization" : `Bearer ${token}`
      }
    })
  }


  setUserInfo(username, email, token) {
    return this._request('/users/me', {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        "Authorization" : `Bearer ${token}`
      },
      body: JSON.stringify({
        name: username,
        email: email,
      })
    })
  }

  getMovies(token) {
    return this._request('/movies', {
      headers: {
        "Authorization" : `Bearer ${token}`
      }
    })
  }

  addMovie(data, token) {
    return this._request('/movies', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        "Authorization" : `Bearer ${token}`
      },
      body: JSON.stringify({
        country: data.country,
        director: data.director,
        duration: data.duration,
        description: data.description,
        year: data.year,
        image: `https://api.nomoreparties.co${data.image.url}`,
        trailerLink: data.trailerLink,
        thumbnail: `https://api.nomoreparties.co${data.image.formats.thumbnail.url}`,
        movieId: data.id,
        nameRU: data.nameRU,
        nameEN: data.nameEN
      })
    })
  }

  deleteMovie(cardId, token) {
    return this._request(`/movies/${cardId}`, {
      method: 'DELETE',
      headers: {
        "Authorization" : `Bearer ${token}`
      }
    })
  }
}

const apiMain = new ApiMain({
  baseUrl: 'http://api.diplom.vadimo.nomoredomainsrocks.ru',
});

export default apiMain