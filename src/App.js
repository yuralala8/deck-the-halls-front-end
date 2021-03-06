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
import Party from './components/Party'
import AlertContainer from 'react-alert'

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

  alertOptions = {
    offset: 14,
    position: 'top left',
    theme: 'dark',
    time: 3000,
    transition: 'scale'
  }


   loginUser = (userParams) => {
    Auth.login(userParams)
      .then(user =>  {
         console.log("user", user)
      if (user.user) {
        this.setState({
          currentUser: user,
          isLoggedIn: true
        }, this.setLocalstorage(user))
        console.log(this.state, "logged in")
        window.location.assign(`/profile/${user.user.id}`)

      } else if (user.error) {
        console.log("invalid username or password")
        this.msg.error('Invalid username or password')
      }
      })


  }

   setLocalstorage = (user)=>{
    localStorage.setItem('jwt', user.jwt)
    localStorage.setItem('id', user.user.id)
  }

     signUpUser = (userParams) => {
    Auth.signup(userParams)
      .then(user => {
        if (user.user) {
        this.setState({
          currentUser: user,
          isLoggedIn: true
        }, this.setLocalstorage(user))
        console.log(this.state, "signed up, logged in")
        window.location.assign(`/profile/${user.user.id}`)
      } else if (user.error) {
        console.log(userParams)
        this.msg.error(`${userParams.username} ${user.error.username[0]}`)
      }
      })
  }




  render() {

    let currentUserId = this.state.currentUser.user.id

    return (
      <div>
        <AlertContainer ref={a => this.msg = a} {...this.alertOptions} />
        
        <Navbar isLoggedIn={localStorage.getItem('jwt')} currentUserId = {currentUserId}/>

         {localStorage.getItem('jwt') ? null : <Redirect to= "/login"/>}
        <Route path="/login" render={(props) => <LoginForm {...props} onLogin={this.loginUser} /> }/>
        <Route path="/signup" render={(props) => <SignUpForm {...props} onSignUp={this.signUpUser} /> }/>
        <Route path={"/profile/:id"} render={props => <Profile isLoggedIn={this.state.isLoggedIn} currentUserId={this.state.currentUser.user.id} {...props}/>}/>
        <Route path="/search" render={() => <Search currentUserId = {currentUserId} /> }/>
        <Route path="/friends" render={() => <ViewFriends currentUserId = {currentUserId}/>}/>
        <Route path="/party" render={() => <Party currentUserId={this.state.currentUser.user.id}/>}/>

      </div>
    );
  }
}

export default App;