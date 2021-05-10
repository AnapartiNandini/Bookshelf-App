import React from 'react';

class Book extends React.Component {
  render() {
    return (
      <li>
        <div class="book">
          <div class="book-top">
            <div
              class="book-cover"
              style=
              {{
                width: "128px",
                height: "193px",
                backgroundImage: `url(${this.props.image === "null" || "N/A" || undefined ? "no-book-cover.png" : this.props.image}}`
              }}> 
                </div>
            <div class="book-shelf-changer">
              <select value={this.props.value}>
                <option value="move" disabled="">Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
              </select>
            </div>
          </div>
          <div class="book-title">${this.props.title}</div>
          <div class="book-authors">${this.props.author}</div>
        </div>
      </li>
    )
  }
}

export default Book;