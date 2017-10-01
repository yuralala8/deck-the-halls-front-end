import React from 'react'
import { connect } from 'react-redux'
import { myFriends } from '../actions/user'
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import { createParty } from '../actions/parties'

class PartyForm extends React.Component {

	constructor(){
		super()
		this.state = {
			location: "",
			date: "",
			amount: "",
			participants: []
		}
	}

	componentDidMount = () => {
		this.props.viewFriends(this.props.currentUserId)
	}

	// componentDidUpdate() {
	// 	this.props.createParty(this.state)
	// }

	handleChange = (event, val) => {
		this.setState({
			location: this.refs.location.value,
			date: this.refs.date.value,
			amount: this.refs.amount.value
		})
	}

	handleSubmit = (event) => {
		event.preventDefault()

		this.props.createParty(this.state)
		this.props.cancel()

		this.setState({
			location: "",
			date: "",
			amount: "",
			comment: "",
			participants: []
		})
		console.log(this.props)
		console.log('submitted')
	}

	logChange = (val) => {
		console.log("logging val!!", val.map(person => person.value))
		this.setState({
			participants: val.map(person => person.value)
		})
	}

	render(){

		let friends = this.props.myfriends.map(friend => friend.username)
		let options = friends.map(friend => { return {value: friend, label: friend}})
		console.log(this.props.parties)
		return(
			<div>
				<form onSubmit={this.handleSubmit}>
				 <div>location: <input ref="location" onChange={this.handleChange}/></div>
				 <div>date: <input ref="date" onChange={this.handleChange}/></div>

				 <div>participants: 
					 	<Select
					 		multi={true}
					 		joinValues={true}
					 		value={this.state.participants}
					 		options={options}
					 		onChange={this.logChange}
					 	/>
				 </div>

				 <div>Max Amount $: <input ref="amount"onChange={this.handleChange}/></div>
				 <div><input type="submit" value="host party!"/>
				 <button onClick={this.props.cancel}>cancel</button></div>
				 </form>


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
		viewFriends: (currentUser) => {
			dispatch(myFriends(currentUser))
			},
		createParty: (detail) => {
			dispatch(createParty(detail))
		}
	}
}


export default connect(mapStateToProps, mapDispatchToProps)(PartyForm)