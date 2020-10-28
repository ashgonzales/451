import React, { useState } from 'react';
import './Register.css';
import RegisterSignUp from './RegisterSignUp';
import RegisterSuccess from './RegisterSuccess';

const Register = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }

  return (
    <>
      <div className='form-container'>
        <div className='form-content-left'>
          <h1>La Vie des Livres</h1>
          <h2>a book-sharing app</h2>
        </div>
        {!isSubmitted ? (
          <RegisterSignUp submitForm={submitForm} />
        ) : (
          <RegisterSuccess />
        )}
      </div>
    </>
  );
};

export default Register;