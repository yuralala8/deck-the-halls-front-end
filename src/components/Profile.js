import React from 'react'
import '../App.css';
import WishListContainer from './WishListContainer'

class Profile extends React.Component {
	componentWillMount() {
		console.log("params", this.props.match.params)
	}
	render(){

		console.log("log from profile", this.props.match.params.id, this.props.currentUserId)
		return(
			<div>
				<button>View All Friends</button>
				<WishListContainer id={this.props.match.params.id} currentUserId={this.props.currentUserId.user.id}/>
				
			</div>
		)
	}
}


export default Profile