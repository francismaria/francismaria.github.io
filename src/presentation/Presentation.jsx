import SocialMediaIcons from '../common/icons/SocialMediaIcons';
import './Presentation.css';

function Presentation() {
  return(
    <section id='presentation-section' className='full-cover section-content'>
      <div className='header-container'>
        <hgroup id='presentation-text'>
          <h1>FRANCISCO MARIA</h1>
          <h3>Hi there,</h3>
          <h3 className='animatedTitle'>
            <span className='animated-title'>Glad you are here.</span>
            <span className='animated-title'>Let me introduce myself.</span>
          </h3>
        </hgroup>
      </div>
      <SocialMediaIcons />
    </section>
  );
}

export default Presentation;