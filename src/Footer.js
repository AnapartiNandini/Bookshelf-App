import React from 'reacct';
import { Link } from "react-router-dom";

class Footer extends React.Component {
  render() {
    return (
      <>
        <div className="open-search">
          <Link to="/books/new">Add a book</Link>
        </div>
      </>
    )
  }
}