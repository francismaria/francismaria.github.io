import React, { useState } from 'react';
import './ProjectCard.css'

function ProjectCard(props) {
  const [detailsVisible, setDetailsVisible] = useState(false);

  const visibilityAction = () => {
    setDetailsVisible(!detailsVisible);
  }

  return (
    <section className='projectCard'>
      <div className='projectImgWrapper'>
        <img src={props.imgSrc} alt={props.alt}/>
      </div>
      <div className='projectInfo'>
        <h4>{props.name}</h4>
        <h5>{props.brief}</h5>
        <h6>{props.date}</h6>
      </div>
      <div className='projectAction'>
        <button onClick={() => visibilityAction()}>{detailsVisible ? 'Hide' : 'Show'} Details</button>
      </div>
      {detailsVisible ? 
        <div className='projectDetails'>
          <h4>Details</h4>
          <p>{props.description}</p>
          <h4>Technologies</h4>
          <p>{props.technologies}</p>
          {props.links ? (
            <>
              <h4>Useful Links</h4>
              {props.links.map(link => <p><a href={link} target='_blank'>{link}</a></p>)}
            </>
          ) : null}
        </div> : null}
      
    </section>
  )
}

export default ProjectCard;