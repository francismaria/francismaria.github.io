import { useState, useLayoutEffect, useRef } from 'react';
import Timeline from './timeline/Timeline';
import './Experience.css';

function Experience() {
  let cardRef = useRef(null);
  const [ visibility, setVisibility ] = useState(false);

  useLayoutEffect(() => {
    const handleScroll = () => {
      if(cardRef.current.getBoundingClientRect().top < 600) {
        setVisibility(true);
      }
    }
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });

  return (
    <section id='experience-section' ref={cardRef} className={`full-cover centered-content ${visibility ? 'visible-section' : 'hidden-section'}`}>
      <h1 className='section-header'>Professional Experience</h1>
      <Timeline />
    </section>
  )
}

export default Experience;