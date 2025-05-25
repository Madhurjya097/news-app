import React, { Component } from 'react'
import PropTypes from 'prop-types'



export default class NewsItem extends Component {
  static propTypes = {
    prop: PropTypes
  }

  render() {

    let { title, content, url, img_url } = this.props
    return (
      <>
        <div className="card">
          <img src={img_url!==null?img_url:`${process.env.PUBLIC_URL}/default_image.png`} className="card-img-top" alt="..." />
          <div className="card-body" >
            <h6>{title}</h6>
            <p className="card-text">{content}</p>
            <a href={url} target='_blank' rel='noreferrer'  className="btn btn-dark">Read more</a>
          </div>
        </div>
      </>
    )
  }
}
