import React from 'react'
import PartyForm from './PartyForm'

class PartyContainer extends React.Component {

	constructor(){
		super()
		this.state = {
			showPartyForm: false
		}
	}

	handleClick = () => {
		this.setState({
			showPartyForm: true
		})
	}

	hideForm = () => {
		this.setState({
			showPartyForm: false
		})
	}

	render(){
		return(
			<div>
				<button onClick={this.handleClick}>Create a Party</button>
				{this.state.showPartyForm ? <PartyForm currentUserId={this.props.currentUserId} cancel={this.hideForm}/> : null}
			</div>
			)
	}
}

export default PartyContainer 