import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class Quote extends Component {
    static propTypes = {
        prop: PropTypes
    }

    render() {
        const {quote, author} = this.props;
        return (
            <div className='container my-5'>
                <div className="card">
                    <div className="card-header">
                        Quote
                    </div>
                    <div className="card-body">
                        <figure>
                            <blockquote className="blockquote">
                                <p>{quote}</p>
                            </blockquote>
                            <figcaption className="blockquote-footer">
                                <cite title="Source Title">{author}</cite>
                            </figcaption>
                        </figure>
                    </div>
                </div>
            </div>
        )
    }
}

export default Quote
