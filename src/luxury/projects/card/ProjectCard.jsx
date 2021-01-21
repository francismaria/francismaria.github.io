import React, { useState } from 'react';
import './ProjectCard.css'

function ProjectCard(props) {
  const [detailsVisible, setDetailsVisible] = useState(false);

  const visibilityAction = () => {
    setDetailsVisible(!detailsVisible);
  }

  return (
    <section className='projectCard'>
      <div className='projectInfo'>
        <h3>{props.name}</h3>
        <h6>{props.date}</h6>
      </div>
      <div className='projectAction opacity-animation' onClick={() => visibilityAction()}>
        <i className={`fas fa-chevron-${detailsVisible ? 'up' : 'down'}`}></i>
      </div>
        <div className={`projectDetails ${detailsVisible ? 'expanded' : 'collapsed'}`}>
          <h4>Details</h4>
          <p>{props.brief}</p>
          <h4>Technologies</h4>
          <div className='tech-icons-container'>
            {props.technologies.map(iconClasses => <i key={iconClasses} className={iconClasses}></i>)}
          </div>
          {props.links ? (
            <>
              <h4>Useful Links</h4>
              {props.links.map(link => <p key={`${link}-link`}><a href={link} rel='noreferrer' target='_blank'>{link}</a></p>)}
            </>
          ) : null}
        </div>
      
    </section>
  )
}

export default ProjectCard;