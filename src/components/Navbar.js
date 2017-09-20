import React from 'react';
import '../App.css';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';



const Navbar = (props) => {
	return (
			<div className="App-header">

				{props.isLoggedIn ? <NavLink className="item" to="/profile" exact>My Profile</NavLink> : null}
				
				{props.isLoggedIn ? <NavLink className="item" to="/search" exact>Shopping Idea</NavLink> : null}
				
				{props.isLoggedIn ? <NavLink className="item" to="/party" exact>Secret Santa</NavLink> : null}

				{props.isLoggedIn ? <NavLink className="item" to="/login" onClick={() => localStorage.clear()} exact>Logout</NavLink> : null}

          </div>
		)
}


export default Navbar