import React from 'react'
import '../App.css';
import WishForm from './WishForm'
import WishList from './WishList'
import { connect } from 'react-redux'
import { fetchWish, deleteWish } from '../actions/wishes'
import { Button, Modal } from 'semantic-ui-react'

class WishListContainer extends React.Component {
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

	hideForm = () => {
		this.setState({
			showWishForm: false
		})
	}


	componentDidMount(){
		console.log("wishlist container mounts")
		this.props.getWish(this.props.id)
	}

	componentWillReceiveProps(nextProps){
		console.log("componentWillReceiveProps", nextProps)
		if (this.props.id !== nextProps.id) {
			this.props.getWish(nextProps.id)
		}
	}


	handleDelete = (wish) => {
		// console.log("logging wish", wish.id)
		// console.log(this.props.deleteWish(wish.id))
		this.props.deleteWish(wish.id)
	}

	render(){
		console.log("wishlist container props", this.props)
		return(
			<div className="wishlist">
				{ this.props.currentUserId === this.props.id ? <button onClick={this.handleClick}> Add a wish... </button> : null}
				    <div className="wish-form">
	          	{ this.state.showWishForm ? <WishForm hideForm={this.hideForm} showWishForm={this.state.showWishForm} submitHandler={this.handleSubmit} formSubmit={this.formSubmit} /> : null }
	        		</div>
	        	<WishList currentUserId={this.props.currentUserId} id={this.props.id} handleDelete={this.handleDelete} wishList={this.props.wishList} showWishForm={this.state.showWishForm}/>
			</div>
		)
	}
}


function mapStateToProps(state) {
	console.log("wishlist container state", state)
	return {
		wishList: state.wishes.wishList
	}
}

function mapDispatchToProps(dispatch) {
	return {
		getWish: (profileId) => {
			dispatch(fetchWish(profileId))
		},
		deleteWish: (wishId) => {
			dispatch(deleteWish(wishId))
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(WishListContainer)