import './Section.css';
import './Projects.css';

const projects = [
  {
    id: 1,
    title: 'Explore Incredible India',
    description:
      'Travel-style website with a full background image, smooth scrolling, and section-based layout.',
    projectLink: 'https://indian-tourist-website.vercel.app/',
  },
];

function ProjectCard({ project }) {
  return (
    <div className="project-card">
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <a href={project.projectLink} target="_blank" rel="noreferrer">
        View Project
      </a>
    </div>
  );
}

function Projects() {
  return (
    <section id="projects" className="site-section">
      <h2>Projects</h2>
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </section>
  );
}

export default Projects;
