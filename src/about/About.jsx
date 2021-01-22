import { useState, useLayoutEffect, useRef } from 'react';
import CircleImage from '../common/circleImage/CircleImage';
import profilePic from '../images/github_profile.png'
import './About.css'

function About() {
  let cardRef = useRef(null);
  const [ visibility, setVisibility ] = useState(false);

  useLayoutEffect(() => {
    const handleScroll = () => {
      if(cardRef.current.getBoundingClientRect().top < 700) {
        setVisibility(true);
      }
    }
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });

  return (
    <section id='about-section' className={`spaced-cover centered-content section-content ${visibility ? 'visible-section' : 'hidden-section'}`}>
      <div ref={cardRef} className='about-card'>
        <div className='img-container'>
          <CircleImage imagePath={profilePic} alt={'Profile Pic'} width={160} height={160}/>
        </div>
        <div className='card-info'>
          <h3>Identification</h3>
          <div className='card-info-detail'>
            <div className='flex-row'>
              <p className='id-spec'>Name</p>
              <p>Francisco Maria</p>
            </div>
            <div className='flex-row'>
              <p className='id-spec'>Age</p>
              <p>23</p>
            </div>
          </div>
          <div className='card-info-detail'>
            <div className='flex-row'>
              <p className='id-spec'>Location</p>
              <p>Vila Real, Portugal</p>
            </div>
          </div>
          <div className='card-info-detail'>
            <div className='flex-row'>
              <p className='id-spec'>Occupation</p>
              <p>Software Developer</p>
            </div>
          </div>
          <div className='card-info-detail'>
            <div className='flex-row'>
              <p className='id-spec'>Interests</p>
              <p>Software Design, Software Security, Machine Learning</p>
            </div>
          </div>
          <div className='card-info-detail'>
            <div className='flex-row'>
              <p className='id-spec'>Hobbies</p>
              <p>Music, Moutain Biking, Gym</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;