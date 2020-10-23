import React, { useState, useEffect } from 'react';
import { getAllComments } from '../services/comments';
import { getAllBooks, postBook, putBook } from '../services/books';
import { Route, Switch, useHistory } from 'react-router-dom';
import Comments from '../screens/Comments';
import Books from '../screens/Books/Books';
import BookCreate from '../screens/BookCreate';
import BookEdit from '../screens/BookEdit';
import BookDetail from '../screens/BookDetail';

export default function MainContainer() {
  const [books, setBooks] = useState([]);
  const [comments, setComments] = useState([]);
  const history = useHistory();

  useEffect(() => {
    const fetchBooks = async () => {
      const booksData = await getAllBooks();
      setBooks(booksData);
    }
    const fetchComments = async () => {
      const commentsData = await getAllComments();
      setComments(commentsData);
    }
    fetchBooks();
    fetchComments();
  }, [])

  const handleBookCreate = async (bookData) => {
    const newBook = await postBook(bookData);
    setBooks(prevState => ([...prevState, newBook]));
    history.push('/books')
  }

  const handleBookEdit = async (id, bookData) => {
    const updatedBook = await putBook(id, bookData);
    setBooks(prevState => prevState.map(book => {
      return book.id === Number(id) ? updatedBook : book
    }))
    history.push('/books')
  }

  return (
    <Switch>
      <Route path='/comments'>
        <Comments
          comments={comments}
        />
      </Route>
      <Route path='/books/new'>
        <BookCreate
          handleBookCreate={handleBookCreate}
        />
      </Route>
      <Route path='/books/:id/edit'>
        <BookEdit
          handleBookEdit={handleBookEdit}
          books={books}
        />
      </Route>
      <Route path='/books/:id'>
        <BookDetail comments={comments} />
      </Route>
      <Route path='/books'>
        <Books
          books={books}
        />
      </Route>
    </Switch>
  )
}