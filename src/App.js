import React, { useState, useEffect } from 'react';
import Book from './Book';
import Footer from './Footer';
import Search from './Search';
import { Switch, Route } from 'react-router-dom';

const App = () => {
  const [books, setBooks] = useState([]);
  const [currentlyReading, setCurrentlyReading] = useState([]);
  const [wantToRead, setWantToRead] = useState([]);
  const [read, setRead] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(`http://localhost:5000/books`);
      const books = await response.json();
      setBooks({ books });
      console.log(books);
    }
    fetchData();
  }, []);

  const addToShelf = (book) => {
    if (book.shelf === "currentlyReading") {
      setCurrentlyReading(currentBooks => [...currentBooks, book]);
    } else if (book.shelf === "wantToRead") {
      setWantToRead(currentBooks => [...currentBooks, book]);
    } else if (book.shelf === "read") {
      setRead(currentBooks => [...currentBooks, book]);
    }
  }

  return (
    <div className="app">
      <Switch>
        <Route exact path="/">
          <div className="list-books">
            <div className="list-books-title">
              <h1>MITTReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Currently Reading</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                      {currentlyReading.map(book => (
                        <Book
                          book={book}
                          image={book.imageLinks.thumbnail}
                          title={book.title}
                          author={book.authors}
                          key={book.id}
                          shelf={book.shelf}
                          addToShelf={addToShelf}
                        />
                      ))}
                    </ol>
                  </div>
                </div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Want To Read</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                      {wantToRead.map(book => (
                        <Book
                          book={book}
                          image={book.imageLinks.thumbnail}
                          title={book.title}
                          author={book.authors}
                          key={book.id}
                          shelf={book.shelf}
                          addToShelf={addToShelf}
                        />
                      ))}
                    </ol>
                  </div>
                </div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Read</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                      {read.map(book => (
                        <Book
                          book={book}
                          image={book.imageLinks.thumbnail}
                          title={book.title}
                          author={book.authors}
                          key={book.id}
                          shelf={book.shelf}
                          addToShelf={addToShelf}
                        />
                      ))}
                    </ol>
                  </div>
                </div>
              </div>
            </div>
            <Footer />
          </div>
        </Route>
        <Route exact path="/books/new">
          <Search books={books} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
