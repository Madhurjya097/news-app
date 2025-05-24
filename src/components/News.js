import React, { Component } from 'react'
import NewsItem from './NewsItem'


export default class News extends Component {
    render() {
        return (
            <>
                <div className="my-4 container text-center">
                    <div style={{ rowGap: "3rem" }} className="row row-cols-4">
                        <div className="col-md-4">
                            <NewsItem
                            title="Masco Co. (NYSE:MAS) Shares Bought by Royal Bank of Canada" 
                            content="Royal Bank of Canada grew its stake in shares of Masco Co. (NYSE:MAS - Free Report) by 10.3% in the fourth quarter, according to its most recent filing with the SEC. The fund owned 717,907 shares of the construction company's stock after acquiring an additional 67,191 shares during the period. Roya"
                        />
                        </div>
                        <div className="col-md-4">
                            <NewsItem
                                title="Aggressione selvaggia alla ex in strada a Prato: la donna salvata da tre stranieri" 
                                content="Vittima di un’aggressione definita &#8220;selvaggia&#8221; da parte del suo ex compagno, una professoressa di una scuola di Prato salvata da tre stranieri che si trovavano a passare dal parcheggio del centro commerciale Parco Prato dove si stava consumando la violenza. Il presunto responsabile &#8211; un 35enne, residente a Pistoia &#8211; è stato poi fermato dalla [&#8230;]L'articolo Aggressione selvaggia alla ex in strada a Prato: la donna salvata da tre stranieri proviene da Il Fatto Quotidiano."
                            />
                        </div>
                        <div className="col-md-4">
                            <NewsItem
                                title="Royal Bank of Canada Trims Stake in RBC Bearings Incorporated (NYSE:RBC)" 
                                content="Royal Bank of Canada reduced its stake in shares of RBC Bearings Incorporated (NYSE:RBC - Free Report) by 16.0% in the 4th quarter, according to the company in its most recent disclosure with the Securities and Exchange Commission. The institutional investor owned 174,790 shares of the industrial"
                            />
                        </div>
                        <div className="col-md-4">
                            <NewsItem
                                title="Globant S.A. (NYSE:GLOB) Shares Purchased by Royal Bank of Canada" 
                                content="Royal Bank of Canada boosted its position in Globant S.A. (NYSE:GLOB - Free Report) by 15.4% in the 4th quarter, according to its most recent filing with the Securities and Exchange Commission. The fund owned 254,107 shares of the information technology services provider's stock after purchasing an"
                            />
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
