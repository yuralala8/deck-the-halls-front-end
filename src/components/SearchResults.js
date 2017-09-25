import React from 'react'
import { connect } from 'react-redux'
import { fetchResults } from '../actions/shopping'
import AddToList from './AddToList'
import ShowAddForm from './ShowAddForm'
import { Button, Modal } from 'semantic-ui-react'

const SearchResults = (props) => {

	const handleClick = (item) => {

		props.showForm(item)
	}

	let items = props.data.slice(0, 20).map((item, index) => (

			<div key={index}>
				<div>{item.caption}</div>
				<div>${item.localPrice}</div>
				<div>{item.focusedProductUrl ? <a href={item.focusedProductUrl} target="_blank">Link</a> : null}</div>
				<div><img src={item.imageURI} /></div>
				<div><button onClick={() => handleClick(item)} >Add to my list</button></div>
			</div>

			
			))
		
	return(
		<div>
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
