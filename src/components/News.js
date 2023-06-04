import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem'
import PropTypes from 'prop-types'

const News = (props) => {
  const [articles, setArticles] = useState([])
  const [totalResults, setTotalResults] = useState(0)
  const [page, setPage] = useState(1)

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  const updateNews = async () => {
    props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pagesize}`;
    let data = await fetch(url);    //async waits for promise within body to be resolved
    props.setProgress(30);
    let parsedData = await data.json();
    console.log("parsedData", parsedData)
    props.setProgress(50);
    setArticles(parsedData.articles);
    setTotalResults(parsedData.totalResults);
    props.setProgress(100);
  }

  useEffect(() => {
    document.title = `NewsMonkey - ${capitalizeFirstLetter(props.category)}`;
    updateNews();
  },[])

  const handlePreviousCLick = async () => {
    setPage(page - 1);
    updateNews();
  }

  const handleNextCLick = async () => {
    setPage(page + 1);
    updateNews();
  }

  console.log("ghjbj", articles)
  return (
    <>
      <div className="container my-3">
        <h1 className="text-center">News App - Top {capitalizeFirstLetter(props.category)} Headlines</h1>
        <div className="row">
          {articles.map((element) => {
            return <div className="col-md-3" key={element.url}>
              <NewsItem title={element.title ? element.title.slice(0, 75) : ""} description={element.description ? element.description.slice(0, 90) : ""} imageurl={element.urlToImage} newsurl={element.url} author={element.author} date={element.publishedAt} />
            </div>
          })}
        </div>
        <div className="container d-flex justify-content-between">
          <button disabled={page <= 1} type="button" className="btn btn-dark" onClick={handlePreviousCLick}>&larr; Previous</button>
          <button disabled={Math.ceil(totalResults / props.pageSize) < page + 1} type="button" className="btn btn-dark" onClick={handleNextCLick}>Next &rarr;</button>
        </div>
      </div>
    </>
  )
}

News.defaultProps = {
  country: "in",
  pageSize: 36,
  category: "general",
}

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string
}

export default News
