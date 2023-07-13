import React from 'react'
import '../index.css'

const NewsItem = (props) => {
  //desructuring
  let { title, description, imageurl, newsurl, date } = props;
  return (
    <div className="my-3">
      {/* This is a news item */}
      <div className="card " style={{height : '30rem'}}>
        <img className="card-img-top custom-image" src={!imageurl ? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkTW_XvTHnKgIpsO0IrzokA8q62K0jFpgXdQ&usqp=CAU" : imageurl} alt="..."></img>
        <div className="card-body">
          <h5 className="card-title">{title}....</h5>
          <p className="card-text">{description}....</p>
          <p className="card-text"><small className="text-muted">{new Date(date).toGMTString()}</small></p>
          <a rel="noreferrer" href={newsurl} target="_blank" className="btn btn-sm btn-outline-primary">Read More</a>
        </div>
      </div>
    </div>
  )

}

export default NewsItem
