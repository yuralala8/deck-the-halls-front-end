function usersReducer(state = {data: [], userInfo: [], requestProcess:[], pendingReceived: [], pendingSent: [], allFriendships: [], friends: []}, action) {
	switch(action.type){
		case "FETCH_USER":
		  return Object.assign({}, state, {data: action.payload})
		case "SEND_REQUEST":
		  return Object.assign({}, state, {requestProcess: action.payload.this_request, pendingSent: action.payload.pending_sent})
		case "FETCH_REQUEST":
		  return Object.assign({}, state, {pendingReceived: action.payload.pending_received, pendingSent: action.payload.pending_sent})
		case "ACCEPT_REQUEST":
		  return Object.assign({}, state, {allFriendships: action.payload.all_friendships, pendingReceived: action.payload.pending_received})
		case "DELETE_REQUEST":
		  return Object.assign({}, state, {allFriendships: action.payload, pendingReceived: action.payload})
		case "SHOW_FRIENDS":
		  return Object.assign({}, state, {friends: action.payload})
		case "SEND_USERINFO":
		  return Object.assign({}, state, {userInfo: action.payload.me, data: action.payload.users})
		default:
		  return state;
	}
}

export default usersReducer