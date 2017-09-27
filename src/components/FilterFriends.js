import React from 'react'
import { connect } from 'react-redux'
import { searchUser } from '../actions/user'

class FilterFriends extends React.Component {

	constructor(){
		super()
		this.state = {
			searchTerm: "",
			fetched: false
		}

	}


	handleInput = (event) => {
		this.props.fetchData()
		this.setState({
			searchTerm: event.target.value,
			fetched: true
		})
	
	}

	handleClick(user) {
		console.log("clicked")
		window.location = `/profile/${user.id}`
	}

	render(){
		let users = this.props.data.filter(user => user.username.includes(this.state.searchTerm))
		return (
			<div className="find-users" >

			<input className="find-users" placeholder="find users" type="text" onChange={this.handleInput}/>

			{this.state.searchTerm == "" ? null : users.map(user => <p onClick={() =>this.handleClick(user)}>{user.username}</p>)}

			</div>
			)
	}
}

function mapStateToProps(state) {
	return {
		data: state.users.data
	}
}

function mapDispatchToProps(dispatch) {
	return {
		fetchData: () => {
			dispatch(searchUser())
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(FilterFriends)