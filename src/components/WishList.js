import React from 'react'
import '../App.css';
import WishForm from './WishForm'
import WishListContainer from './WishListContainer'
import { connect } from 'react-redux'
import { fetchWish } from '../actions/wishes'

class WishList extends React.Component {
	constructor(){
		super()
		this.state = {
			showWishForm: false,
		}
	}

	handleClick = () => {
		this.setState({
			showWishForm: true
		})
	}


	formSubmit = (wish) => {
		this.setState({
			showWishForm: false
		})
	}


	componentDidMount(){
		this.props.getWish()
	}


	render(){
		console.log(this.props.wishList)
		return(
			<div className="wishlist">
				<button onClick={this.handleClick}> Add a wish... </button>
				    <div className="wish-form">
	          	{ this.state.showWishForm ? <WishForm showWishForm={this.state.showWishForm} submitHandler={this.handleSubmit} formSubmit={this.formSubmit} /> : null }
	        		</div>
	        	<WishListContainer wishList={this.props.wishList} showWishForm={this.state.showWishForm}/>
			</div>
		)
	}
}


function mapStateToProps(state) {
	return {
		wishList: state.wishes.wishList
	}
}

function mapDispatchToProps(dispatch) {
	return {
		getWish: () => {
			dispatch(fetchWish())
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(WishList)