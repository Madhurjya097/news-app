
import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar.js';
import News from './components/News.js';
import Quote from './components/Quote.js';

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      quote: "Quote not loaded yet",
      author: "Unknown",
    }
  }
  componentDidMount() {
    fetch(`https://dummyjson.com/quotes?limit=1&skip=${Math.floor(Math.random() * 1454)}`)
      .then(res => res.json())
      .then(data => this.setState({
        quote: data.quotes[0].quote,
        author: data.quotes[0].author ? data.quotes[0].author : "Unknown"
      }));

  }
  render() {
    const { quote, author } = this.state

    return (
      <>
        <Navbar title="NewsApp" />
        <Quote quote={quote} author={author} />
        <News />
      </>
    )
  }
}
