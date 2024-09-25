import React from 'react';
import './Intro.css';  // Ensure this matches the actual filename, adjust capitalization if needed

const Intro = () => {
  return (
    <header className="intro">
      <div className="intro-content">
        <h1 className="intro-title">Hi, I’m Ahmed Tamer </h1>
        <p className="intro-description">
          I’m a passionate web developer with experience in building modern web applications.
          I love creating clean and efficient code to bring ideas to life.
        </p>
        <a href="#projects" className="intro-btn">View My Work</a>
      </div>
    </header>
  );
}

export default Intro;
