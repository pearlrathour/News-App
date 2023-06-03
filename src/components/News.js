import React, { Component } from 'react'
import NewsItem from './NewsItem'
import PropTypes from 'prop-types'

export class News extends Component {
  // articles = [
  //   {
  //     "source": {
  //       "id": "rte",
  //       "name": "RTE"
  //     },
  //     "author": "RTÉ News",
  //     "title": "UK continues with reopening plan despite concerns",
  //     "description": "British ministers are pushing on with a major easing of restrictions on Monday despite concerns over the Indian variant of coronavirus, as they were criticised for allowing the strain's import.",
  //     "url": "https://www.rte.ie/news/uk/2021/0515/1221764-uk-indian-variant/",
  //     "urlToImage": "https://img.rasset.ie/0016cb40-1600.jpg",
  //     "publishedAt": "2021-05-15T09:33:48Z",
  //     "content": "British ministers are pushing on with a major easing of restrictions on Monday despite concerns over the Indian variant of coronavirus, as they were criticised for allowing the strain's import.\r\nPrim… [+5066 chars]"
  //   },
  //   {
  //     "source": {
  //       "id": "the-times-of-india",
  //       "name": "The Times of India"
  //     },
  //     "author": "Times Of India",
  //     "title": "PBKS vs MI Live Score, IPL 2021: Mumbai Indians seek consistency; Punjab Kings eye return to winning ways",
  //     "description": "IPL Live Score: Mumbai Indians seek consistency; Punjab Kings eye return to winning ways. Stay with TOI to get IPL live score, playing 11, scorecard, highlights and ball by ball score updates of the 17th IPL match between Punjab Kings and Mumbai Indians.",
  //     "url": "http://timesofindia.indiatimes.com/sports/cricket/ipl/live-blog/punjab-kings-vs-mumbai-indians-pbks-vs-mi-live-score-ipl-2021-17th-match-chennai/liveblog/82214950.cms",
  //     "urlToImage": "https://static.toiimg.com/thumb/msid-82214950,width-1070,height-580,imgsize-157009,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
  //     "publishedAt": "2021-04-23T05:44:49Z",
  //     "content": "Ravi Bishnoi return on the cards?\r\nDeepak Hooda showed what he is capable of, but greater consistency would be needed from him if the team has to prosper. They bet on Australian pace imports Jhye Ric… [+3131 chars]"
  //   },
  //   {
  //     "source": {
  //       "id": "espn",
  //       "name": "ESPN"
  //     },
  //     "author": null,
  //     "title": "Josef Newgarden wins 1st Indy 500 in wreck-filled race - ESPN",
  //     "description": "Josef Newgarden finally captured his long-awaited Indianapolis 500 on Sunday and gave team owner Roger Penske his 19th and first since buying Indianapolis Motor Speedway.",
  //     "url": "https://www.espn.com/racing/indycar/story/_/id/37748726/josef-newgarden-wins-1st-indy-500-wreck-filled-race",
  //     "urlToImage": "https://a2.espncdn.com/combiner/i?img=%2Fphoto%2F2023%2F0528%2Fr1179480_1296x729_16%2D9.jpg",
  //     "publishedAt": "2023-05-28T20:33:00Z",
  //     "content": "May 28, 2023, 04:33 PM ET\r\nINDIANAPOLIS -- Josef Newgarden finally captured his long-awaited Indianapolis 500 on Sunday and gave team owner Roger Penske his 19th and first since buying Indianapolis M… [+1136 chars]"
  //   }
  // ]

  static defaultProps = {
    country : "in",
    pageSize : 16,
    category : "general",
  } 

  static propTypes = {
    country : PropTypes.string,
    pageSize : PropTypes.number,
    category : PropTypes.string
  }

  constructor() {
    super();
    console.log("Constructor");
    this.state = {
      articles: [],
      page: 1
    }
  }

  async componentDidMount() {
    console.log("cmd");
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&category=${this.props.category}&apiKey=29d774c4ed0142958ca0cc70070d9f6f&page=1&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);    //async waits for promise within body to be resolved
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({ articles: parsedData.articles, totalResults: parsedData.totalResults });
  }

  handlePreviousCLick = async () => {
    // console.log("Prev")

    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&category=${this.props.category}&apiKey=29d774c4ed0142958ca0cc70070d9f6f&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);    //async waits for promise within body to be resolved
    let parsedData = await data.json();
    console.log(parsedData);

    this.setState({
      page: this.state.page - 1,
      articles: parsedData.articles
    })
  }

  handleNextCLick = async () => {
    // console.log("Nxt")

    if (Math.ceil(this.state.totalResults / 16) < this.state.page + 1) {

    }

    else {
      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&category=${this.props.category}&apiKey=29d774c4ed0142958ca0cc70070d9f6f&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
      let data = await fetch(url);    //async waits for promise within body to be resolved
      let parsedData = await data.json();
      console.log(parsedData);

      this.setState({
        page: this.state.page + 1,
        articles: parsedData.articles
      })
    }
  }

  render() {
    console.log("render")
    return (
      <div className="container my-3">
        <h1 className="text-center">News App - Top Headlines</h1>
        <div className="row">
          {this.state.articles.map((element) => {
            return <div className="col-md-3" key={element.url}>
              <NewsItem title={element.title ? element.title.slice(0, 70) : ""} description={element.description ? element.description.slice(0, 84) : ""} imageurl={element.urlToImage} newsurl={element.url} author={element.author} date={element.publishedAt}/>
            </div>
          })}
        </div>
        <div className="container d-flex justify-content-between">
          <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.handlePreviousCLick}>&larr; Previous</button>
          <button disabled={Math.ceil(this.state.totalResults / this.props.pageSize) < this.state.page + 1} type="button" className="btn btn-dark" onClick={this.handleNextCLick}>Next &rarr;</button>
        </div>
      </div>
    )
  }
}

export default News
