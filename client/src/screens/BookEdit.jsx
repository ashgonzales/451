import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function BookEdit(props) {
  const [formData, setFormData] = useState({
    title: ''
  })
  const { handleBookEdit, books } = props;
  const { id } = useParams();

  useEffect(() => {
    const prefillFormData = () => {
      const { title } = books.find(book => book.id === Number(id));
      setFormData({ title });
    }
    if (books.length) {
      prefillFormData()
    }
  }, [books, id])

  const handleChange = (e) => {
    const { title, value } = e.target;
    setFormData({ [title]: value })
  }

  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      handleBookEdit(id, formData);
    }}>
      <h3>Edit Book Details</h3>
      <label>
        Title:
        <input
          type="text"
          name='title'
          value={formData.title}
          onChange={handleChange}
        />
      </label>
      <button>Edit</button>
    </form>
  )
}