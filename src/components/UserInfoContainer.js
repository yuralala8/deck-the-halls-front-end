import React from 'react'
import '../App.css';
import UserInfoForm from './UserInfoForm'

class UserInfoContainer extends React.Component {
	constructor(){
		super()
		this.state = {
			showProfileForm: false,
			defaultImg: "https://lh3.googleusercontent.com/cy27QjEFLkmWOVyfj5v3rZA0j6VhD5u2ct_PqUToWHFSEyhpUnAkXcQRKw4RSasgyRVI=w300"
		}
	}


	handleClick = () => {
		this.setState({
			showProfileForm: true
		})
	}

	formSubmit = (profile) => {
		this.setState({
			showProfileForm: false
		})
	}

	hideForm = () => {
		this.setState({
			showProfileForm: false
		})
	}


	render(){
		let user = this.props.userProfile.find(user => user.id == this.props.id)
		
		return(
			<div>
				<p>{user.propic != null ? <img src={user.propic} alt="" id="propic"/> : <img src={this.state.defaultImg} alt="" width="300px" height="300px"/>} </p>
				{user.bio}

			{ this.props.currentUserId === this.props.id ? <button onClick={this.handleClick}> edit </button> : null}
			
			{ this.state.showProfileForm ? <UserInfoForm hideForm={this.hideForm} submitHandler={this.handleSubmit} formSubmit={this.formSubmit} /> : null }

			</div>
			)
	}
}


export default UserInfoContainer