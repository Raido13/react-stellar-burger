const baseUrl = 'https://norma.nomoreparties.space/api/';
const defaultHeaders = {'Content-Type': 'application/json'};

const checkResponse = (res) => {
  return res.ok
            ? res.json()
            : res.json()
                  .then(err => Promise.reject(`Ошибка ${err}`));
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
  return request('orders', {method: 'POST', headers: defaultHeaders, body: JSON.stringify({'ingredients': ids, 'token': localStorage.getItem('refreshToken')})})
            .then(res => res.order);
}

export const refreshToken = () => {
  request('auth/token', {method: 'POST', headers: defaultHeaders, body: JSON.stringify({token: localStorage.getItem('refreshToken')})})
}

export const awaitRequest = async (endpoint, options) => {
  try {
    const res = await fetch(`${baseUrl}${endpoint}`, options);
    return await checkResponse(res)
  } catch (err) {
    if(err.message === 'JWT expired') {
      const refresh = await refreshToken();
      if(!refreshToken.success) {
        return Promise.reject(refresh)
      }
      localStorage.setItem('refreshToken', refresh.refreshToken);
      localStorage.setItem('accessToken', refresh.accessToken);
      options.headers.authorization = refresh.accessToken;
      const res = await fetch(`${baseUrl}${endpoint}`, options);
      return await checkResponse(res);
    } else {
      return Promise.reject(err);
    }
  }
}

export const postSignUp = ({email, password, name}) => {
  return request('auth/register', {method: 'POST', headers: defaultHeaders, body: JSON.stringify({'name': name, 'email': email, 'password': password})})
}

export const postSignIn = ({email, password}) => {
  return request('auth/login', {method: 'POST', headers: defaultHeaders, body: JSON.stringify({'email': email, 'password': password})})
}

export const postLogout = () => {
  return request('auth/logout', {method: 'POST', headers: defaultHeaders, body: JSON.stringify({'token': localStorage.getItem('refreshToken')})})
}

export const postForgot = ({email}) => {
  return request('password-reset', {method: 'POST', headers: defaultHeaders, body: JSON.stringify({'email': email})})
}

export const postRecovery = ({password, token}) => {
  return request('password-reset/reset', {method: 'POST', headers: defaultHeaders, body: JSON.stringify({'token': token, 'password': password})})
}

export const postUpdate = ({name, email}) => {
  return awaitRequest('auth/user', {method: 'PATCH', headers: {defaultHeaders, authorization: localStorage.getItem('accessToken')}, body: JSON.stringify({'name': name, 'email': email})})
}

export const getUser = () => {
  return awaitRequest('auth/user', {method: 'GET', headers: {defaultHeaders, authorization: localStorage.getItem('accessToken')}})
}