import React from 'react'
import '../App.css';
import UserInfoForm from './UserInfoForm'
import { Card, Icon, Image, Button, Header, Modal } from 'semantic-ui-react'

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

			<Card>
				<p>{user.propic != null && user.propic != "" ? <Image className="propic" src={user.propic} alt="" width="300px" height="300px"/> : <Image src={this.state.defaultImg} alt="" width="300px" height="300px"/>} </p>
			<Card.Content>
			<Card.Header>
				@{user.username}
			{ this.props.currentUserId === this.props.id ? <Modal onClose={this.hideForm} trigger={<Button onClick={this.handleClick} size='mini'>edit</Button>}>{ this.state.showProfileForm ? <UserInfoForm hideForm={this.hideForm} submitHandler={this.handleSubmit} formSubmit={this.formSubmit} defaultImg={this.state.defaultImg}/> : null }</Modal> : null}
			</Card.Header>
			<Card.Description>
				{user.bio}
			</Card.Description>
			
			
			</Card.Content>

			</Card>
			)
	}
}


export default UserInfoContainer