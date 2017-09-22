import React, { Component } from 'react';
import './App.css';
import LoginForm from './components/LoginForm'
import SignUpForm from './components/SignUpForm'
import Profile from './components/Profile'
import Navbar from './components/Navbar'
import Search from './components/Search'
import Auth from './adapters/auth'
import { Route, Redirect } from 'react-router-dom'


class App extends Component {
  constructor(){
    super()

    this.state = {
      currentUser: {user:{id:""}},
      isLoggedIn: false,
      loading: true
    }
  }


   loginUser = (userParams) => {
    Auth.login(userParams)
      .then(user => {
        this.setState({
          currentUser: user,
          isLoggedIn: true
        }, this.setLocalstorage(user))
        console.log(this.state, "logged in") 
      })

  }

   setLocalstorage = (user)=>{
    localStorage.setItem('jwt', user.jwt)
    localStorage.setItem('id', user.user.id)
  }

     signUpUser = (userParams) => {
    Auth.signup(userParams)
      .then(user => {
        console.log(user)
        this.setState({
          currentUser: user,
          isLoggedIn: true
        }, localStorage.setItem('jwt', user.jwt))
        console.log(this.state, "signed up, logged in")
      })
  }



  render() {

    let currentUserId = this.state.currentUser.user.id

    return (
      <div className="App">
        <Navbar isLoggedIn={localStorage.getItem('jwt')} currentUserId = {currentUserId}/>
          {localStorage.getItem('jwt') ? <Redirect to={`/profile/${currentUserId}`} /> : <Redirect to= "/login"/>}
        <Route path="/login" render={() => <LoginForm onLogin={this.loginUser}/> }/>
        <Route path="/signup" render={() => <SignUpForm onSignUp={this.signUpUser} /> }/>
        <Route path={`/profile/${currentUserId}`} render={() => <Profile currentUserId = {currentUserId} /> }/>
        <Route path="/search" render={() => <Search currentUserId = {currentUserId} /> }/>
      </div>
    );
  }
}

export default App;
