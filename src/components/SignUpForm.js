import React from 'react'
import { Link } from 'react-router-dom'
import Countdown from './Countdown'
import { Input } from 'semantic-ui-react'


class SignUpForm extends React.Component {

  state = {
    usernameInput: "",
    passwordInput: ""
  }

  handleSubmit = (event) => {
    event.preventDefault()

    console.log(this.state.usernameInput)
    console.log(this.state.passwordInput)
    
    const userParams = {
      username: this.state.usernameInput,
      password: this.state.passwordInput
    }
    this.props.onSignUp(userParams)

    this.setState({
      usernameInput: "",
      passwordInput: ""
    })
  }

  handleUsernameChange = (event) => {

    this.setState({
      usernameInput: event.target.value
    })
  }

  handlePasswordChange = (event) => {
    this.setState({
      passwordInput: event.target.value
    })
  }
  render() {
    return (
      <div>
            <form onSubmit={this.handleSubmit} className="user-form">
              <h1>Sign Up</h1>

                  <Input type="text" placeholder="Username" onChange={this.handleUsernameChange} value={this.state.usernameInput}/>
                  <Input type="password" placeholder="Password" onChange={this.handlePasswordChange} value={this.state.passwordInput} />
                   <Input type="submit" value="Sign Up"/>
            </form> 
              Already Registered? <Link to={`/login`}>Log In</Link>
            <div className="countdown">        
              <Countdown />
            </div>
        </div>
    )
  }
}


export default SignUpForm
