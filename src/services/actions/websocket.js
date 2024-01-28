export const WS_CONNECTION_START_COMMON = 'WS_CONNECTION_START_COMMON';
export const WS_CONNECTION_CLOSE_COMMON = 'WS_CONNECTION_CLOSE_COMMON';
export const WS_CONNECTION_SUCCESS_COMMON = 'WS_CONNECTION_SUCCESS_COMMON';
export const WS_CONNECTION_ERROR_COMMON = 'WS_CONNECTION_ERROR_COMMON';
export const WS_CONNECTION_CLOSED_COMMON = 'WS_CONNECTION_CLOSED_COMMON';
export const WS_CONNECTION_START_PROFILE = 'WS_CONNECTION_START_PROFILE';
export const WS_CONNECTION_CLOSE_PROFILE = 'WS_CONNECTION_CLOSE_PROFILE';
export const WS_CONNECTION_SUCCESS_PROFILE = 'WS_CONNECTION_SUCCESS_PROFILE';
export const WS_CONNECTION_ERROR_PROFILE = 'WS_CONNECTION_ERROR_PROFILE';
export const WS_CONNECTION_CLOSED_PROFILE = 'WS_CONNECTION_CLOSED_PROFILE';
export const WS_GET_COMMON_ORDERS = 'WS_GET_COMMON_ORDERS';
export const WS_GET_PROFILE_ORDERS = 'WS_GET_PROFILE_ORDERS';
export const WS_CLEAR_PROFILE_ORDERS = 'WS_CLEAR_PROFILE_ORDERS';

export const wsConnectionStartCommon = (wsUrlCommon) => {
  return {
    type: WS_CONNECTION_START_COMMON,
    payload: wsUrlCommon
  }
}

export const wsConnectionCloseCommon = () => {
  return {
    type: WS_CONNECTION_CLOSE_COMMON
  }
}

export const wsConnectionStartProfile = (wsUrlProfile) => {
  return {
    type: WS_CONNECTION_START_PROFILE,
    payload: wsUrlProfile
  }
}

export const wsConnectionCloseProfile = () => {
  return {
    type: WS_CONNECTION_CLOSE_PROFILE
  }
}

export const wsGetCommonOrders = () => {
  return {
    type: WS_GET_COMMON_ORDERS
  }
}

export const wsGetProfileOrders = () => {
  return {
    type: WS_GET_PROFILE_ORDERS
  }
}