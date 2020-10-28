import React from "react";
import { Link } from "react-router-dom";
import './Books.css';

export default function Books(props) {
  const { books } = props;

  return (
    <div className="books-div">
      <h3>Library</h3>
      <div className="book-container">
          {books.map((book, idx) => (
            <Link to={`/books/${book.id}`} key={idx}>
                <div className="card-img">
                  <img src={book.img} alt={book.title} className="book-img" />
                </div>
                <div className="card-text">
                  <span className="card-title">   {book.title}
                  </span>
                  <br />            
                  <span className="card-author">
                    {book.author}
                  </span>
                </div>
            </Link>
          ))}
      </div>
    </div>
  );
}
