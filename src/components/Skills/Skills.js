import React from 'react';
import './Skills.css';

const skillsData = [
  { skill: 'UI/UX Design', level: 90 },
  { skill: 'React.js', level: 85 },
  { skill: 'JavaScript', level: 80 },
  { skill: 'Web Development', level: 88 },
  { skill: 'HTML & CSS', level: 90 },
];

const Skills = () => {
  return (
    <section className="skills-section" id="skills">
      <h2 className="skills-title">My Skills</h2>
      <div className="skills-container">
        {skillsData.map(({ skill, level }, index) => (
          <div className="skill" key={index}>
            <h3 className="skill-name">{skill}</h3>
            <div className="progress-bar" role="progressbar" aria-valuenow={level} aria-valuemin="0" aria-valuemax="100">
              <div
                className="progress"
                style={{ width: `${level}%` }}
              >
                <span className="progress-label">{level}%</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
