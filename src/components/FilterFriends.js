import React from 'react'
import { connect } from 'react-redux'
import { searchUser } from '../actions/user'
import AutoComplete from 'material-ui/AutoComplete';

class FilterFriends extends React.Component {

	constructor(){
		super()
		this.state = {
			searchTerm: "",
			fetched: false
		}

	}


	handleInput = (value) => {
		this.props.fetchData()
		this.setState({
			searchTerm: value,
			fetched: true
		})
		// console.log("this is the value", value)
	}

	handleClick(value) {
		console.log("clicked", value)
		if (value.id !== undefined) {

		window.location = `/profile/${value.id}`
		}
	}

	render(){

		let users = this.props.data

		const dataSourceConfig = {
			text: 'username',
			value: 'id'
		}

		return (
			<div className="filter-input">

				<AutoComplete
					className="input-filter-friends"
					hintText="Search Users..."
					dataSource={users}
					dataSourceConfig={dataSourceConfig}
					onUpdateInput={this.handleInput}
					onNewRequest={this.handleClick} 
					underlineStyle={{display: "none"}}
				/>
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