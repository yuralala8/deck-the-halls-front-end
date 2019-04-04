import React from 'react'
import { connect } from 'react-redux'
import { myFriends } from '../actions/user'
import '../App.css'


class ViewFriends extends React.Component {

	componentDidMount = () => {
		this.props.viewFriends(this.props.currentUserId)
	}

	render(){

		if (this.props.myfriends) {
		return(
			<div className="friends">
			<p className="friend-count">You have {this.props.myfriends.length} friends</p>
			{this.props.myfriends.map((friend, index) => (
				<div id="each-friend" key={index}>
					{friend.pro_pic == null ? <img src="/profile.png" id="friend-pic"/> : <img src={friend.pro_pic} id="friend-pic"/>}
					<div id="friend-name"><a href={`/profile/${friend.id}`}>@{friend.username}</a></div>
				</div>
			))}
			</div>
			)
		}
	}
}


function mapStateToProps(state) {
	return {
		myfriends: state.users.friends
	}
}

function mapDispatchToProps(dispatch) {
	return {
		viewFriends: (currentUser) => {
			dispatch(myFriends(currentUser))
			}
		}
	}

export default connect(mapStateToProps, mapDispatchToProps)(ViewFriends)
