const baseUrl = 'https://norma.nomoreparties.space/api/';

const checkResponse = (res) => {
  return res.ok
            ? res.json()
            : Promise.reject(`Ошибка ${res.status}`)
}

const checkSuccess = (res) => {
  return res?.success
              ? res.data
              : Promise.reject(res)
}

const request = (endpoint, options) => {
  return fetch(`${baseUrl}${endpoint}`, options)
            .then(checkResponse)
            .then(checkSuccess)
}

export const getIngridients = () => {
  return request('ingredients')
}