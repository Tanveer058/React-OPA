import React from 'react';
import { Link } from 'react-router-dom';
import './notfound.css';

const NotFound = () => {
  return (
    <div className="not-found-page">
      <h2>404 - Page Not Found</h2>
      <p>Sorry, the page you are looking for does not exist.</p>
      <p>
        <Link to="/">Click here to go back to the homepage</Link>
      </p>
    </div>
  );
};

export default NotFound;
