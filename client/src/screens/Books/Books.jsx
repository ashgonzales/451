import React from "react";
import { Link } from "react-router-dom";
import './Books.css';

export default function Books(props) {
  const { books } = props;

  return (
    <div>
      <h3>Library</h3>
      <div className="book-container">
        <div className="book-card">
          {books.map((book, idx) => (
            <Link to={`/book/${book.id}`} key={idx}>
              <div key={book.id}>
                <div className="card-img">
                  <img src={book.img} alt={book.title} className="book-img" />
                </div>
                <div className="card-text">
                  <span className="card-title">{book.title}
                  </span>
                  <br />            
                  <span className="card-author">
                    {book.author}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
