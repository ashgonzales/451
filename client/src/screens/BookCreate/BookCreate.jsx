import React, { useState } from "react";
import { useHistory } from 'react-router-dom';
import "./BookCreate.css";

export default function BookCreate(props) {
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    img: "",
    page: "",
    content: "",
    location: "",
  });
  const { handleBookCreate } = props;
  const history = useHistory();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const routeChange = () => {
    let path = `/books`;
    history.push(path);
  };

  return (
    <div className="create-container">
      <div className="create-content">
        <form
          className="create-form"
          onSubmit={(e) => {
            e.preventDefault();
            handleBookCreate(formData);
            routeChange();
          }}
        >
          <h1>Add New Book</h1>
          <div className="create-inputs">
            <label className="create-label">
              Title:
              <input
                className="create-input"
                type="text"
                name="title"
                placeholder="Book title"
                value={formData.title}
                onChange={handleChange}
              />
            </label>
          </div>
          <div className="create-inputs">
            <label className="create-label">
              Author:
              <input
                className="create-input"
                type="text"
                name="author"
                placeholder="Book author"
                value={formData.author}
                onChange={handleChange}
              />
            </label>
          </div>
          <div className="create-inputs">
            <label className="create-label">
              Image URL:
              <input
                className="create-input"
                type="url"
                name="img"
                placeholder="Book cover image URL"
                value={formData.img}
                onChange={handleChange}
              />
            </label>
          </div>
          <div className="create-inputs">
            <label className="create-label">
              Page:
              <input
                className="create-input"
                type="integer"
                name="page"
                placeholder="Current page you are on?"
                value={formData.page}
                onChange={handleChange}
              />
            </label>
          </div>
          <div className="create-inputs">
            <label className="create-label">
              Content:
              <input
                className="create-input"
                type="text"
                name="content"
                placeholder="Thoughts so far?"
                value={formData.content}
                onChange={handleChange}
              />
            </label>
          </div>
          <div className="create-inputs">
            <label className="create-label">
              Location:
              <input
                className="create-input"
                type="text"
                name="location"
                placeholder="Where are you reading?"
                value={formData.location}
                onChange={handleChange}
              />
            </label>
          </div>
          <button className="form-input-btn">Add Book</button>
        </form>
      </div>
    </div>
  );
}
