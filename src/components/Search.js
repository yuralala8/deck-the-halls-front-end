import React from 'react'
import { connect } from 'react-redux'
import { fetchResults } from '../actions/shopping'

class Search extends React.Component{
	constructor(){
		super()
		this.state = {
			searchTerm: ""
		}
	}


	handleSubmit = (event) => {
		event.preventDefault()
		this.props.fetchData(this.state.searchTerm)
		console.log(this.props)
	}

	handleChange = (event) => {
		this.setState({
			searchTerm: event.target.value
		})
	}

	componentDidMount(){
		
	}


	render(){

		return(
			<div>
			<form onSubmit={this.handleSubmit}>
			<input onChange={this.handleChange}/>
			<input type="submit" value="Search"/>
			</form>
			</div>
			)
	}
}

function mapStateToProps(state) {
	return {
		data: state.shopping.data
	}
}

function mapDispatchToProps(dispatch) {
	return {
		fetchData: (searchTerm) => {
			dispatch(fetchResults(searchTerm))
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Search)