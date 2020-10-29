import React from 'react';
import { Link } from 'react-router-dom';
import './Register.css';

const RegisterSuccess = () => {
  return (
    <div className='form-content-right'>
      <h1 className='form-success'>We have received your request!</h1>
      <p>Please login <Link to="/login">here</Link>.</p>
    </div>
  );
};

export default RegisterSuccess;