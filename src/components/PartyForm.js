import React from 'react'
import { connect } from 'react-redux'
import { myFriends } from '../actions/user'
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import { createParty } from '../actions/parties'
import { Input, Form } from 'semantic-ui-react'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import milkcookies from '../images/milkcookies.png'

class PartyForm extends React.Component {

	constructor(props){
		super(props)
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

	handleLocation = (event) => {
		this.setState({
			location: event.target.value
		})
	}

	handleChange = (date) => {
		this.setState({
			date: date
		})
	}

	handleAmount = (event) => {
		this.setState({
			amount: event.target.value
		})
	}


	handleSubmit = (event) => {
		event.preventDefault()
		if (this.state.location === ""){
			alert("Please enter location")
		} else if (this.state.date === ""){
			alert("Please select a date")
		} else if (this.state.amount === ""){
			alert("Please enter the amount")
		} else if (this.state.participants.length === 0){
			alert("Please add participants")
		} else {
		this.props.createParty(this.state)
		}
		this.setState({
			location: "",
			date: "",
			amount: "",
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
			<div className="party-form">
				<form onSubmit={this.handleSubmit}>
					<div className="form-row">
					Location: <div className="location-box"><Input className="input-location" value={this.state.location} onChange={this.handleLocation}/></div>
					Date: <div className="date-box"> 
							<DatePicker 
								className="input-date"
								selected={this.state.date} 
								onChange={this.handleChange}/></div>

					Max Amount $: <div className="max-box"><Input className="input-max" value={this.state.amount} onChange={this.handleAmount}/></div>
					</div>
					<div className="form-row">
						Participants: 
						<div className="participants-box">
							 	<Select className="select"
							 		placeholder="Select Friends to Invite . . ."
							 		multi={true}
							 		joinValues={true}
							 		value={this.state.participants}
							 		options={options}
							 		onChange={this.logChange}/>
						</div>
					</div>

					 	<div className="submit-box"><Input type="submit" value="host party!"/></div>
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
