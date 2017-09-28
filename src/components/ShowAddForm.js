import React from 'react'
import { addWish } from '../actions/wishes'
import { connect } from 'react-redux'

class ShowAddForm extends React.Component {

	constructor(){
		super()
		this.state = {
			itemDescription: "",
			itemLink: "",
			itemImage: "",
			itemRank: "",
			itemPrice: ""
		}
	}

	handleChange = (event) => {
		this.setState({
			itemDescription: this.props.selectedItem.caption,
			itemLink: this.props.selectedItem.focusedProductUrl ? this.props.selectedItem.focusedProductUrl : "",
			itemImage: this.props.selectedItem.imageURI,
			itemRank: this.refs.rank.value,
			itemPrice: this.props.selectedItem.localPrice
		})
	}

	handleSubmit = (event) => {
		event.preventDefault()
		console.log(this.state)
		this.props.addToList(this.state)
		this.setState({
			itemRank: ""
		})
		window.location = `/profile/${this.props.currentUserId}`

	}

render(){
	console.log("logging from showaddform", this.props.currentUserId)
	return(
		<div>
		 	<form onSubmit={this.handleSubmit}>
			 	<p>Wish Item:{this.props.selectedItem.caption}</p>
			 	Wish Priority Level:<input type="text" ref="rank" onChange={this.handleChange}/>
			 	<input type="submit"/>
		 	</form>
	  </div>
	  )

	}
}

function mapDispatchToProps(dispatch) {
	return {
		addToList: (item) => {
			dispatch(addWish(item))
		}
	}
}

export default connect(null, mapDispatchToProps)(ShowAddForm)