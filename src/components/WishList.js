import React from 'react'
import '../App.css';
import WishForm from './WishForm'
import Wish from './Wish'
import WishListContainer from './WishListContainer'

class WishList extends React.Component {
	constructor(){
		super()
		this.state = {
			showWishForm: false,
			wishLists: []
		}
	}

	handleClick = () => {
		this.setState({
			showWishForm: true
		})
	}

	handleSubmit = (itemParams) => {
		this.setState({
			wishLists: [...this.state.wishLists, itemParams]
		})
	}

	formSubmit = (wish) => {
		this.setState({
			showWishForm: false
		})
	}


	render(){

		return(
			<div>
				<button onClick={this.handleClick}> Add a wish... </button>
				    <div className="wish-form">
	          	{ this.state.showWishForm ? <WishForm showWishForm={this.state.showWishForm} submitHandler={this.handleSubmit} formSubmit={this.formSubmit} /> : null }
	        		</div>
	        	<WishListContainer wishLists={this.state.wishLists}/>
			</div>
		)
	}
}



export default WishList