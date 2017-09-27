import React from 'react';
import '../App.css';
import { NavLink, Redirect } from 'react-router-dom';
import FilterFriends from './FilterFriends'



const Navbar = (props) => {
	return (
			<div className="App-header">

				{props.isLoggedIn ? <NavLink className="item" to={`/profile/${props.currentUserId}`} exact>My Profile</NavLink> : <Redirect to= "/login"/>}
				
				{props.isLoggedIn ? <NavLink className="item" to="/friends" exact>View Friends</NavLink> : <Redirect to="/login"/> }
				
				{props.isLoggedIn ? <NavLink className="item" to="/search" exact>Shopping Idea</NavLink> : <Redirect to= "/login"/>}
				
				{props.isLoggedIn ? <NavLink className="item" to="/party" exact>Secret Santa</NavLink> : <Redirect to= "/login"/>}

				{props.isLoggedIn ? <NavLink className="item" to="/login" onClick={() => localStorage.clear()} exact>Logout</NavLink> : <Redirect to= "/login"/>}

				{props.isLoggedIn ? <FilterFriends/> : null}

          </div>
		)
}


export default Navbar