import React from 'react'
import { connect } from 'react-redux'
import { fetchResults } from '../actions/shopping'
import AddToList from './AddToList'
import ShowAddForm from './ShowAddForm'

const SearchResults = (props) => {

	const handleClick = (item) => {

		props.showForm(item)
	}

	let items = (props.data ? props.data.slice(0, 20).map((item, index) => (
			<div className="each-result" key={index}>
				<div className="caption">{item.caption}</div>
				<div><img src={item.imageURI} className="wish-img"/></div>
				<div>${item.localPrice}</div>
				<div>{item.focusedProductUrl ? <a href={item.focusedProductUrl} target="_blank">Link</a> : null}</div>
				<div className="add-button"><button onClick={() => handleClick(item)} >Add to my list</button></div>
			</div>

			
			)) : <div className="no-result">No results found</div>)

		
	return(
		<div className="result-list">
			{items}
		</div>
		)

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

export default connect(mapStateToProps, mapDispatchToProps)(SearchResults)
