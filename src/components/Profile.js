import React from 'react'
import '../App.css';
import WishList from './WishList'

class Profile extends React.Component {


	handleClick = (event) => {
    	event.preventDefault()

  	}

	render(){
		return(
			<div>
				<WishList />
			</div>
		)
	}
}



export default Profile