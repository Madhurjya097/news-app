
import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar.js';
import News from './components/News.js';

export default class App extends Component {
  constructor() {
    super()
    this.state = {
   
    }

  }
  render() {

  
    return (
      <>
        <Navbar title="NewsApp" />
        {/* <div  className="state">The state is {}</div> */}
        <News />
        
      </>
    )
  }
}
