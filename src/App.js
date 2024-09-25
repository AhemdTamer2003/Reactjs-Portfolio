import React from 'react';
import NavBar from './components/NavBar/NavBar';
import Intro from './components/Intro/Intro';
import Projects from './components/Projects/Projects'; // Import Projects component
import Skills from './components/Skills/Skills';
import Media from './components/Media/Media';
import ContactForm from './components/ContactForm/ContactForm';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Intro />
      <Projects /> {/* Add the Projects section */}
      <Skills />
      <Media />
      <ContactForm />
    </div>
  );
}

export default App;
