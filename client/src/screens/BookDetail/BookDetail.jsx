import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import BookCreate from '../BookCreate/BookCreate';
import { getOneBook } from "../../services/books";
import { FcInspection } from "react-icons/fc";
import { TiDelete } from "react-icons/ti";
import "./BookDetail.scss";

export default function BookDetail(props) {
  const [book, setBook] = useState(null);
  // const [commentId, setCommentId] = useState("");
  const { deleteBook } = props;
  const { id } = useParams();

  useEffect(() => {
    const fetchBook = async () => {
      const bookItem = await getOneBook(id);
      setBook(bookItem);
    };
    fetchBook();
  }, [id]);

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   const bookItem = await addComment(id, commentId);
  //   setBook(bookItem);
  // };

  return (
    <div className="book-container">
      { book
        ? (
          <>
            <img
              src={book.img}
              alt={book.title} className="book-img" />
            <div className="book-text">
              <h2>{book.title}</h2>
              <p>By: {book.author}</p>
              <p>Currently on: {book.page}</p>
              <div className="delete-btn">
                <TiDelete size="20px" color="white" onClick={() => deleteBook(book.id)}></TiDelete>
                <div className="edit-btn">
                  <Link to={`/books/${book.id}/edit`}>
                    <FcInspection color="white" size="18px" />
                  </Link>
                </div>
              </div>
            </div>
          </>
        )
        : <Link to="/books/new">
            <BookCreate />
          </Link>
      }

    </div>
  );
}
