function wishesReducer(state = {wishList: []}, action) {
	switch(action.type){
		case "SAVE_WISH":
		return Object.assign({}, state, {wishList: action.payload})
		case "FETCHED_WISH":
		return Object.assign({}, state, {wishList: action.payload})
		default:
		return state
	}
}

export default wishesReducer