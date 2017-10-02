import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css'
import Countdown from './Countdown'

class LoginForm extends React.Component {

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
    this.props.onLogin(userParams, this.props.history)
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
            <form onSubmit={this.handleSubmit}>
              <h1>Login</h1>     
                  <input type="text" placeholder="Username" onChange={this.handleUsernameChange} value={this.state.usernameInput}/>
                  <input type="password" placeholder="Password" onChange={this.handlePasswordChange} value={this.state.passwordInput} />
              <input type="submit" value="Log In"/>
            </form>

            
              New To Us? <Link to={`/signup`}>Register</Link>
            
 
            <div className="countdown">        
              <Countdown />
            </div>
        </div>
    )
  }
}


export default LoginForm
