import React, { Component } from 'react'
import NewsItem from './NewsItem'

const api_url = "https://api.mediastack.com/v1/news?access_key=6d0155af0ca3fb657c08a5369011fde8"

export default class News extends Component {
    constructor(){
        super()
        this.state = {
            articles: [],
            processed_till_now: 0
        }
    }
    async componentDidMount(){
        let p = await fetch(api_url)
        let data = await p.json()
        console.log(data)
        this.setState({
            articles: data.data,
            processed_till_now: data.data!==undefined?data.data.length:0,
            
        })
    }
    render() {
        // console.log(articles)
        const { articles, processed_till_now} = this.state
        console.log(articles)

        return (
            <>
                <div className="my-4 container">
                    <h2 className='mb-3'>Get NewsHeadlines easily from NewsApp</h2>
                    <h5 className='mb-4'>{processed_till_now} NewsHeadlines Fetched till now!</h5>
                    <div id="gridLayout">
                        {

                            articles!==undefined && articles.map((element, index,) => {
                                let { title, description, url } = element
                                title = title.slice(0,61) + "..."
                                description = description.slice(0,170) + "..."
                                // console.log(`Title: ${title} | Content: ${description}`)
                                return (<NewsItem title={title} url={url} key={index} content={description} />)
                            })
                            
                        }

                    </div>


                </div>
            </>
        )
    }
}
