import {OPEN_MODAL, CLOSE_MODAL, SWITCH_TAB, SET_PARENT, SET_IS_HOVER} from '../actions/event-handler';

const initialState = {
	modal: false,
	tab: 'one',
	parent: null,
	isHover: false
}

export const eventHandlerReducer = (state = initialState, action) => {
	switch(action.type) {
		case OPEN_MODAL: {
			return {...state, modal: true}
		}
		case CLOSE_MODAL: {
			return {...state, modal: false}
		}
		case SWITCH_TAB: {
			return {...state, tab: action.tab}
		}
		case SET_PARENT: {
			return {...state, parent: action.parent}
		}
		case SET_IS_HOVER: {
			return {...state, isHover: action.isHover}
		}
		default: return state;
	}
}