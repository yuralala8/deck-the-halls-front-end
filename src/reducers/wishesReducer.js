function wishesReducer(state = {wishList: []}, action) {
	switch(action.type){
		case "SAVE_WISH":
		return Object.assign({}, state, {wishList: action.payload})
		case "FETCHED_WISH":
		console.log('FETCHED_WISH', action.payload)
		return Object.assign({}, state, {wishList: action.payload})
		case "ADD_WISH":
		return Object.assign({}, state, {wishList: action.payload})
		case "DELETE_WISH":
		return Object.assign({}, state, {wishList: action.payload})
		default:
		return state
	}
}

export default wishesReducer