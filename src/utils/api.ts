import { TIngridient, TOrder, TSignIn, TSignUp, TUser } from "../services/types";

const baseUrl = 'https://norma.nomoreparties.space/api/';
export const wsUrlCommon = 'wss://norma.nomoreparties.space/orders/all';
export const wsUrlProfile = 'wss://norma.nomoreparties.space/orders';
const defaultHeaders = {'Content-Type': 'application/json'};

type TCheckSuccess<T> = T & {
  success: boolean
}

type TCheckToken = TCheckSuccess<{ refreshToken: string; accessToken: string }>

type TGetUser = TCheckSuccess<{ user: TUser }>

type TSetUser = TCheckToken & TGetUser

type TGetOrder = TCheckSuccess<{ order: TOrder }>

type TGetOrders = TCheckSuccess<{ orders: TOrder[] }>

type TGetIngridients = TCheckSuccess<{ data: TIngridient[] }>

interface IRefresh { success: boolean; refreshToken: string; accessToken: string }

const checkResponse = (res : Response) => {
  return res.ok
            ? res.json()
            : res.json()
                  .then(err => Promise.reject(`Ошибка ${err}`));
}

const checkSuccess = <T>(res : TCheckSuccess<T>) : Promise<T> | T => {
  return (res?.success)
            ? res
            : Promise.reject(res)
}

const request = <T>(endpoint : string, options? : {}) : Promise<T> => {
  return fetch(`${baseUrl}${endpoint}`, options)
            .then(checkResponse)
            .then(checkSuccess<T>)
}

export const getIngridients = () : Promise<TIngridient[]> => {
  return request<TGetIngridients>('ingredients')
            .then(res => res.data)
}

export const requestOrderNumber = (ids : string[]) : Promise<TOrder> => {
  return awaitRequest<TGetOrder>('orders', {method: 'POST', headers: {'Content-Type': 'application/json', authorization: localStorage.getItem('accessToken')}, body: JSON.stringify({'ingredients': ids})})
            .then(res => res.order);
}

export const requestOrderInfo = (number : number) : Promise<TOrder[]> => {
  return request<TGetOrders>(`orders/${number}`, {method: 'GET', headers: defaultHeaders})
            .then(res => res.orders);
}

export const refreshToken = () : Promise<IRefresh> => request('auth/token', {method: 'POST', headers: defaultHeaders, body: JSON.stringify({token: localStorage.getItem('refreshToken')})})

export const awaitRequest = async <T>(endpoint : string, options : {[key : string] : any}) : Promise<T> => {
  try {
    const res = await fetch(`${baseUrl}${endpoint}`, options);
    return await checkResponse(res)
  } catch (err : any) {
    if(err.message === 'jwt expired') {
      const refresh = await refreshToken();
      if(!refresh.success) {
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

export const wsAwaitRequest = async () => {
  const refresh = await refreshToken();
  if(!refresh.success) {
    return Promise.reject(refresh)
  }
  localStorage.setItem('refreshToken', refresh.refreshToken);
  localStorage.setItem('accessToken', refresh.accessToken);

  return (`${wsUrlProfile}?token=${refresh.accessToken.split(' ')[1]}`);
} 

export const postSignUp = ({email, password, name} : TSignUp) : Promise<TSetUser> => request('auth/register', {method: 'POST', headers: defaultHeaders, body: JSON.stringify({'name': name, 'email': email, 'password': password})})

export const postSignIn = ({email, password} : TSignIn) : Promise<TSetUser> => request('auth/login', {method: 'POST', headers: defaultHeaders, body: JSON.stringify({'email': email, 'password': password})})

export const postLogout = () => request('auth/logout', {method: 'POST', headers: defaultHeaders, body: JSON.stringify({'token': localStorage.getItem('refreshToken')})})

export const postForgot = (email: string) => request('password-reset', {method: 'POST', headers: defaultHeaders, body: JSON.stringify({'email': email})})

export const postRecovery = (password: string, token: string) => request('password-reset/reset', {method: 'POST', headers: defaultHeaders, body: JSON.stringify({'token': token, 'password': password})})

export const postUpdate = ({name, email, password} : TSignUp) : Promise<TGetUser> => awaitRequest<TSetUser>('auth/user', {method: 'PATCH', headers: {'Content-type': 'application/json;charset=utf-8', authorization: localStorage.getItem('accessToken')}, body: JSON.stringify({'name': name, 'email': email, 'password': password})})

export const getUser = () : Promise<TGetUser> => awaitRequest<TSetUser>('auth/user', {method: 'GET', headers: {'Content-type': 'application/json;charset=utf-8', authorization: localStorage.getItem('accessToken')}})