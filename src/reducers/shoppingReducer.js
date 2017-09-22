function shoppingReducer(state = {data: []}, action) {
	switch(action.type){
		case "FETCH_DATA":
		return Object.assign({}, state, {data: action.payload})
		default:
		return state
	}
}

export default shoppingReducer