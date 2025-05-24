import React, { Component } from 'react'
import NewsItem from './NewsItem'
const { articles } = require("./news.json")

// import {articles} from "./news.json" 
export default class News extends Component {
    render() {
        // console.log(articles)
        return (
            <>
                <div className="my-4 container text-center">
                    <div id="gridLayout">
                        {
                            articles.map((element, index) => {
                                const { title, description } = element
                                // console.log(`Title: ${title} | Content: ${description}`)
                                return (<NewsItem title={title} key={index} content={description} />)
                            })
                        }

                    </div>


                </div>
            </>
        )
    }
}
