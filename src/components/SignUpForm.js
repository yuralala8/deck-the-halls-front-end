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
      <div className="login">
            <form onSubmit={this.handleSubmit} className="user-form">
              <h1>Sign Up</h1>

               <div className="form-row-login">
              <div className="login-input">

                  <Input type="text" placeholder="Username" onChange={this.handleUsernameChange} value={this.state.usernameInput}/>
                  <Input type="password" placeholder="Password" onChange={this.handlePasswordChange} value={this.state.passwordInput} />
           </div>
                   <Input className="login-button" type="submit" value="Sign Up"/>
           </div>
            </form> 

            <p className="error"> {this.props.error ? this.props.error : null}</p>

            <p className="form-row-login-register">
              Already Registered? <Link to={`/login`}>Log In</Link></p>
        </div>
            <div className="countdown">        
              <Countdown />
            </div>
      </div>
    )
  }
}


export default SignUpForm
