export const OPEN_MODAL : 'OPEN_MODAL' = 'OPEN_MODAL';
export const CLOSE_MODAL : 'CLOSE_MODAL' = 'CLOSE_MODAL';
export const SWITCH_TAB : 'SWITCH_TAB' = 'SWITCH_TAB';
export const SET_PARENT : 'SET_PARENT' = 'SET_PARENT';
export const SET_IS_HOVER : 'SET_IS_HOVER' = 'SET_IS_HOVER';

type TOpenModalAction = {readonly type : typeof OPEN_MODAL, modal : boolean}
type TCloseModalAction = {readonly type : typeof CLOSE_MODAL, modal : boolean}
type TSwithTabAction = {readonly type : typeof SWITCH_TAB, tab : string}
type TSetParentAction = {readonly type : typeof SET_PARENT, parent : null | HTMLDivElement}
type TSetIsHoverAction = {readonly type : typeof SET_IS_HOVER, isHover : boolean}

export type THandlerActions =
  | TOpenModalAction
  | TCloseModalAction
  | TSwithTabAction
  | TSetParentAction
  | TSetIsHoverAction;