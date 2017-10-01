function partiesReducer(state = {parties: []}, action) {
	switch(action.type){

		case "CREATE_PARTY":
			return Object.assign({}, state, {parties: [...state.parties, action.payload.party]})
		case "GET_PARTIES":
			console.log("parties from reducer", action.payload)
			return Object.assign({}, state, {parties: action.payload})
		default:
		return state
	}
}

export default partiesReducer