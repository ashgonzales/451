import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "./Register/Register.css";

export default function Login(props) {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const { username, password } = formData;
  const { error, handleLogin } = props;
  const history = useHistory();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const routeChange = () => {
    let path = `/books`;
    history.push(path);
  };

  return (
    <div className="form-container">
      <div className="form-content-left">
        <h1>La Vie des Livres</h1>
        <h2>a book-sharing app</h2>
      </div>
      <div className="form-content-right">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleLogin(formData);
          }}
          className="form"
        >
          <h3>Share your favourite books. Do it.</h3>
          <h1 className="signin-title">Sign In</h1>
          {error && <p>{error}</p>}
          <div className="form-inputs">
            <label className="form-label">Username:</label>
            <input
              className="form-input"
              type="text"
              name="username"
              placeholder="Enter your username"
              value={username}
              onChange={handleChange}
            />
          </div>
          <div className="form-inputs">
            <label className="form-label">Password:</label>
            <input
              className="form-input"
              type="password"
              name="password"
              placeholder="Enter your password"
              value={password}
              onChange={handleChange}
            />
          </div>
          <button className="form-input-btn" type="submit">
            Sign In
          </button>
          <span className='form-input-login'>
            Don't have an account yet? Sign up <Link to="/register">here</Link>.
        </span>
        </form>
      </div>
    </div>
  );
}
