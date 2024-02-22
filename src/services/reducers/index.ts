import { combineReducers } from "redux";
import { constructorIngridientsReducer } from './constructor-ingridients';
import { eventHandlerReducer } from './event-handler';
import { burgerIngridientsReducer } from './burger-ingridients';
import { orderDetailsReducer } from './order-details';
import { authentificationReducer } from "./authentification";
import { websocketReducer } from "./websocket";

export const rootReducer = combineReducers({
  constructorIngridients: constructorIngridientsReducer,
  eventHandler: eventHandlerReducer,
  burgerIngridients: burgerIngridientsReducer,
  orderDetails: orderDetailsReducer,
  authentification: authentificationReducer,
  websocket: websocketReducer
})