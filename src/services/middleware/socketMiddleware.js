import {wsAwaitRequest} from '../../utils/api';

export const socketMiddleware = (actions) => {
  return store => {
    let socket = null;
    let isConnected = false;

    return next => action => {
      const {dispatch} = store;
      const {type, payload} = action;
      const {wsInit, wsClose, onOpen, onError, onGetOrders, onClose} = actions;

      // if(socket && type === wsClose) {
      //   console.log('test');
      //   isConnected = false;
      //   socket.close();
      // }

      if(type === wsInit) {
        socket = new WebSocket(payload);
        isConnected = true;
      }

      console.log(type, payload)
      
      if(socket) {
        socket.onopen = event => {
          dispatch({type: onOpen, payload: event})
        }

        socket.onerror = event => {
          dispatch({type: onError, payload: event})
        }

        socket.onmessage = async ({data}) => {
          const {success, orders, total, totalToday} = JSON.parse(data);

          if(!success) {
            const refreshLink = await wsAwaitRequest();
            dispatch({type: wsInit, payload: refreshLink});
          }
          
          dispatch({type: onGetOrders, payload: {orders, total, totalToday}});
        }

        socket.onclose = event => {          
          dispatch({type: onClose, payload: event});

          if(isConnected) {
            window.setTimeout(() => {
              dispatch({type: wsInit, payload: payload})
            }, 1000)
          }
        }
      }

      next(action);
    }
  }
}