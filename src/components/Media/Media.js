import React from 'react';
import './Media.css'; // Importing the CSS for Media

const Media = () => {
  return (
    <div className="media-section">
      <h2 className="media-title">Follow Me On</h2>
      <div className="media-icons">
        {/* Replace # with actual URLs to your social media */}
        <a href="https://facebook.com" className="media-link" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-facebook-f"></i>
        </a>
        <a href="https://twitter.com" className="media-link" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="https://linkedin.com" className="media-link" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin-in"></i>
        </a>
        <a href="https://instagram.com" className="media-link" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-instagram"></i>
        </a>
      </div>
    </div>
  );
}

export default Media;
