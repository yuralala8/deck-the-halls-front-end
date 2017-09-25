import React from 'react'
import { connect } from 'react-redux'
import { fetchResults } from '../actions/shopping'
import SearchResults from './SearchResults'
import ShowAddForm from './ShowAddForm'

class Search extends React.Component{
	constructor(){
		super()
		this.state = {
			searchTerm: "",
			showAddForm: false,
			selectedItem: {}
		}
	}


	handleSubmit = (event) => {
		event.preventDefault()
		this.props.fetchData(this.state.searchTerm)
	}

	handleChange = (event) => {
		this.setState({
			searchTerm: event.target.value
		})
	}

	handleForm = (item) => {

		this.setState({
			showAddForm: true,
			selectedItem: item
		})
		
	}


	render(){
		return(
			<div>
				<form className="shop" onSubmit={this.handleSubmit}>
					<input onChange={this.handleChange}/>
					<input type="submit" value="Search"/>
				</form>
			<SearchResults showForm={this.handleForm}/>
			{this.state.showAddForm ? <ShowAddForm currentUserId = {this.props.currentUserId} selectedItem={this.state.selectedItem}/> : null}
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