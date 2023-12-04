import {OPEN_MODAL, CLOSE_MODAL, SWITCH_TAB} from '../actions/event-handler';

const initialState = {
	modal: false,
	tab: 'one'
}

export const eventHandlerReducer = (state = initialState, action) => {
	switch(action.type) {
		case OPEN_MODAL: {
			return {...state, modal: action.kind}
		}
		case CLOSE_MODAL: {
			return {...state, modal: false}
		}
		case SWITCH_TAB: {
			return {...state, tab: action.tab}
		}
		default: return state;
	}
}