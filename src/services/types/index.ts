import { ThunkAction } from 'redux-thunk';
import { Action, ActionCreator } from 'redux';
import { store } from '../store';
import {
  TIngridient,
  TIngridientUid,
  TIngridientIdx,
  TIngridientCount,
  TOrder,
  TUser,
  TSignIn,
  TSignUp,
  TChildren,
  IFormProps
} from './types';
import { TAuthActions } from '../actions/authentification';

type TAppActions = TAuthActions
type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;
type AppThunk<ReturnType = void> = ActionCreator<ThunkAction<ReturnType, Action, RootState, TAppActions>>

export type {
  RootState,
  AppDispatch,
  AppThunk,
  TIngridient,
  TIngridientUid,
  TIngridientIdx,
  TIngridientCount,
  TOrder,
  TUser,
  TSignIn,
  TSignUp,
  TChildren,
  IFormProps
}