import React from 'react'
import '../App.css'
import { connect } from 'react-redux'
import { searchUser } from '../actions/user'
import { getParties, deleteParty } from '../actions/parties'
import lights from '../images/lights.png'

class PartyList extends React.Component {

	componentDidMount = () => {
		this.props.getParties()
		this.props.searchUser()
	}

	handleDelete = (party) => {
		this.props.deleteParty(party.info.id)
 }

	render(){
		let myname = this.props.allusers.find(person => person.id == this.props.currentUserId)

		if (this.props.parties.length > 0) {
			return (
				<div className="party-list">
					{this.props.parties.map((party, index) => (
						<div className="each-party" key={index}>
  						<p>
  							{party.info.host_name == myname.username ? <div><button className="delete" onClick={() => this.handleDelete(party)}>x</button></div> : null}
  							<div className="hosted-by">You've been invited to a party hosted by . . . {party.info.host_name}!</div>
  							<img src={lights} className="lights"/>
    						<div className="form-row">
  							   <div className="date">Date:</div>
                   <div className="party-date">{party.info.date.slice(0, 10)}</div>
  							   <div className="location"> Location:</div>
                   <div className="party-location"> {party.info.location}</div>
                </div>
    						<div className="form-row-attendees">
    							<div className="attendees">
    							Attendees:</div> {party.participants.map(user => <div className="names">{user.username}.</div>)} 
    							<div className="max-amount">Max Amount:</div>
                  <div className="party-max-amount">${party.info.amount}</div>
    						</div>
  							<div className="form-row-santa">
    							<div className="secret-santa">p.s. You're a secret santa for <a className="name-link" href={`/profile/${this.props.allusers.find(participant => participant.id == party.matches.find(match => match.giver_id == this.props.currentUserId).receiver_id).id}`}>@{this.props.allusers.find(participant => participant.id == party.matches.find(match => match.giver_id == this.props.currentUserId).receiver_id).username}</a>
                  </div>
  							</div>
  						</p>
						</div>
						)
					)}
				</div>
					)
    } else {
			return (
					<div className="party-list">
						<p className="no-party">You have no upcoming parties.</p>
					</div>
				)
		}
	}

}


function mapStateToProps(state) {
	return {
		allusers: state.users.data,
		myfriends: state.users.friends,
		parties: state.parties.parties
	}
}

function mapDispatchToProps(dispatch) {
	return {
		getParties: () => {
			dispatch(getParties())
		},
		searchUser: () => {
			dispatch(searchUser())
			},
		deleteParty: (partyId) => {
			dispatch(deleteParty(partyId))
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(PartyList)
