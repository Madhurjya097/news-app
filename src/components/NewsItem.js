import React, { Component } from 'react'
import PropTypes from 'prop-types'



export default class NewsItem extends Component {
  static propTypes = {
    prop: PropTypes
  }

  render() {

    let { title, content, url } = this.props
    return (
      <>
        <div className="card">
          <img src={`${process.env.PUBLIC_URL}/news_card_image.jpg`} className="card-img-top" alt="..." />
          <div className="card-body">
            <h6>{title}</h6>
            <p className="card-text">{content}</p>
            <a href={url}  className="btn btn-primary">Read more</a>
          </div>
        </div>
      </>
    )
  }
}
