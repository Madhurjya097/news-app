import React, { Component } from 'react'
import PropTypes from 'prop-types'
const news_image = "news-app/news_card_image.jpg"


export default class NewsItem extends Component {
  static propTypes = {
    prop: PropTypes
  }

  render() {
    let { title, content } = this.props
    return (
      <>
        <div className="card" style={{ width: "18rem" }}>
          <img src={news_image} className="card-img-top" alt="..." />
          <div className="card-body">
            <h6>{title}</h6>
            <p className="card-text">{content}</p>
          </div>
        </div>
      </>
    )
  }
}
