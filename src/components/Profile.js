import React from 'react'
import '../App.css';
import { connect } from 'react-redux'
import { sendRequest, fetchRequest, searchUser, acceptRequest, myFriends } from '../actions/user'
import WishListContainer from './WishListContainer'
import UserInfoContainer from './UserInfoContainer'

class Profile extends React.Component {


	componentDidMount = () => {
		this.props.fetchRequest(this.props.currentUserId)
		this.props.viewFriends(this.props.currentUserId)
		this.props.fetchData()
	}


	handleClick = (friendId) => {
		this.props.sendRequest(friendId)
	}

	handleAccept = (friendId) => {
		this.props.acceptRequest(friendId)
	}


	render(){
		

		if (this.props.data.length > 0){		
			let button = null;
			let currentUserId = this.props.currentUserId
			let currentProfileId = this.props.match.params.id

			let req = null;
			let users = this.props.data
			let requests = this.props.pendingReceived

			if (currentUserId != currentProfileId){
				if (this.props.myfriends.includes(this.props.data.find(user => user.id == currentProfileId).username)) {
					button = "you are friends"
				} else {
					if ((this.props.pendingSent.find(request => (request.user_id == currentUserId && request.friend_id == currentProfileId)))) {
						button = "pending request"
					} else {
							button = <button onClick={() => this.handleClick(currentProfileId)}>Send Friend Request</button>
					}
				}
				
			} else {
				button
			}
			
			if (requests) {
				req = requests.map(request => <p> {users.find(user => user.id == request.user_id).username + " has sent you a friend request"} <button onClick={() => this.handleAccept(request.user_id)}>accept</button></p>)
			} else if (this.props.myfriends.find(requests.map(request => users.find(user => user.id == request.user_id).username))) {
					req
			} else {
				req
			}


				
			return(
				<div className="profile-container">

					<UserInfoContainer id={this.props.match.params.id} currentUserId={this.props.currentUserId} userProfile={this.props.data}/>


				{(this.props.currentUserId == this.props.match.params.id) ? <div className="friend-requests">
				Friend Requests: 
				{req} 

				</div> : null}

				{button}

				<WishListContainer id={this.props.match.params.id} currentUserId={this.props.currentUserId}/>
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
		viewFriends: (currentUser) => {
			dispatch(myFriends(currentUser))
			}
	}
}


export default connect(mapStateToProps, mapDispatchToProps)(Profile)
