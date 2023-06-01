import React, { Component } from 'react'
import NewsItem from './NewsItem'

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
  //     "author": "Rajat Pandit",
  //     "title": "Army explores procurement of 350 light tanks for mountainous terrain after border standoff with China",
  //     "description": "India News:  The Army is now exploring the possibility of procuring 350 light tanks, which can also be transported by air, to augment its firepower in high-altitu",
  //     "url": "http://timesofindia.indiatimes.com/india/army-explores-procurement-of-350-light-tanks-for-mountainous-terrain-after-border-standoff-with-china/articleshow/82217825.cms",
  //     "urlToImage": "https://static.toiimg.com/thumb/msid-82217908,width-1070,height-580,imgsize-264639,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
  //     "publishedAt": "2021-04-23T08:29:00Z",
  //     "content": "Army explores procurement of 350 light tanks for mountainous terrain after border standoff with China\r\n<ul><li>News</li>\r\n<li>India News</li>\r\n<li>Army explores procurement of 350 light tanks for mou… [+58 chars]"
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
  //       "id": "the-times-of-india",
  //       "name": "The Times of India"
  //     },
  //     "author": "PTI",
  //     "title": "Zydus Cadila gets DCGI nod for hepatitis drug for Covid-19 treatment",
  //     "description": "India News: Drug firm Zydus Cadila on Friday said it has received restricted emergency use approval from the Indian drug regulator for the use of Pegylated Interf",
  //     "url": "http://timesofindia.indiatimes.com/india/zydus-cadila-gets-dcgi-nod-for-hepatitis-drug-for-covid-19-treatment/articleshow/82214909.cms",
  //     "urlToImage": "https://static.toiimg.com/thumb/msid-82214921,width-1070,height-580,imgsize-98052,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
  //     "publishedAt": "2021-04-23T05:43:00Z",
  //     "content": null
  //   },
  //   {
  //     "source": {
  //       "id": "al-jazeera-english",
  //       "name": "Al Jazeera English"
  //     },
  //     "author": "Al Jazeera",
  //     "title": "‘Dictatorship’: Protesting Indian wrestlers charged with rioting",
  //     "description": "Olympic medallists question police inaction against BJP MP accused of sexual harrassment by female wrestlers.",
  //     "url": "http://www.aljazeera.com/news/2023/5/28/world-is-watching-indian-police-drag-away-protesting-wrestlers",
  //     "urlToImage": "https://www.aljazeera.com/wp-content/uploads/2023/05/AP23148267492782-1685265924.jpg?resize=1920%2C1440",
  //     "publishedAt": "2023-05-28T11:37:35Z",
  //     "content": "Several top Indian wrestlers, including Olympic medallists Sakshi Malik and Bajrang Punia, have been charged with rioting and disorder by police in New Delhi following their arrest as they marched to… [+6598 chars]"
  //   },
  //   {
  //     "source": {
  //       "id": "time",
  //       "name": "Time"
  //     },
  //     "author": "Astha Rajvanshi / Mumbai",
  //     "title": "Deepika Padukone Is Bringing the World to Bollywood",
  //     "description": "Deepika Padukone, India’s most popular actress, has a vision for what it means to be a truly global superstar.",
  //     "url": "http://time.com/6278237/deepika-padukone-bollywood-india-profile/",
  //     "urlToImage": "https://api.time.com/wp-content/uploads/2023/05/deepika-padukone-1-5x4-1.jpg?quality=85&crop=0px%2C663px%2C1920px%2C1006px&resize=1200%2C628&strip",
  //     "publishedAt": "2023-05-11T01:00:52Z",
  //     "content": "Deepika Padukone never set out to take India to the world. She wanted the world to come to India. As the most popular actress in the world’s most populous country, she’s often asked if she’s going to… [+16478 chars]"
  //   },
  //   {
  //     "source": {
  //       "id": "fortune",
  //       "name": "Fortune"
  //     },
  //     "author": "Emma Hinchliffe, Paige McGlauflin",
  //     "title": "Why a former SoftBank partner is tackling mid-career drop-off for working mothers",
  //     "description": "Former SoftBank partner and Facebook India director Kirthiga Reddy is the cofounder of Laddrr, a resource hub for working mothers aiming to prevent mid-career drop-off.",
  //     "url": "https://fortune.com/2022/06/01/former-softbank-partner-tackling-mid-career-drop-off-for-working-mothers/",
  //     "urlToImage": "https://content.fortune.com/wp-content/uploads/2022/05/Kirthiga1.jpg?resize=1200,600",
  //     "publishedAt": "2022-06-01T13:22:34Z",
  //     "content": "Skip to Content"
  //   },
  //   {
  //     "source": {
  //       "id": "the-hindu",
  //       "name": "The Hindu"
  //     },
  //     "author": "Ananth Krishnan",
  //     "title": "Dalai Lama’s close aides targeted on Pegasus spyware list",
  //     "description": "‘Analysis indicates that the Indian govt. was selecting the potential targets’",
  //     "url": "https://www.thehindu.com/news/international/dalai-lamas-close-aides-targeted-on-pegasus-spyware-list/article35474285.ece",
  //     "urlToImage": "https://www.thehindu.com/news/international/dvshb0/article35474284.ece/ALTERNATES/LANDSCAPE_615/thjc-DalaiLama",
  //     "publishedAt": "2021-07-22T15:47:01Z",
  //     "content": "Several of the top India-based aides to the Tibetan spiritual leader, the Dalai Lama, figure on the list of potential targets for spying using the Pegasus spyware, according to a report on Thursday. … [+2399 chars]"
  //   },
  //   {
  //     "source": {
  //       "id": "techcrunch",
  //       "name": "TechCrunch"
  //     },
  //     "author": "Manish Singh",
  //     "title": "Ambani's JioCinema secures NBCUniversal titles, escalates Netflix and Disney rivalry",
  //     "description": "JioCinema, the affordable rival to Netflix and Disney's Hotstar in India, will soon be the home for NBC titles.",
  //     "url": "https://techcrunch.com/2023/05/29/jiocinema-nbcuniversal-viacom18/",
  //     "urlToImage": "https://techcrunch.com/wp-content/uploads/2023/05/GettyImages-168938613.jpg?resize=1200,800",
  //     "publishedAt": "2023-05-29T09:16:20Z",
  //     "content": "JioCinema, the affordable on-demand video streaming service rival to Netflix and Disney’s Hotstar in India, will soon be the home for “The Office” and other NBCUniversal titles.\r\nThe Viacom18 streami… [+1504 chars]"
  //   },
  //   {
  //     "source": {
  //       "id": "cnn",
  //       "name": "CNN"
  //     },
  //     "author": "Rhea Mogul",
  //     "title": "India's top female wrestlers detained on march as Modi inaugurates new Parliament | CNN",
  //     "description": "Some of India’s top female wrestlers were detained by police Sunday, in a chaotic escalation of a weeks-long protest against the president of the Wrestling Federation of India (WFI), who they accuse of sexual harassment.",
  //     "url": "https://www.cnn.com/2023/05/29/india/india-wrestlers-protest-detained-intl-hnk/index.html",
  //     "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/230529115640-02-indian-wrestlers-detained.jpg?c=16x9&q=w_800,c_fill",
  //     "publishedAt": "2023-05-29T07:52:45Z",
  //     "content": "Some of Indias top female wrestlers were detained by police Sunday, in a chaotic escalation of a weeks-long protest against the president of the Wrestling Federation of India (WFI), who they accuse o… [+6058 chars]"
  //   },
  //   {
  //     "source": {
  //       "id": "techcrunch",
  //       "name": "TechCrunch"
  //     },
  //     "author": "Manish Singh",
  //     "title": "Krafton's popular Battlegrounds Mobile India, successor to PUBG, returns",
  //     "description": "Krafton's Battlegrounds Mobile India (BGMI), successor to PUBG, now available to download nearly a year after being ousted.",
  //     "url": "https://techcrunch.com/2023/05/28/bgmi-battlegrounds-mobile-india-pubg-download/",
  //     "urlToImage": "https://techcrunch.com/wp-content/uploads/2023/05/GettyImages-1233476245.jpg?resize=1200,800",
  //     "publishedAt": "2023-05-29T04:02:37Z",
  //     "content": "Krafton’s Battlegrounds Mobile India, the once chart-topping mobile game in the South Asian market, is now available to download on Android nearly a year after being ousted due to national security c… [+1219 chars]"
  //   },
  //   {
  //     "source": {
  //       "id": "business-insider-uk",
  //       "name": "Business Insider (UK)"
  //     },
  //     "author": "Lloyd Lee",
  //     "title": "VIDEO: Indy 500 driver's tire flies off vehicle, hits sedan",
  //     "description": "The tire was ripped off of Kyle Kirkwood's car after his Andretti Autosport Honda clipped Felix Rosenqvist's vehicle during Sunday's Indianapolis 500.",
  //     "url": "https://www.insider.com/video-indy-500-tire-flies-off-vehicle-misses-stand-2023-5",
  //     "urlToImage": "https://i.insider.com/6474181e3be3b50019f72950?width=1200&format=jpeg",
  //     "publishedAt": "2023-05-29T03:30:21Z",
  //     "content": "Indy 500 spectators on Sunday had a brief scare after a crash caused a tire to fly off a driver's vehicle and barely miss the spectator stands before landing on someone's parked white car.\r\nDuring th… [+1672 chars]"
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
  constructor() {
    super();
    console.log("Constructor");
    this.state = {
      articles: [],
      loading: false,
      page: 1
    }
  }

  async componentDidMount() {
    console.log("cmd");
    let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=29d774c4ed0142958ca0cc70070d9f6f&page=1&pageSize=16";
    let data = await fetch(url);    //async waits for promise within body to be resolved
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({ articles: parsedData.articles, totalResults: parsedData.totalResults });
  }

  handlePreviousCLick = async () => {
    // console.log("Prev")

    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=29d774c4ed0142958ca0cc70070d9f6f&page=${this.state.page - 1}&pageSize=16`;
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

    if (Math.ceil(this.state.totalResults / 16) < this.state.page+1) {

    }

    else {
      let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=29d774c4ed0142958ca0cc70070d9f6f&page=${this.state.page + 1}&pageSize=16`;
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
              <NewsItem title={element.title ? element.title.slice(0, 90) : ""} description={element.description ? element.description.slice(0, 90) : ""} imageurl={element.urlToImage} newsurl={element.url} />
            </div>
          })}
        </div>
        <div className="container d-flex justify-content-between">
          <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.handlePreviousCLick}>&larr; Previous</button>
          <button type="button" className="btn btn-dark" onClick={this.handleNextCLick}>Next &rarr;</button>
        </div>
      </div>
    )
  }
}

export default News
