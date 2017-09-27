function usersReducer(state = {data: [], requestProcess:[], pendingReceived: [], pendingSent: [], allFriendships: [], friends: []}, action) {
	switch(action.type){
		case "FETCH_USER":
		return Object.assign({}, state, {data: action.payload})
		case "SEND_REQUEST":
		return Object.assign({}, state, {requestProcess: action.payload})
		case "FETCH_REQUEST":
		return Object.assign({}, state, {pendingReceived: action.payload.pending_received, pendingSent: action.payload.pending_sent})
		case "ACCEPT_REQUEST":
		return Object.assign({}, state, {allFriendships: action.payload})
		case "SHOW_FRIENDS":
		return Object.assign({}, state, {friends: action.payload})
		default:
		return state
	}
}

export default usersReducer