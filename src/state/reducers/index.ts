import { State, VIEW_TYPES, ACTION_TYPES } from "../../types";

const initialState: State = {
	view: VIEW_TYPES.GRID,
	deals: [],
	filteredDeals: [],
};

function Reducer(
	state: State = initialState,
	action: { type: ACTION_TYPES; payload: any }
) {
	switch (action.type) {
		case ACTION_TYPES.SET_LIST_VIEW:
			return {
				...state,
				view: VIEW_TYPES.LIST,
			};
		case ACTION_TYPES.SET_GRID_VIEW:
			return {
				...state,
				view: VIEW_TYPES.GRID,
			};
		case ACTION_TYPES.SET_ORIGINAL_DEALS:
			return {
				...state,
				deals: action.payload,
			};
		case ACTION_TYPES.SET_FILTERED_DEALS:
			return {
				...state,
				filteredDeals: action.payload,
			};
		case ACTION_TYPES.CLEAN_ORIGINAL_DEALS:
			return {
				...state,
				deals: [],
			};
		case ACTION_TYPES.CLEAN_FILTERED_DEALS:
			return {
				...state,
				filteredDeals: [],
			};
		default:
			return state;
	}
}

export default Reducer;
