import './Section.css';
import './Skills.css';

const skills = ['HTML5', 'CSS3', 'JavaScript (Basics)', 'Java', 'Git & GitHub'];

function Skills() {
  return (
    <section id="skills" className="site-section">
      <h2>Skills</h2>
      <ul className="skills-list">
        {skills.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
    </section>
  );
}

export default Skills;
