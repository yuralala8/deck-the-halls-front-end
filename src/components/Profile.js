import React from 'react'
import '../App.css';
import { connect } from 'react-redux'
import { sendRequest, fetchRequest, searchUser, acceptRequest, myFriends, ignoreRequest } from '../actions/user'
import WishListContainer from './WishListContainer'
import UserInfoContainer from './UserInfoContainer'
import { Card, Feed, Icon, Button } from 'semantic-ui-react'


class Profile extends React.Component {

	constructor(){
		super()
		this.state = {
			defaultImg: "https://lh3.googleusercontent.com/cy27QjEFLkmWOVyfj5v3rZA0j6VhD5u2ct_PqUToWHFSEyhpUnAkXcQRKw4RSasgyRVI=w300"
		}
	}


	componentDidMount = () => {
		this.props.fetchRequest(this.props.currentUserId)
		this.props.viewFriends(this.props.currentUserId)
		this.props.fetchData()
	}


	handleClick = (friendId) => {
		this.props.sendRequest(friendId)
	}

	handleAccept = (friendId) => {
		this.props.fetchRequest(this.props.currentUserId)
		this.props.acceptRequest(friendId)
	}

	handleDelete = (friendId) => {
		this.props.ignoreRequest(friendId)
	}


	render(){
	

			let button = null;
			let currentUserId = this.props.currentUserId
			let currentProfileId = this.props.match.params.id

			let req = null;
			let users = this.props.data
			let requests = this.props.pendingReceived


		if (this.props.data.length > 0){		
			if (currentUserId != currentProfileId){
				if (this.props.myfriends.map(user => user.username).includes(this.props.data.find(user => user.id == currentProfileId).username)) {
					button = "you are friends"
				} else {

					if ((this.props.pendingSent.find(request => (request.user_id == currentUserId && request.friend_id == currentProfileId)))) {
						button = "pending request"
					} else {
							button = <Button size="tiny" className="send-request" onClick={() => this.handleClick(currentProfileId)}>Send Friend Request</Button>
					}
				}
				
			} else {
				button
			}
			
			if (requests) {
				req = requests.map(request =>  
					
					<div className="each-request">
					{users.find(user => user.id == request.user_id).propic != null ? <img src={users.find(user => user.id == request.user_id).propic} className="requester-img"/> : <img src={this.state.defaultImg} className="requester-img" /> }
					<p className="friend-request">
					{ "@" + users.find(user => user.id == request.user_id).username + " has sent you a friend request "}</p>
					<Button icon size="mini" className="accept" onClick={() => this.handleDelete(request.user_id)}><Icon name='delete'/></Button>
					<Button icon size="mini" className="accept" onClick={() => this.handleAccept(request.user_id)}><Icon name='check'/></Button> 

					</div>)

			} else if (this.props.myfriends.find(requests.map(request => users.find(user => user.id == request.user_id).username))) {
					req
			} else {
				req
			}


				
			return(
				<div>
			
				<UserInfoContainer id={this.props.match.params.id} currentUserId={this.props.currentUserId} userProfile={this.props.data}/>
			
				{(this.props.currentUserId == this.props.match.params.id) ? <Card className="request"><Card.Content><Icon name='user'/> Friend Requests: {req} </Card.Content></Card> : <Card className="request"><Card.Content><Icon name='user'/>{button}</Card.Content></Card>}
				

				<WishListContainer id={this.props.match.params.id} currentUserId={this.props.currentUserId} userProfile={this.props.data}/>
		
				
			
				</div>
			)
		} else {
			return <div> I'm loading!</div>
		}
	}
}


function mapStateToProps(state) {
	
	return {
		pendingReceived: state.users.pendingReceived,
		pendingSent: state.users.pendingSent,
		friendRequest: state.users.requestProcess,
		data: state.users.data,
		completedRequest: state.users.allFriendships,
		myfriends: state.users.friends
	}
}


function mapDispatchToProps(dispatch) {

	return {
		sendRequest: (friendId) => {
			dispatch(sendRequest(friendId))
		},
		fetchRequest: (currentUserId) => {
			dispatch(fetchRequest(currentUserId))
		},
		fetchData: () => {
			dispatch(searchUser())
		},
		acceptRequest: (friendId) => {
			dispatch(acceptRequest(friendId))
		},
		ignoreRequest: (friendId) => {
			dispatch(ignoreRequest(friendId))
		},
		viewFriends: (currentUser) => {
			dispatch(myFriends(currentUser))
			}
	}
}


export default connect(mapStateToProps, mapDispatchToProps)(Profile)
