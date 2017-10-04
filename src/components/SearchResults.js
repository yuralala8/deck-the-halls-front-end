import React from 'react'
import { connect } from 'react-redux'
import { fetchResults } from '../actions/shopping'
import AddToList from './AddToList'
import ShowAddForm from './ShowAddForm'
import { Button, Icon, Image, Header, Modal, Card } from 'semantic-ui-react'

const SearchResults = (props) => {

	const handleClick = (item) => {
		props.showForm(item)
	}


	let items = (props.data ? props.data.slice(0, 20).map((item, index) => (
			<div className="each-result" key={index}>

				<Modal 
					open={props.showAddForm}
					onClose={props.hideForm}
					trigger={<div className="add-button"><Icon size="big" name="add circle" onClick={() => handleClick(item)} ></Icon></div>}
				>
				<Modal.Header>Add a Wish</Modal.Header>
				<Modal.Content> 
					<ShowAddForm 
						hideForm={props.hideForm} 
						formSubmit={props.formSubmit} 
						defaultImg={props.defaultImg}
						selectedItem={props.selectedItem}
						currentUserId = {props.currentUserId}
					/>
				</Modal.Content>

				</Modal>

				<div className="caption">{item.caption.length > 20 ? item.caption.slice(0, 60) + "..." : item.caption}</div>
				<div><img src={item.imageURI} className="wish-img"/></div>
				<div className="result-price">${item.localPrice}</div>
				<div className="result-more-info">{item.prodContainerUrl ? <a href={`https://www.shop.com${item.prodContainerUrl}`} target="_blank">More Info</a> : null}</div>
				
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
