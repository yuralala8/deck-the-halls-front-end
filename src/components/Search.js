import React from 'react'
import { connect } from 'react-redux'
import { fetchResults } from '../actions/shopping'
import SearchResults from './SearchResults'
import ShowAddForm from './ShowAddForm'
import { Input, Header, Modal } from 'semantic-ui-react'

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

	hideForm = () => {
		this.setState({
			showAddForm: false
		})
	}


	render(){

	
		return(
			<div>
				<form className="shop" onSubmit={this.handleSubmit}>
					<Input placeholder="What do you want for Christmas ?" action='Get me this!' onChange={this.handleChange}/>
				</form>
			<SearchResults showAddForm={this.state.showAddForm} defaultImg={this.state.defaultImg} showForm={this.handleForm} hideForm={this.hideForm} currentUserId = {this.props.currentUserId} selectedItem={this.state.selectedItem}/>
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