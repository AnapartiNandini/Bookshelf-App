import React, { useState } from "react";

const Search = (props) => {
  const [input, setInput] = useState("");
  const [books, setBooks] = useState([]);

  const filterBooks = (e) => {
    e.persist();
    setInput({ input: e.target.value });
    if (props.books.length > 0) {
      const result = props.books.filter(book => book.title.includes(e.target.value));
      setBooks({ books: result });
    }
  }

  return (
    <div className="app">
      <div className="search-books">
        <div className="search-books-bar">
          <a className="close-search" href="index.html">Close</a>
          <div className="search-books-input-wrapper">
            <input type="text"
              placeholder="Search by title or author" value="drama" />
          </div>
        </div>
        <div className="search-books-results">
          <div className="results-quantity">Your search returned 10 results.</div>
          <ol className="books-grid">
            {books.map(book => (
              <Book
                book={book}
                image={book.imageLinks.thumbnail}
                title={book.title}
                title={book.authors}
                key={book.id}
              />
            ))}
          </ol>
        </div>
      </div>
    </div>
  )
}

export default Search;
