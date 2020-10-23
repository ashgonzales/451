import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { addComment, getOneBook } from '../services/books';

export default function BookDetail(props) {
  const [book, setBook] = useState(null);
  const [commentId, setCommentId] = useState('')
  const { comments } = props;
  const { id } = useParams();

  useEffect(() => {
    const fetchBook = async () => {
      const bookItem = await getOneBook(id);
      setBook(bookItem);
    }
    fetchBook();
  }, [id])

  const handleSubmit = async (e) => {
    e.preventDefault();
    const bookItem = await addComment(id, commentId);
    setBook(bookItem);
  }
  
  const handleChange = (e) => {
    const { value } = e.target;
    setCommentId(value);
  }

  return (
    <div>
      {
        book &&
        <>
          <h3>{book.title}</h3>
          {book.comments.map(comment => (
            <p key={comment.id}>{comment.content}</p>
          ))}
          <form onSubmit={handleSubmit}>
            <select defaultValue='default' onChange={handleChange}>
              <option disabled value='default'>-- Select a comment --</option>
              {comments.map(comment => (
                <option value={comment.id} key={comment.id}>{comment.content}</option>
              ))}
            </select>
            <button>add</button>
          </form>
        </>
      }
    </div>
  )
}