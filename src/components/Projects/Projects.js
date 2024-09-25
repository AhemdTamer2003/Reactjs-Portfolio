import React from 'react';
import './Projects.css'; // Import the CSS for styling

const Projects = () => {
  const projectData = [
    {
      title: 'Portfolio Website',
      description: 'A personal portfolio website showcasing my skills, projects, and contact information.',
      link: 'https://myportfolio.com', // Example link to project
      image: 'https://repository-images.githubusercontent.com/279903174/e6d970ed-8a4d-42fa-9f16-0b7efc34fb95', // Placeholder image (replace with actual image)
    },
    {
      title: 'E-commerce Platform',
      description: 'An e-commerce website built using React and Redux, featuring a fully functional shopping cart.',
      link: 'https://myecommerce.com',
      image: 'https://dunnsolutions.com/documents/10192/0/Ecommerce.jpg/abb8936b-6407-4652-b780-641612743234?t=1604984348000',
    },
    {
      title: 'UI/UX Design System',
      description: 'A custom design system created for web applications, including reusable components and styles.',
      link: 'https://mydesignsystem.com',
      image: 'https://view.subpage.app/app/company/C532b8873cc5442e2b1f2265b77a7d7dc/domain/MTiT0jFlGh/page/Ma9aQb2DGh/article/Mf8af4eaca3f9b166f045b71fe61100671698987694871/hero/M3a7968025eb1d23e85d85e2d960449b91699239359648.webp',
    },
    // Add more projects here
  ];

  return (
    <div id="projects" className="projects-section">
      <h2 className="section-title">My Projects</h2>
      <div className="projects-grid">
        {projectData.map((project, index) => (
          <div key={index} className="project-card">
            <img src={project.image} alt={project.title} className="project-image" />
            <div className="project-info">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <a href={project.link} className="project-link" target="_blank" rel="noopener noreferrer">
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
