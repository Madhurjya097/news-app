import React, { Component } from 'react'
import NewsItem from './NewsItem'
// const API_KEY = '7d9471f6d42741ecbfbcb9b7ee6df561'
// let api_url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${API_KEY}`
let news_json = require('./news.json')



export default class News extends Component {
    constructor() {
        super()
        this.state = {
            loading: true,
            articles: [],
            processed_till_now: 0
        }
    }
    async componentDidMount() {
        // let p = await fetch(api_url)
        // let news_json = await p.json()
        setTimeout(() => {
            this.setState({
                loading: false,
                articles: news_json !== undefined ? news_json.articles : [],
                processed_till_now: news_json !== undefined ? news_json.totalResults : 0,

            })
        }, 2000);
    }
    render() {
        // console.log(articles)
        const { articles, processed_till_now, loading } = this.state
        

        const truncate = (str, limit, placeholder) => {
            return str !== null ? str.slice(0, limit) + "..." : `${placeholder} not available`
        }
        const prev_page = () => {
            return 0
        }
        const next_page = () => {
            return 0
        }

        return (
            <>
                <div className="my-4 container">
                    <h2 className='text-center'>Get NewsHeadlines easily from NewsApp</h2>
                    <div id='heading'>

                    <div  id='loader'>
                        <h5 className=''>
                            {
                            !loading ? `${processed_till_now} News Headlines fetched till now` :<> <div className="spinner-grow text-primary" role="status">
                            </div>
                            <p>Loading your NewsHeadlines</p>
                            </>
                            }
                        </h5>
                    </div>
                    </div>


                    <div id="gridLayout">
                        {

                            articles !== undefined && articles.map((element, index) => {
                                let { title, description, url, urlToImage} = element
                                title = truncate(title, 60, "Title")
                                description = truncate(description, 170, "Description")
                                // console.log(`Title: ${title} | Content: ${description}`)
                                return (<NewsItem img_url={urlToImage} title={title} url={url} key={index} content={description} />)
                            })

                        }

                    </div>
                    <div className="pageButtons">
                        <button onClick={prev_page} className="btn btn-outline-dark">&larr; Previous</button>
                        <button onClick={next_page} className="btn btn-outline-dark">Next &rarr;</button>
                    </div>

                </div>
            </>
        )
    }
}
