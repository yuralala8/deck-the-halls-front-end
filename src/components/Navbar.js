import React from 'react';
import '../App.css';
import { NavLink, Redirect } from 'react-router-dom';
import stocking from '../images/stocking.png'
import FilterFriends from './FilterFriends'


const Navbar = (props) => {
	return (
			<div className="App-header">
			<div className="form-row-header">
				{props.isLoggedIn ? <img src={stocking} className="stockings"/> : null}

				{props.isLoggedIn ? <NavLink className="menu" to={`/profile/${props.currentUserId}`} exact>My Profile</NavLink> : <Redirect to= "/login"/>}
				
				{props.isLoggedIn ? <NavLink className="menu" to="/friends" exact>My Friends</NavLink> : <Redirect to="/login"/> }
				
				{props.isLoggedIn ? <NavLink className="menu" to="/search" exact>Shopping Idea</NavLink> : <Redirect to= "/login"/>}
				
				{props.isLoggedIn ? <NavLink className="menu" to="/party" exact>Secret Santa</NavLink> : <Redirect to= "/login"/>}
				
				{props.isLoggedIn ? <FilterFriends className="find-users" /> : null}
				
				{props.isLoggedIn ? <NavLink className="logout" to="/login" onClick={() => localStorage.clear()} exact>Logout</NavLink> : <Redirect to= "/login"/>}
			</div>
          </div>
		)
}


export default Navbar