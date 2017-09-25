function usersReducer(state = {data: []}, action) {
	switch(action.type){
		case "FETCH_USER":
		return Object.assign({}, state, {data: action.payload})
		default:
		return state
	}
}

export default usersReducer