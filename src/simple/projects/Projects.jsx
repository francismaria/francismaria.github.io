import React, { useState } from 'react';
import Filter from './components/filter/Filter'
import './Projects.css'

function Projects() {
  return (
    <section id='projects' className='sectionBackground'>
      <section className='sectionContents'>
        <h2 className='sectionTitle'>Projects</h2>
        <Filter />
      </section>
    </section>
  );
}

export default Projects;