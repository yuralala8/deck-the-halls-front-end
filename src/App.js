import React, { Component } from 'react';
import './App.css';
import LoginForm from './components/LoginForm'
import SignUpForm from './components/SignUpForm'
import Profile from './components/Profile'
import Navbar from './components/Navbar'
import Search from './components/Search'
import Auth from './adapters/auth'
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
    console.log("getting from local storage", localStorage.getItem('id'))
    this.setState({
      currentUser: {user:{id: localStorage.getItem('id')}},
      isLoggedIn: true
    })
  }


   loginUser = (userParams, history) => {
    Auth.login(userParams)
      .then(user =>  {
         console.log("user", user)
        this.setState({
          currentUser: user,
          isLoggedIn: true
        }, this.setLocalstorage(user))
        console.log(this.state, "logged in")
        history.push(`/profile/${user.user.id}`) 
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
      })
  }


  render() {

    let currentUserId = this.state.currentUser.user.id
    console.log("user id", this.state.currentUser)

    return (
      <div>
        <Navbar isLoggedIn={localStorage.getItem('jwt')} currentUserId = {currentUserId}/>

         {localStorage.getItem('jwt') ? null : <Redirect to= "/login"/>}
        <Route path="/login" render={(props) => <LoginForm {...props} onLogin={this.loginUser}/> }/>
        <Route path="/signup" render={(props) => <SignUpForm {...props} onSignUp={this.signUpUser} /> }/>
        <Route path={"/profile/:id"} render={props => <Profile currentUserId={this.state.currentUser} {...props}/>}/>
        <Route path="/search" render={() => <Search currentUserId = {currentUserId} /> }/>

      <div className="countdown">

      <Countdown />
      </div>
      </div>
    );
  }
}

export default App;
