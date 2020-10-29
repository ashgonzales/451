import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import "./BookEdit.css";

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
  const history = useHistory();

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

  const routeChange = () => {
    let path = `/books/{book.id}/edit`;
    history.push(path);
  };

  return (
    <div className="edit-container">
      <div className="edit-content">
        <form
          className="edit-form"
          onSubmit={(e) => {
            e.preventDefault();
            handleBookEdit(id, formData);
            routeChange();
          }}
        >
          <h3>Edit Book Details</h3>
          <div className="edit-inputs">
            <label className="edit-label">
              Title:
              <input
                className="edit-input"
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
              />
            </label>
          </div>
          <div className="edit-inputs">
            <label className="edit-label">
              Author:
              <input
                className="edit-input"
                type="text"
                name="author"
                value={formData.author}
                onChange={handleChange}
              />
            </label>
          </div>
          <div className="edit-inputs">
            <label className="edit-label">
              Image URL:
              <input
                className="edit-input"
                type="text"
                name="img"
                alt="book"
                value={formData.img}
                onChange={handleChange}
              />
            </label>
          </div>
          <div className="edit-inputs">
            <label className="edit-label">
              Page:
              <input
                className="edit-input"
                type="number"
                name="page"
                value={formData.page}
                onChange={handleChange}
              />
            </label>
          </div>
          <div className="edit-inputs">
            <label className="edit-label">
              Content:
              <input
                className="edit-input"
                type="text"
                name="content"
                value={formData.content}
                onChange={handleChange}
              />
            </label>
          </div>
          <div className="edit-inputs">
            <label className="edit-label">
              Location:
              <input
                className="edit-input"
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
              />
            </label>
          </div>

          <button>Edit</button>
        </form>
      </div>
    </div>
  );
}
