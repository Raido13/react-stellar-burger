const baseUrl = 'https://norma.nomoreparties.space/api/ingredients';

const getData = res => {
  return res.ok
            ? res.json()
            : Promise.reject(`Ошибка ${res.status}`)
}

export default function GetIngridients() {
  return fetch(baseUrl)
            .then(getData)
            .then(ingridients => {
              return ingridients?.success
                        ? ingridients.data
                        : Promise.reject(ingridients)
            })
}