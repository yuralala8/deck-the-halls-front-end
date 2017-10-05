import React from 'react'
import { connect } from 'react-redux'
import { searchUser } from '../actions/user'
import { Input } from 'semantic-ui-react'

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
				<Input icon='users' iconPosition='left' placeholder="Search users..." type="text" onChange={this.handleInput}/>
				<div>
				{this.state.searchTerm == "" ? null : users.map(user => <p className="filter-result" onClick={() =>this.handleClick(user)}>{user.username}</p>)}
				</div>
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