import React from 'react'
import { addWish } from '../actions/wishes'
import { connect } from 'react-redux'
import { Rating } from 'semantic-ui-react'


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

	handleChange = (event, rate) => {
		console.log(rate)
		this.setState({
			itemDescription: this.props.selectedItem.caption,
			itemLink: this.props.selectedItem.prodContainerUrl ? `https://www.shop.com${this.props.selectedItem.prodContainerUrl}` : "",
			itemImage: this.props.selectedItem.imageURI,
			itemRank: rate.rating,
			itemPrice: this.props.selectedItem.localPrice
		})
	}

	handleSubmit = (event) => {
		event.preventDefault()

		if (this.state.itemRank){
			this.props.addToList(this.state)
			console.log("submitting", this.state)
			this.setState({
				itemRank: ""
			})
			window.location = `/profile/${this.props.currentUserId}`
		} else {
			alert("Please rate this!")
		}

	}


render(){

	
	return(
		<div>
		 	<form onSubmit={this.handleSubmit}>
			 	<div className="selected-caption"> {this.props.selectedItem.caption}</div>
			 	<img className="selected-img" src={this.props.selectedItem.imageURI}/>
			 	<div className="selected-price">Price: ${this.props.selectedItem.localPrice}</div>
			 	Desire Level <Rating icon="heart" maxRating={5} className="input-rank" onRate={this.handleChange}/>
			 	<input type="submit" className="submit-button"/>
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