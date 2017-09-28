import React from 'react'
import { connect } from 'react-redux'
import { myFriends } from '../actions/user'
import Select from 'react-select';
import 'react-select/dist/react-select.css';

class PartyForm extends React.Component {

	constructor(){
		super()
		this.state = {
			location: "",
			date: "",
			amount: "",
			comment: "",
			participants: []
		}
	}

	componentDidMount = () => {
		this.props.viewFriends(this.props.currentUserId)
	}

	handleChange = (event) => {
		this.setState({
			location: this.refs.location.value,
			date: this.refs.date.value,
			amount: this.refs.amount.value,
			comment: this.refs.comment.value,
			participants: this.refs.participants.value
		})
		console.log(this.state)
	}

	handleSubmit = (event) => {
		event.preventDefault()

		this.props.cancel()
		this.setState({
			location: "",
			date: "",
			amount: "",
			comment: "",
			participants: []
		})
	}

	addParticipant = (event) => {
		event.preventDefault()

		console.log(this.state.participants)
	}

	render(){

		let friends = this.props.myfriends

		return(
			<div>
				<form onSubmit={this.handleSubmit}>
				 <div>location: <input ref="location" onChange={this.handleChange}/></div>
				 <div>date: <input ref="date" onChange={this.handleChange}/></div>

				 <div>participants: 
					 <input list="friends" ref="participants" placeholder="find friends.." onChange={this.handleChange}/>
				 		 <datalist id="friends" value={this.state.participants} >
				   			{friends.map(friend => <option value={friend}/>)}
				 		 </datalist>
					<button onClick={this.handleChange}>add</button>
					
				 </div>

				 <div>amount: <input ref="amount"onChange={this.handleChange}/></div>
				 <div>additional comment: <textarea ref="comment" onChange={this.handleChange}/></div>
				 <div><input type="submit" value="host party!"/>
				 <button onClick={this.props.cancel}>cancel</button></div>
				 </form>
			</div>
			)
	}
}


function mapStateToProps(state) {
	
	return {
		myfriends: state.users.friends
	}
}


function mapDispatchToProps(dispatch) {

	return {
		viewFriends: (currentUser) => {
			dispatch(myFriends(currentUser))
			}
	}
}


export default connect(mapStateToProps, mapDispatchToProps)(PartyForm)