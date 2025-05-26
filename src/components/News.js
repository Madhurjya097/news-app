import React, { Component } from 'react'
import NewsItem from './NewsItem'
// eslint-disable-next-line

// const API_KEY = '7d9471f6d42741ecbfbcb9b7ee6df561'

// let news_json = require('./news.json')
// let shownArticles

const API_KEY = '7d9471f6d42741ecbfbcb9b7ee6df561';
const END_POINT = 'top-headlines';
const category = 'health';



export default class News extends Component {
    constructor() {
        super()
        this.state = {
            loading: true,
            currentPage: 1,
            articles: [],
            processed_till_now: 0,
            shownArticles: null,
        }
    }
    async componentDidMount() {

        let api_url = `https://newsapi.org/v2/${END_POINT}?category=${category}&apiKey=${API_KEY}&page=1&pageSize=6`;
        let p = await fetch(api_url)
        let news_json = await p.json()
        // shownArticles = news_json.articles.length
        // console.log(`${shownArticles} are being shown in this page`)
        this.setState({
            loading: false, // To change
            articles: news_json !== undefined ? news_json.articles : [], // To re-fetch
            processed_till_now: news_json !== undefined ? news_json.totalResults : 0, //Not to change this 
            shownArticles: news_json !== undefined ? news_json.articles.length : 0
        })


    }
    render() {

        // console.log(articles)
        const { articles, processed_till_now, loading, currentPage, shownArticles } = this.state
 
        const truncate = (str, limit, placeholder) => {
            return str !== null ? str.slice(0, limit) + "..." : `${placeholder} not available`
        }
        const prev_page = async () => {
            this.setState({
                loading:true,
               
            })
            let api_url = `https://newsapi.org/v2/${END_POINT}?category=${category}&apiKey=${API_KEY}&page=${currentPage-1}&pageSize=6`;
            let p = await fetch(api_url)
            let news_json = await p.json()
            this.setState({
                loading:false,
                articles: news_json !== undefined ? news_json.articles : [],
                currentPage: currentPage !== 1 ? currentPage - 1 : currentPage,
                shownArticles: news_json !== undefined ? news_json.articles.length : 0
            })
            
        }
        const next_page = async() => {
            this.setState({
                loading:true,
                currentPage: currentPage !== shownArticles ? currentPage + 1 : currentPage
            })
            let api_url = `https://newsapi.org/v2/${END_POINT}?category=${category}&apiKey=${API_KEY}&page=${currentPage+1}&pageSize=6`;
            let p = await fetch(api_url)
            let news_json = await p.json()
            this.setState({
                loading:false,
                articles: news_json !== undefined ? news_json.articles : [],
                currentPage: currentPage !== shownArticles ? currentPage + 1 : currentPage,
                shownArticles: news_json !== undefined ? news_json.articles.length : 0
            })

            
        }


        return (
            <>
                <div className="my-4 container">
                    <h2 className='text-center'>Get NewsHeadlines easily from NewsApp</h2>
                    <div id='heading'>
                        <div id='loader'>
                            <h5 className=''>
                                {
                                    !loading ? `${processed_till_now} News Headlines fetched till now (${shownArticles} in this page)` : <> <div className="spinner-grow text-primary" role="status">
                                    </div>
                                        <p id=''>Loading your NewsHeadlines</p>
                                    </>
                                }
                            </h5>
                        </div>
                    </div>
                    <div id="gridLayout">
                        {
                            !loading && articles.map((element, index) => {
                                let { title, description, url, urlToImage, author, publishedAt } = element
                                console.log(author)
                                title = truncate(title, 60, "Title")
                                description = truncate(description, 170, "Description")
                                publishedAt = new Date(publishedAt)
                                // console.log(`Title: ${title} | Content: ${description}`)
                                return (<NewsItem img_url={urlToImage} title={title} url={url} key={index} content={description} author={author} date={publishedAt}/>)
                            })
                        }

                    </div>
                    <div className="pageButtons">
                        <button disabled={currentPage === 1} onClick={prev_page} className="btn btn-primary">&larr; Previous</button>
                        <p>Currently in page {currentPage} of {Math.ceil(processed_till_now / 6)}</p>
                        <button disabled={currentPage === Math.ceil(processed_till_now / 6)} onClick={next_page} className="btn btn-primary">Next &rarr;</button>
                    </div>

                </div>
            </>
        )
    }
}
