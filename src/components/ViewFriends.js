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
			You have {this.props.myfriends.length} friends
			{this.props.myfriends.map(friend => <p className="friends">{friend}</p>)}
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

