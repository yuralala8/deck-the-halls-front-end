import React from 'react'
import PartyForm from './PartyForm'
import PartyList from './PartyList'

const Party = (props) => {

		return(
			<div>
				<div className="party-container">
					<PartyForm currentUserId={props.currentUserId}/>
					<PartyList currentUserId={props.currentUserId}/>
				</div>
			</div>
			)
}

export default Party