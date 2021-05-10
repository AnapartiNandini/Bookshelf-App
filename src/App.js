import React, { useState, useEffect } from 'react';
import Book from './Book';
import Header from './Header';
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

  return (
    <>
      <Switch>
        <Route exact path="/">
          <div class="list-books-content">
            <div>
              <div class="bookshelf">
                <h2 class="bookshelf-title">Currently Reading</h2>
                <div class="bookshelf-books">
                  <ol class="books-grid">
                    {currentlyReading.map(book => (
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
              <div class="bookshelf">
                <h2 class="bookshelf-title">Want To Read</h2>
                <div class="bookshelf-books">
                  <ol class="books-grid">
                    {wantToRead.map(book => (
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
              <div class="bookshelf">
                <h2 class="bookshelf-title">Read</h2>
                <div class="bookshelf-books">
                  <ol class="books-grid">
                    {read.map(book => (
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
          </div>
        </Route>
        <Route exact path="/books/new">
        </Route>
      </Switch>
      <Header />
    </>
  );
}

export default App;
