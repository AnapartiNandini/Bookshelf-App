import React, { useState, useEffect } from 'react';
import Book from './Book';
import Footer from './Footer';
import Search from './Search';
import { Switch, Route, Link } from 'react-router-dom';

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
                          title={book.authors}
                          key={book.id}
                        />
                      ))}
                      {/* <li>
                    <div className="book">
                      <div className="book-top">
                        <div className="book-cover" style={{
                              width: "128px",
                              height: "193px",
                              backgroundImage: "url('http://books.google.com/books/content?id=H8tNBKmPO5UC&amp;printsec=frontcover&amp;img=1&amp;zoom=1&amp;edge=curl&amp;source=gbs_api')"
                            }}></div>
                        <div className="book-shelf-changer">
                          <select>
                            <option value="move" disabled="">Move to...</option>
                            <option value="currentlyReading">Currently Reading</option>
                            <option value="wantToRead">Want to Read</option>
                            <option value="read">Read</option>
                            <option value="none">None</option>
                          </select>
                        </div>
                      </div>
                      <div className="book-title">Android Fully Loaded</div>
                      <div className="book-authors">Rob Huddleston</div>
                    </div>
                  </li>
                  <li>
                    <div className="book">
                      <div className="book-top">
                        <div className="book-cover" style={{
                              width: "128px",
                              height: "193px",
                              backgroundImage: "url('http://books.google.com/books/content?id=cEytznnRkikC&amp;printsec=frontcover&amp;img=1&amp;zoom=1&amp;edge=curl&amp;source=gbs_api')"
                            }}></div>
                        <div className="book-shelf-changer">
                          <select>
                            <option value="move" disabled="">Move to...</option>
                            <option value="currentlyReading">Currently Reading</option>
                            <option value="wantToRead">Want to Read</option>
                            <option value="read">Read</option>
                            <option value="none">None</option>
                          </select>
                        </div>
                      </div>
                      <div className="book-title">Android User Interface Design</div>
                      <div className="book-authors">Ian G. Clifton</div>
                    </div>
                  </li>
                  <li>
                    <div className="book">
                      <div className="book-top">
                        <div className="book-cover" style={{
                              width: "128px",
                              height: "193px",
                              backgroundImage: "url('http://books.google.com/books/content?id=EV4nCgAAQBAJ&amp;printsec=frontcover&amp;img=1&amp;zoom=1&amp;edge=curl&amp;source=gbs_api')"
                            }}></div>
                        <div className="book-shelf-changer">
                          <select>
                            <option value="move" disabled="">Move to...</option>
                            <option value="currentlyReading">Currently Reading</option>
                            <option value="wantToRead">Want to Read</option>
                            <option value="read">Read</option>
                            <option value="none">None</option>
                          </select>
                        </div>
                      </div>
                      <div className="book-title">Android Quick APIs Reference</div>
                      <div className="book-authors">Onur Cinar</div>
                    </div>
                  </li>
                  <li>
                    <div className="book">
                      <div className="book-top">
                        <div className="book-cover" style={{
                              width: "128px",
                              height: "193px",
                              backgroundImage: "url('http://books.google.com/books/content?id=sqCGh16dvbIC&amp;printsec=frontcover&amp;img=1&amp;zoom=1&amp;edge=curl&amp;source=gbs_api')"
                            }}></div>
                        <div className="book-shelf-changer">
                          <select>
                            <option value="move" disabled="">Move to...</option>
                            <option value="currentlyReading">Currently Reading</option>
                            <option value="wantToRead">Want to Read</option>
                            <option value="read">Read</option>
                            <option value="none">None</option>
                          </select>
                        </div>
                      </div>
                      <div className="book-title">Banting</div>
                      <div className="book-authors">Michael Bliss</div>
                    </div>
                  </li>
                  <li>
                    <div className="book">
                      <div className="book-top">
                        <div className="book-cover" style={{
                              width: "128px",
                              height: "193px",
                              backgroundImage: "url('http://books.google.com/books/content?id=-nmNsArK9aoC&amp;printsec=frontcover&amp;img=1&amp;zoom=1&amp;source=gbs_api')"
                            }}></div>
                        <div className="book-shelf-changer">
                          <select>
                            <option value="move" disabled="">Move to...</option>
                            <option value="currentlyReading">Currently Reading</option>
                            <option value="wantToRead">Want to Read</option>
                            <option value="read">Read</option>
                            <option value="none">None</option>
                          </select>
                        </div>
                      </div>
                      <div className="book-title">Comics</div>
                      <div className="book-authors">Vincent Cecolini, John Nubbin</div>
                    </div>
                  </li> */}
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
                          title={book.authors}
                          key={book.id}
                        />
                      ))}
                      {/* <li>
                    <div className="book">
                      <div className="book-top">
                        <div className="book-cover" style={{
                              width: "128px",
                              height: "193px",
                              backgroundImage: "url('http://books.google.com/books/content?id=xlp6NE2NWecC&amp;printsec=frontcover&amp;img=1&amp;zoom=1&amp;edge=curl&amp;source=gbs_api')"
                            }}></div>
                        <div className="book-shelf-changer">
                          <select>
                            <option value="move" disabled="">Move to...</option>
                            <option value="currentlyReading">Currently Reading</option>
                            <option value="wantToRead">Want to Read</option>
                            <option value="read">Read</option>
                            <option value="none">None</option>
                          </select>
                        </div>
                      </div>
                      <div className="book-title">Android</div>
                      <div className="book-authors">Paul J. Ward</div>
                    </div>
                  </li>
                  <li>
                    <div className="book">
                      <div className="book-top">
                        <div className="book-cover" style={{
                              width: "128px",
                              height: "193px",
                              backgroundImage: "url('http://books.google.com/books/content?id=Ifg1ZpSo7cwC&amp;printsec=frontcover&amp;img=1&amp;zoom=1&amp;edge=curl&amp;source=gbs_api')"
                            }}></div>
                        <div className="book-shelf-changer">
                          <select>
                            <option value="move" disabled="">Move to...</option>
                            <option value="currentlyReading">Currently Reading</option>
                            <option value="wantToRead">Want to Read</option>
                            <option value="read">Read</option>
                            <option value="none">None</option>
                          </select>
                        </div>
                      </div>
                      <div className="book-title">Android Design Patterns</div>
                      <div className="book-authors">Greg Nudelman</div>
                    </div>
                  </li>
                  <li>
                    <div className="book">
                      <div className="book-top">
                        <div className="book-cover" style={{
                              width: "128px",
                              height: "193px",
                              backgroundImage: "url('http://books.google.com/books/content?id=0ks5ZV8fyzwC&amp;printsec=frontcover&amp;img=1&amp;zoom=1&amp;edge=curl&amp;source=gbs_api')"
                            }}></div>
                        <div className="book-shelf-changer">
                          <select>
                            <option value="move" disabled="">Move to...</option>
                            <option value="currentlyReading">Currently Reading</option>
                            <option value="wantToRead">Want to Read</option>
                            <option value="read">Read</option>
                            <option value="none">None</option>
                          </select>
                        </div>
                      </div>
                      <div className="book-title">Android Ice Cream Sandwich Superguide (PCWorld Superguides)</div>
                      <div className="book-authors"></div>
                    </div>
                  </li>
                  <li>
                    <div className="book">
                      <div className="book-top">
                        <div className="book-cover" style={{
                              width: "128px",
                              height: "193px",
                              backgroundImage: "url('http://books.google.com/books/content?id=U7VJCgAAQBAJ&amp;printsec=frontcover&amp;img=1&amp;zoom=1&amp;edge=curl&amp;source=gbs_api')"
                            }}></div>
                        <div className="book-shelf-changer">
                          <select>
                            <option value="move" disabled="">Move to...</option>
                            <option value="currentlyReading">Currently Reading</option>
                            <option value="wantToRead">Want to Read</option>
                            <option value="read">Read</option>
                            <option value="none">None</option>
                          </select>
                        </div>
                      </div>
                      <div className="book-title">Android Wearable Programming</div>
                      <div className="book-authors">Steven F. Daniel</div>
                    </div>
                  </li>
                  <li>
                    <div className="book">
                      <div className="book-top">
                        <div className="book-cover" style={{
                              width: "128px",
                              height: "193px",
                              backgroundImage: "url('http://books.google.com/books/content?id=BjDuAAAAMAAJ&amp;printsec=frontcover&amp;img=1&amp;zoom=1&amp;source=gbs_api')"
                            }}></div>
                        <div className="book-shelf-changer">
                          <select>
                            <option value="move" disabled="">Move to...</option>
                            <option value="currentlyReading">Currently Reading</option>
                            <option value="wantToRead">Want to Read</option>
                            <option value="read">Read</option>
                            <option value="none">None</option>
                          </select>
                        </div>
                      </div>
                      <div className="book-title">Batman</div>
                      <div className="book-authors">Frank Miller, Klaus Janson, Lynn Varley</div>
                    </div>
                  </li> */}
                    </ol>
                  </div>
                </div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Read</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                      {read.map(book => (
                        <Book
                          image={book.imageLinks.thumbnail}
                          title={book.title}
                          title={book.authors}
                          value={book.shelf}
                          key={book.id}
                        />
                      ))}
                      {/* <li>
                    <div className="book">
                      <div className="book-top">
                        <div className="book-cover" style={{
                              width: "128px",
                              height: "193px",
                              backgroundImage: "url('http://books.google.com/books/content?id=IEk2m00o9_IC&amp;printsec=frontcover&amp;img=1&amp;zoom=1&amp;edge=curl&amp;source=gbs_api')"
                            }}></div>
                        <div className="book-shelf-changer">
                          <select>
                            <option value="move" disabled="">Move to...</option>
                            <option value="currentlyReading">Currently Reading</option>
                            <option value="wantToRead">Want to Read</option>
                            <option value="read">Read</option>
                            <option value="none">None</option>
                          </select>
                        </div>
                      </div>
                      <div className="book-title">Android Apps Security</div>
                      <div className="book-authors">Sheran Gunasekera</div>
                    </div>
                  </li> */}
                    </ol>
                  </div>
                </div>
              </div>
            </div>
            <Footer />
          </div>
        </Route>
        <Route exact path="/books/new">
          <Search addToShelf={addToShelf} books={books}/>
        </Route>
      </Switch>
    </div>
  );
  //   <div classNameName="app">
  //     <Switch>
  //       <Route exact path="/">
  //         <div classNameName="list-books">
  //           <div classNameName="list-books-title">
  //             <h1>MITTReads</h1>
  //           </div>
  //           <div classNameNameName="list-books-content">
  //             <div>
  //               <div classNameName="bookshelf">
  //                 <h2 classNameName="bookshelf-title">Currently Reading</h2>
  //                 <div classNameName="bookshelf-books">
  //                   <ol classNameName="books-grid">
  //                     {/* {currentlyReading.map(book => (
  //                       <Book
  //                         book={book}
  //                         image={book.imageLinks.thumbnail}
  //                         title={book.title}
  //                         title={book.authors}
  //                         key={book.id}
  //                       />
  //                     ))} */}
  //                   </ol>
  //                 </div>
  //               </div>
  //               <div classNameName="bookshelf">
  //                 <h2 classNameName="bookshelf-title">Want To Read</h2>
  //                 <div classNameName="bookshelf-books">
  //                   <ol classNameName="books-grid">
  //                     {/* {wantToRead.map(book => (
  //                       <Book
  //                         book={book}
  //                         image={book.imageLinks.thumbnail}
  //                         title={book.title}
  //                         title={book.authors}
  //                         key={book.id}
  //                       />
  //                     ))} */}
  //                   </ol>
  //                 </div>
  //               </div>
  //               <div classNameName="bookshelf">
  //                 <h2 classNameName="bookshelf-title">Read</h2>
  //                 <div classNameName="bookshelf-books">
  //                   <ol classNameName="books-grid">
  //                     {/* {read.map(book => (
  //                       <Book
  //                         image={book.imageLinks.thumbnail}
  //                         title={book.title}
  //                         title={book.authors}
  //                         value={book.shelf}
  //                         key={book.id}
  //                       />
  //                     ))} */}
  //                   </ol>
  //                 </div>
  //               </div>
  //             </div>
  //           </div>
  //           <Footer />
  //         </div>
  //       </Route>
  //       {/* <Route exact path="/books/new">
  //         <Search addToShelf={addToShelf}/>
  //       </Route> */}
  //     </Switch>
  //   </div>
  // );
}

export default App;
