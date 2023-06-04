import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    //desructuring
    let {title, description, imageurl, newsurl, author, date} = this.props;
    return (
      <div className="my-3">
        {/* This is a news item */}
        <div className="card">
          <img src={!imageurl ? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkTW_XvTHnKgIpsO0IrzokA8q62K0jFpgXdQ&usqp=CAU" : imageurl} className="card-img-top" alt="..."></img>
            <div className="card-body">
              <h5 className="card-title">{title}....</h5>
              <p className="card-text">{description}....</p>
              <p className="card-text"><small className="text-muted">By {author? author: "unknown"} on {new Date(date).toGMTString()}</small></p>
              <a rel="noreferrer" href={newsurl} target="_blank" className="btn btn-sm btn-outline-primary">Read More</a>
            </div>
        </div>
      </div>
    )
  }
}

export default NewsItem
