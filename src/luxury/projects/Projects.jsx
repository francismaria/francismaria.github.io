import Filter from './filter/Filter';
import './Project.css';

function Projects() {
  return (
    <section id='projects-section' className='spaced-cover section-content'>
      <h1 className='section-header'>Projects</h1>
      <Filter />
    </section>
  );
}

export default Projects;