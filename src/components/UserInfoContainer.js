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


	hideForm = () => {
		this.setState({
			showProfileForm: false
		})
	}


	render(){
		let user = this.props.userProfile.find(user => user.id == this.props.id)
		let modal = <Modal 
					open={this.state.showProfileForm}
					onClose={this.hideForm} 
					trigger={ <Button onClick={this.handleClick} size='mini'>edit</Button> }
				>
				<Modal.Content> 
					<UserInfoForm 
						hideForm={this.hideForm} 
						formSubmit={this.formSubmit} 
						defaultImg={this.state.defaultImg}
				/>
				</Modal.Content>
				</Modal>
		
		
		return(
			<Card>
  			<p>{user.propic != null && user.propic != "" ? <Image className="propic" src={user.propic} alt="" width="300px" height="300px"/> : <Image src={this.state.defaultImg} alt="" width="300px" height="300px"/>} </p>
  			<Card.Content>
    			<Card.Header>
    				@{user.username}
            {this.props.currentUserId === this.props.id ? modal : null}
    			</Card.Header>
    			<Card.Description>
    				{user.bio}
    			</Card.Description>
  			</Card.Content>
			</Card>
		)
	}
}

export default (UserInfoContainer)
