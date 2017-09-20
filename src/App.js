import React, { Component } from 'react';
import './App.css';
import LoginForm from './components/LoginForm'
import SignUpForm from './components/SignUpForm'
import Profile from './components/Profile'
import Navbar from './components/Navbar'
import Auth from './adapters/auth'
import { Route, Redirect } from 'react-router-dom'


class App extends Component {
  constructor(){
    super()

    this.state = {
      currentUser: {user:{id:null}},
      wishLists: [],
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
    return (
      <div className="App">
        <Navbar isLoggedIn={localStorage.getItem('jwt')}/>
        <Route path="/login" render={() => <LoginForm onLogin={this.loginUser}/> }/>
        <Route path="/signup" render={() => <SignUpForm onSignUp={this.signUpUser} /> }/>
        <Route path="/profile" render={() => <Profile currentUser = {this.state.currentUser} wishLists = {this.state.wishLists} /> }/>
        <Navbar />
     { localStorage.getItem('jwt') ? <Redirect to= "/profile"/> : <Redirect to= "/login"/> }
      </div>
    );
  }
}

export default App;
