import React from 'react'
import { connect } from 'react-redux'
import { fetchResults } from '../actions/shopping'


class AddToList extends React.Component {


	render(){
		return(
			<div>
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


export default connect(mapStateToProps, mapDispatchToProps)(AddToList)