import React, { Component } from 'react';
import './App.css';
import Profile from './components/Profile'
import Navbar from './components/Navbar'


class App extends Component {
  constructor(){
    super()

    this.state = {
      currentUser: {},
      wishLists: []
    }
  }



  render() {
    return (
      <div className="App">
        <Navbar />
        <Profile currentUser = {this.state.currentUser} wishLists = {this.state.wishLists} /> 
      </div>
    );
  }
}

export default App;
