const baseUrl = 'https://norma.nomoreparties.space/api/';

const checkResponse = (res) => {
  return res.ok
            ? res.json()
            : Promise.reject(`Ошибка ${res.status}`)
}

const checkSuccess = (res) => {
  return (res?.success)
            ? res
            : Promise.reject(res)
}

const request = (endpoint, options) => {
  return fetch(`${baseUrl}${endpoint}`, options)
            .then(checkResponse)
            .then(checkSuccess)
}

export const getIngridients = () => {
  return request('ingredients')
            .then(res => res.data)
}

export const getOrderNumber = (ids) => {
  return request(`orders`, {method: 'POST', headers: {'Content-Type': 'application/json'}, body: JSON.stringify({'ingredients': ids})})
            .then(res => res.order);
}