import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './signin.css';

export default function Login() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    if (!name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Invalid email format';
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;

  };

  const handleSubmit = (e) => {
    e.preventDefault();


    if (validateForm()) {
      // Perform your form submission logic here
      console.log('Form submitted:', { name, email });
      window.location.href = '/app1';

    } else {
      console.log('Form validation failed');
    }

  };


  return (
    <div className="wrapper signIn">
      <div className="illustration"></div>
      <div className="form">
        <div className="heading">SIGN IN</div>
        <form>
          <div>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            {errors.name && <p className="error">{errors.name}</p>}
          </div>
          <div>
            <label htmlFor="e-mail">E-Mail</label>
            <input
              type="email"
              id="e-mail"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && <p className="error">{errors.email}</p>}
          </div>
          <button type="submit" onClick={handleSubmit}>
            Submit
          </button>
        </form>
        <p>
          Don't have an account? <Link to="/signup">Sign Up</Link>
        </p>
      </div>
    </div>
  );
}
