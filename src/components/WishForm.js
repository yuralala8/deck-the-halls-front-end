import React from 'react'
import '../App.css';
import { connect } from 'react-redux'
import { savingWish } from '../actions/wishes'

class WishForm extends React.Component {
	constructor(){
		super()

		this.state = {
			itemName: "",
			itemDescription: "",
			itemLink: "",
			itemImage: "",
			itemRank: "",
			itemPrice: ""
		}
	}

	handleChange = (event) => {
		this.setState({
			itemName: this.refs.name.value,
			itemDescription: this.refs.description.value,
			itemLink: this.refs.link.value,
			itemRank: this.refs.rank.value,
			itemImage: this.refs.image.value,
			itemPrice: this.refs.price.value
		})
	}

	handleSubmit = (event) => {
		event.preventDefault()

		this.props.addWish(this.state)
		
		this.setState({
			itemName: "",
			itemDescription: "",
			itemLink: "",
			itemImage: "",
			itemRank: "",
			itemPrice: ""
		})

	}


	render() {

		console.log(this.props)

	return (
		<div>
			<form onSubmit={this.handleSubmit}>
				<div>Item Name <input ref="name" type="text" onChange={this.handleChange} /></div>
				<div>Item Description <input ref="description" type="text" onChange={this.handleChange} /></div>
				<div>Link: <input ref="link" type="text" onChange={this.handleChange} /></div>
				<div>Priority: <input ref="rank" type="text" onChange={this.handleChange} /></div>
				<div>Price: <input ref="price" type="text" onChange={this.handleChange} /></div>
				<div>Attach an image: <input ref="image" type="text" onChange={this.handleChange} /></div>
				<input type="submit" value="Wish Upon a Star" />
			</form>
		</div>
		)

	}
}


function mapDispatchToProps(dispatch) {
	return {
		addWish: (wish) => {
			dispatch(savingWish(wish))
		}
	}
}

export default connect(null, mapDispatchToProps)(WishForm)