import { TOrder } from "../types";

export const WS_CONNECTION_START_COMMON : 'WS_CONNECTION_START_COMMON' = 'WS_CONNECTION_START_COMMON';
export const WS_CONNECTION_CLOSE_COMMON : 'WS_CONNECTION_CLOSE_COMMON' = 'WS_CONNECTION_CLOSE_COMMON';
export const WS_CONNECTION_SUCCESS_COMMON : 'WS_CONNECTION_SUCCESS_COMMON' = 'WS_CONNECTION_SUCCESS_COMMON';
export const WS_CONNECTION_ERROR_COMMON : 'WS_CONNECTION_ERROR_COMMON' = 'WS_CONNECTION_ERROR_COMMON';
export const WS_CONNECTION_CLOSED_COMMON : 'WS_CONNECTION_CLOSED_COMMON' = 'WS_CONNECTION_CLOSED_COMMON';
export const WS_CONNECTION_START_PROFILE : 'WS_CONNECTION_START_PROFILE' = 'WS_CONNECTION_START_PROFILE';
export const WS_CONNECTION_CLOSE_PROFILE : 'WS_CONNECTION_CLOSE_PROFILE' = 'WS_CONNECTION_CLOSE_PROFILE';
export const WS_CONNECTION_SUCCESS_PROFILE : 'WS_CONNECTION_SUCCESS_PROFILE' = 'WS_CONNECTION_SUCCESS_PROFILE';
export const WS_CONNECTION_ERROR_PROFILE : 'WS_CONNECTION_ERROR_PROFILE' = 'WS_CONNECTION_ERROR_PROFILE';
export const WS_CONNECTION_CLOSED_PROFILE : 'WS_CONNECTION_CLOSED_PROFILE' = 'WS_CONNECTION_CLOSED_PROFILE';
export const WS_GET_COMMON_ORDERS : 'WS_GET_COMMON_ORDERS' = 'WS_GET_COMMON_ORDERS';
export const WS_GET_PROFILE_ORDERS : 'WS_GET_PROFILE_ORDERS' = 'WS_GET_PROFILE_ORDERS';
export const WS_CLEAR_PROFILE_ORDERS : 'WS_CLEAR_PROFILE_ORDERS' = 'WS_CLEAR_PROFILE_ORDERS';

type TConnectionStartCommonAction = { readonly type: typeof WS_CONNECTION_START_COMMON, readonly payload: string }
type TConnectionCloseCommonAction = { readonly type: typeof WS_CONNECTION_CLOSE_COMMON }
type TConnectionSuccessCommonAction = { readonly type: typeof WS_CONNECTION_SUCCESS_COMMON, readonly wsConnectCommon: boolean }
type TConnectionErrorCommonAction = { readonly type: typeof WS_CONNECTION_ERROR_COMMON, readonly wsConnectCommon: boolean }
type TConnectionClosedCommonAction = { readonly type: typeof WS_CONNECTION_CLOSED_COMMON, readonly wsConnectCommon: boolean, readonly commonOrders: [] | TOrder[], readonly totalOrders: null | number, readonly totalToday: null | number }
type TConnectionStartProfileAction = { readonly type: typeof WS_CONNECTION_START_PROFILE, readonly payload: string }
type TConnectionCloseProfileAction = { readonly type: typeof WS_CONNECTION_CLOSE_PROFILE }
type TConnectionSuccessProfileAction = { readonly type: typeof WS_CONNECTION_SUCCESS_PROFILE, readonly wsConnectProfile: boolean }
type TConnectionErrorProfileAction = { readonly type: typeof WS_CONNECTION_ERROR_PROFILE, readonly wsConnectProfile: boolean  }
type TConnectionClosedProfileAction = { readonly type: typeof WS_CONNECTION_CLOSED_PROFILE, readonly wsConnectProfile: boolean, readonly profileOrders: [] | TOrder[] }
type TGetCommonOrdersAction = { readonly type: typeof WS_GET_COMMON_ORDERS, readonly payload: { orders: [] | TOrder[], readonly total: null | number, readonly totalToday: null | number} }
type TWSGetCommonOrdersAction = { readonly type: typeof WS_GET_COMMON_ORDERS }
type TGetProfileOrdersAction = { readonly type: typeof WS_GET_PROFILE_ORDERS, readonly payload: { orders: [] | TOrder[] } }
type TWSGetProfileOrdersAction = { readonly type: typeof WS_GET_PROFILE_ORDERS }
type TClearProfileOrdersAction = { readonly type: typeof WS_CLEAR_PROFILE_ORDERS, readonly wsConnectProfile: boolean, readonly profileOrders: [] }

export type TWSActions = 
  | TConnectionStartCommonAction
  | TConnectionCloseCommonAction
  | TConnectionSuccessCommonAction
  | TConnectionErrorCommonAction
  | TConnectionClosedCommonAction
  | TConnectionStartProfileAction
  | TConnectionCloseProfileAction
  | TConnectionSuccessProfileAction
  | TConnectionErrorProfileAction
  | TConnectionClosedProfileAction
  | TGetCommonOrdersAction
  | TGetProfileOrdersAction
  | TClearProfileOrdersAction;

export const wsConnectionStartCommon = (wsUrlCommon : string) : TConnectionStartCommonAction => {
  return {
    type: WS_CONNECTION_START_COMMON,
    payload: wsUrlCommon
  }
}

export const wsConnectionCloseCommon = () : TConnectionCloseCommonAction => {
  return {
    type: WS_CONNECTION_CLOSE_COMMON
  }
}

export const wsConnectionStartProfile = (wsUrlProfile : string) : TConnectionStartProfileAction => {
  return {
    type: WS_CONNECTION_START_PROFILE,
    payload: wsUrlProfile
  }
}

export const wsConnectionCloseProfile = () : TConnectionCloseProfileAction => {
  return {
    type: WS_CONNECTION_CLOSE_PROFILE
  }
}

export const wsGetCommonOrders = () : TWSGetCommonOrdersAction => {
  return {
    type: WS_GET_COMMON_ORDERS
  }
}

export const wsGetProfileOrders = () : TWSGetProfileOrdersAction => {
  return {
    type: WS_GET_PROFILE_ORDERS
  }
}