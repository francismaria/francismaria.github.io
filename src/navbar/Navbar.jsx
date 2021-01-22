import { useState } from 'react';
import'./Navbar.css'

function Navbar() {
  const [ menuVisibility, setMenuVisibility ] = useState(false);

  const updateMenuVisibility = () => {
    setMenuVisibility(!menuVisibility);
  }

  const scrollUp = (elemHeight, currHeight) => {
    let timer = setInterval(() => {
      if(currHeight >= elemHeight){
        currHeight -= 7;
        window.scroll(0, currHeight);
      } else {
        clearInterval(timer);
      }
    }, 1);
  }

  const scrollDown = (elemHeight, currHeight) => {
    let timer = setInterval(() => {
      if(currHeight <= elemHeight){
        currHeight += 7;
        window.scroll(0, currHeight);
      } else {
        clearInterval(timer);
      }
    }, 1);
  }

  const scrollToSection = (e, sectionId) => {
    e.preventDefault();

    const elementToScroll = document.getElementById(sectionId).offsetTop;
    const currentPosition = window.pageYOffset;

    if((elementToScroll - currentPosition) > 0){
      scrollDown(elementToScroll, currentPosition);
    } else {
      scrollUp(elementToScroll, currentPosition);
    }

    updateMenuVisibility();
  }

  const renderLink = (linkId, linkText, sectionId) => (
    <li id={`${linkId}-link`} onClick={(e) => scrollToSection(e, sectionId)}>{linkText}</li>
  );

  return (
    <nav id='navbar'>
      <i id='menu-burger-btn' className='opacity-animation fas fa-bars' onClick={updateMenuVisibility}/>
      <ul id='nav-links' className={`list-opacity-animation ${menuVisibility ? 'expanded-menu' : 'hidden-menu'}`}>
        {renderLink('about', 'About Me', 'about-section')}
        {renderLink('experience', 'Experience', 'experience-section')}
        {renderLink('projects', 'Projects', 'projects-section')}
        {renderLink('contact', 'Contact', 'contact-section')}
      </ul>
  </nav>
  );
}

export default Navbar;