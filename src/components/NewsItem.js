import React, { Component } from 'react'
import PropTypes from 'prop-types'



export default class NewsItem extends Component {
  static propTypes = {
    prop: PropTypes
  }

  render() {

    let { title, content, url, img_url, author, date } = this.props
  //  {date.toString().slice(0,15)}
    return (
      <>
        <div className="card">
          <img src={img_url!==null?img_url:`${process.env.PUBLIC_URL}/default_image.png`} className="card-img-top" alt="news_banner" />
          <div className="card-body" >
            <h6>{title}</h6>
            <p className="card-text">{content}</p>
            <p className="card-text"><small>By {author? author: "Unknown"}</small></p>
            <span className="badge text-bg-success my-2">{date.toString().slice(0,15)}</span> <br />
            <a href={url} target='_blank' rel='noreferrer'  className="btn btn-light">Read more</a>
          </div>
        </div>
      </>
    )
  }
}
