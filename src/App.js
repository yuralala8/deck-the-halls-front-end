import React, { Component } from 'react';
import './App.css';
import LoginForm from './components/LoginForm'
import SignUpForm from './components/SignUpForm'
import Profile from './components/Profile'
import Navbar from './components/Navbar'
import Search from './components/Search'
import Auth from './adapters/auth'
import ViewFriends from './components/ViewFriends'
import { Route, Redirect } from 'react-router-dom'
import Countdown from './components/Countdown'


class App extends Component {
  constructor(){
    super()

    this.state = {
      currentUser: {user:{id:""}},
      isLoggedIn: false,
      loading: true
    }
  }

  componentWillMount() {
    this.setState({
      currentUser: {user:{id: localStorage.getItem('id')}},
      isLoggedIn: true
    })
  }


   loginUser = (userParams) => {
    Auth.login(userParams)
      .then(user =>  {
         console.log("user", user)
        this.setState({
          currentUser: user,
          isLoggedIn: true
        }, this.setLocalstorage(user))
        console.log(this.state, "logged in")
        window.location.assign(`/profile/${user.user.id}`)
        
      })

  }

   setLocalstorage = (user)=>{
    localStorage.setItem('jwt', user.jwt)
    localStorage.setItem('id', user.user.id)
  }

     signUpUser = (userParams) => {
    Auth.signup(userParams)
      .then(user => {
        this.setState({
          currentUser: user,
          isLoggedIn: true
        }, localStorage.setItem('jwt', user.jwt))
        console.log(this.state, "signed up, logged in")
        window.location.assign(`/profile/${user.user.id}`)
      })
  }


  render() {

    let currentUserId = this.state.currentUser.user.id

    return (
      <div>
        <Navbar isLoggedIn={localStorage.getItem('jwt')} currentUserId = {currentUserId}/>

         {localStorage.getItem('jwt') ? null : <Redirect to= "/login"/>}
        <Route path="/login" render={(props) => <LoginForm {...props} onLogin={this.loginUser}/> }/>
        <Route path="/signup" render={(props) => <SignUpForm {...props} onSignUp={this.signUpUser} /> }/>
        <Route path={"/profile/:id"} render={props => <Profile currentUserId={this.state.currentUser.user.id} {...props}/>}/>
        <Route path="/search" render={() => <Search currentUserId = {currentUserId} /> }/>
        <Route path="/friends" render={() => <ViewFriends currentUserId = {currentUserId}/>}/>
      <div className="countdown">

      <Countdown />
      </div>
      </div>
    );
  }
}

export default App;
