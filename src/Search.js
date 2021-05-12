import React, { useState } from "react";
import Book from './Book';
import { Link } from 'react-router-dom';

const Search = ({books}) => {
  const [input, setInput] = useState("");
  const [filteredBooks, setFilteredBooks] = useState([]);

  const filterBooks = (e) => {
    setInput(e.target.value);

    if (books.length > 0) {
      const result = books.filter(book => book.title.toLowerCase().includes(e.target.value.toLowerCase()));
      setFilteredBooks({ filteredBooks: result });
    }
  }

  return (
    <div className="app">
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/" className="close-search">Close</Link>
          <div className="search-books-input-wrapper">
            <input type="text"
              placeholder="Search by title or author" value={input} onChange={filterBooks}/>
          </div>
        </div>
        <div className="search-books-results">
          <div className="results-quantity">Your search returned {filteredBooks.length} results.</div>
          <ol className="books-grid">
            {filteredBooks.map(book => (
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
