import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getOneBook } from "../../services/books";
import "./BookDetail.css";

export default function BookDetail(props) {
  const [book, setBook] = useState(null);
  // const [commentId, setCommentId] = useState("");
  const { handleDelete } = props;
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
    <div className="book-detail">
      {book && (
        <>
          <img className="book-detail-img" src={book.img} alt={book.title} />
          <div className="detail">
            <div className="title">{book.title}</div>
            <div className="author">{book.author}</div>
            <div className="content">{book.content}</div>
            <div className="button-container">
              <button className="edit-button">
                <Link className="edit-link" to={`/books/${book.id}/edit`}>
                  Edit
                </Link>
              </button>
              <button
                className="delete-button"
                onClick={() => handleDelete(book.id)}
              >
                Delete
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
