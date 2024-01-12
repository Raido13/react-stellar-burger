import { combineReducers } from "redux";
import {ingridientDetailsReducer} from './ingridient-details';
import {constructorIngridientsReducer} from './constructor-ingridients';
import {eventHandlerReducer} from './event-handler';
import {burgerIngridientsReducer} from './burger-ingridients';
import {orderDetailsReducer} from './order-details';
import { authenticationReducer } from "./authentication";

export const rootReducer = combineReducers({
  ingridientDetails: ingridientDetailsReducer,
  constructorIngridients: constructorIngridientsReducer,
  eventHandler: eventHandlerReducer,
  burgerIngridients: burgerIngridientsReducer,
  orderDetails: orderDetailsReducer,
  authentication: authenticationReducer
})