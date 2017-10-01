import React from 'react'
import '../App.css'
import { connect } from 'react-redux'
import { myFriends } from '../actions/user'
import { getParties } from '../actions/parties'


class PartyList extends React.Component {

	componentDidMount = () => {
		this.props.getParties()
		this.props.viewFriends(this.props.currentUserId)
	}

	render(){
	
			return (
					<div>
		
					{this.props.parties.map((party, index) => (
						<div className="party" key={index}>
						<p>
							<div>Host name: {party.info.host_name}</div>
							<div>Location: {party.info.location}</div>
							<div>Date: {party.info.date.slice(0, 10)}</div>
							<div>Max Amount: ${party.info.amount}</div>
							<div>Participants: {party.participants.map(user => user.username)} </div>
							<div>You're a secret santa for {this.props.myfriends.find(friend => friend.id == party.matches.find(match => match.giver_id == this.props.currentUserId).receiver_id).username}</div>
						</p>
						</div>
						)
					)}
					
					</div>
					)
	}

}


function mapStateToProps(state) {

	
	return {
		myfriends: state.users.friends,
		parties: state.parties.parties
	}
}


function mapDispatchToProps(dispatch) {

	return {
		getParties: () => {
			dispatch(getParties())
		},
		viewFriends: (currentUser) => {
			dispatch(myFriends(currentUser))
			}
	}
}


export default connect(mapStateToProps, mapDispatchToProps)(PartyList)