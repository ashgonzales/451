import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { addComment, getOneBook } from "../../services/books";
import Comments from "../Comments";
import "./BookDetail.scss";

export default function BookDetail(props) {
  const [book, setBook] = useState(null);
  const [commentId, setCommentId] = useState("");
  const { comments } = props;
  const { id } = useParams();

  useEffect(() => {
    const fetchBook = async () => {
      const bookItem = await getOneBook(id);
      setBook(bookItem);
    };
    fetchBook();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const bookItem = await addComment(id, commentId);
    setBook(bookItem);
  };

  return (
    <div className="container">
      {book && (
        <>
          <div className="post">
            <div className="header_post">
              <img src={book.img} alt={book.title} className="bookdetail-img" />
            </div>

            <div className="body_post">
              <div className="post_content">
                <h1>{book.title}</h1>
                <p>
                  <span>User Comment:</span> {book.content}
                </p>

                <div className="container_infos">
                  <div className="postedBy">
                    <span>author</span>
                    {book.author}
                  </div>

                  <div className="container_tags">
                    <span>tags</span>
                    <div className="tags">
                      <ul>
                        <li>fiction</li>
                        <li>fantasy</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
      <div className="comment_post">
        {
          comments.map(comment => (
            <p key={comment.id}>
              {comment.user} commented:<br />
              {comment.content}
            </p>
          ))
        }
      </div>
      {/* <Comments /> */}
    </div>
  );
}
