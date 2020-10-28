import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function BookEdit(props) {
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    img: "",
    content: "",
    page: "",
    location: "",
  });
  const { handleBookEdit, books } = props;
  const { id } = useParams();

  useEffect(() => {
    const prefillFormData = () => {
      const { title, author, img, content, page, location } = books.find(
        (book) => book.id === Number(id)
      );
      setFormData({ title, author, img, content, page, location });
    };
    if (books.length) {
      prefillFormData();
    }
  }, [books, id]);

  const handleChange = (e) => {
    const { title, value } = e.target;
    setFormData({ ...formData, [title]: value });
  };

  return (
    <div className="book-edit">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleBookEdit(id, formData);
        }}
      >
        <h3>Edit Book Details</h3>
        <label>
          Title:
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Author:
          <input
            type="text"
            name="author"
            value={formData.author}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Image URL:
          <input
            type="image"
            name="img"
            alt="book"
            value={formData.img}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Page:
          <input
            type="number"
            name="page"
            value={formData.page}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Content:
          <input
            type="text"
            name="content"
            value={formData.content}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Location:
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
          />
        </label>
        <br />
        <button>Edit</button>
      </form>
    </div>
  );
}
