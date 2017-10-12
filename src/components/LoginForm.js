import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css'
import Countdown from './Countdown'
import { Input } from 'semantic-ui-react'
import bells2 from '../images/bells2.png'


class LoginForm extends React.Component {

  state = {
    usernameInput: "",
    passwordInput: ""
  }


  handleSubmit = (event) => {
    event.preventDefault()
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
      <div className="login">
            <form onSubmit={this.handleSubmit}>
              <h1>Login</h1>     

              <div className="form-row-login">
              <div className="login-input">
                  <Input type="text" placeholder="Username" onChange={this.handleUsernameChange} value={this.state.usernameInput}/>
                  <Input type="password" placeholder="Password" onChange={this.handlePasswordChange} value={this.state.passwordInput} />
              </div>
              <Input className="login-button" type="submit" value="Log In"/>
            </div>
            </form>
            
            <p className="form-row-login-register">
              First Visit? <Link to={`/signup`}>Register!</Link>
            </p>
            
 
        </div>
            <div className="countdown">        
              <Countdown />
            </div>
        </div>
       
    )
  }
}


export default LoginForm
