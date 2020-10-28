import React from 'react';
import { Link } from 'react-router-dom';
import validate from './validateInfo';
import useForm from './useForm';
import './Register.css';

const RegisterSignUp = ({ submitForm }) => {
  const { handleChange, handleSubmit, values, errors } = useForm(
    submitForm,
    validate
  );

  return (
    <div className='form-content-right'>
      <h1
        className="signin-title">Sign Up</h1>
        <form onSubmit={handleSubmit} className='form' noValidate>
          <h1>
            What are your friends reading? Create your account below to see!
          </h1>
          <div className='form-inputs'>
            <label className='form-label'>Username</label>
            <input
              className='form-input'
              type='text'
              name='username'
              placeholder='Enter your username'
              value={values.username}
              onChange={handleChange}
            />
            {errors.username && <p>{errors.username}</p>}
          </div>
          <div className='form-inputs'>
            <label className='form-label'>Email</label>
            <input
              className='form-input'
              type='email'
              name='email'
              placeholder='Enter your email'
              value={values.email}
              onChange={handleChange}
            />
            {errors.email && <p>{errors.email}</p>}
          </div>
          <div className='form-inputs'>
            <label className='form-label'>Password</label>
            <input
              className='form-input'
              type='password'
              name='password'
              placeholder='Enter your password'
              value={values.password}
              onChange={handleChange}
            />
            {errors.password && <p>{errors.password}</p>}
          </div>
          <div className='form-inputs'>
            <label className='form-label'>Confirm Password</label>
            <input
              className='form-input'
              type='password'
              name='password2'
              placeholder='Confirm your password'
              value={values.password2}
              onChange={handleChange}
            />
            {errors.password2 && <p>{errors.password2}</p>}
          </div>
          <button className='form-input-btn' type='submit'>
            Sign up
        </button>
          <span className='form-input-login'>
            Already have an account? Login <Link to="/login">here</Link>.
        </span>
        </form>
    </div>
  );
};

export default RegisterSignUp;




// import React, { useState } from "react";
// import validate from './validateInfo';
// import useForm from './useForm';
// import './Form.css';
// import { useHistory } from "react-router-dom";

// export default function FormSignUp({ submitForm }) {
//   const { handleChange, handleSubmit, values, errors } = useForm(
//     submitForm,
//     validate
//   );
//   const [formData, setFormData] = useState({
//     username: "",
//     email: "",
//     password: "",
//     password2: ""
//   });
//   const { username, email, password } = formData;
//   const { error, handleRegister } = props;
//   const history = useHistory();

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevState) => ({
//       ...prevState,
//       [name]: value,
//     }));
//   };

//   const routeChange = () => {
//     let path = `/books`;
//     history.push(path);
//   };

//   return (
//     <div className="form-content-right">
//       <form
//         onSubmit={(e) => {
//           e.preventDefault();
//           handleRegister(formData);
//         }}
//       >
//         <h3>Sign Up</h3>
//         {error && <p>{error}</p>}
//         <div className="form-inputs">
//           <label htmlFor="username" className="form-label">
//             Username:
//           </label>
//           <input
//             id="username"
//             type="text"
//             value={username}
//             name="username"
//             className="form-input"
//             placeholder="Username"
//             onChange={handleChange}
//           />
//           {errors.username && <p>{errors.username}</p>}
//         </div>
//         <div className="form-inputs">
//           <label htmlFor="email" className="form-label">
//             Email:
//           </label>
//           <input
//             id="email"
//             type="email"
//             value={email}
//             name="email"
//             className="form-input"
//             placeholder="Email"
//             onChange={handleChange}
//           />
//           {errors.email && <p>{errors.email}</p>}
//         </div>
//         <div className="form-inputs">
//           <label htmlFor="password" className="form-label">
//             Password:
//           </label>
//           <input
//             id="password"
//             type="password"
//             value={password}
//             name="email"
//             className="form-input"
//             placeholder="Password"
//             onChange={handleChange}
//           />
//           {errors.password && <p>{errors.password}</p>}
//         </div>
//         <div className="form-inputs">
//           <label htmlFor="password2" className="form-label">
//             Confirm Password:
//           </label>
//           <input
//             id="password2"
//             type="password2"
//             value={password}
//             name="password2"
//             className="form-input"
//             placeholder="Confirm Password"
//             onChange={handleChange}
//           />
//           {errors.password2 && <p>{errors.password2}</p>}
//         </div>
//         <button classname="form-input-btn" onClick={routeChange}>Sign Up</button>
//         <span className="form-input-login">
//           Already have an account? Login <Link to="/login">here</Link>.
//         </span>
//       </form>
//     </div>
//   );
// }
