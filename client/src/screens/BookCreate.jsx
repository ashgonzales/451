import React, { useState } from 'react'

export default function BookCreate(props) {
  const [formData, setFormData] = useState({
    name: ''
  })
  const { handleBookCreate } = props;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ [name]: value })
  }

  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      handleBookCreate(formData);
    }}>
      <h3>Add New Book</h3>
      <label>
        Name:
        <input
          type="text"
          name='name'
          value={formData.name}
          onChange={handleChange}
        />
      </label>
      <button>Add</button>
    </form>
  )
}