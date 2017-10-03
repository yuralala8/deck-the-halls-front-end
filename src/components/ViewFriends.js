import React from 'react'
import { connect } from 'react-redux'
import { myFriends } from '../actions/user'
import '../App.css'


class ViewFriends extends React.Component {

	componentDidMount = () => {
		this.props.viewFriends(this.props.currentUserId)
	}

	render(){
		console.log(this.props.myfriends)


		if (this.props.myfriends) {
		return(
			<div className="friends">
			<p className="friend-count">You have {this.props.myfriends.length} friends</p>
			{this.props.myfriends.map((friend, index) => (
				<div id="each-friend" key={index}>
					{friend.pro_pic == null ? <img src="https://lh3.googleusercontent.com/cy27QjEFLkmWOVyfj5v3rZA0j6VhD5u2ct_PqUToWHFSEyhpUnAkXcQRKw4RSasgyRVI=w300" id="friend-pic"/> : <img src={friend.pro_pic} id="friend-pic"/>}
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

