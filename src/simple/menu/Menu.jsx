import { useState } from 'react';
import Navbar from './Navbar';
import './Menu.css'

function Menu() {
  const [ visibility, setVisibility ] = useState(false);

  const updateMenuVisibility = () => {
    setVisibility(!visibility);
  }

  const onBackgroundClick = (e) => {
    if(e.target.classList.contains('menuBackground'))
      updateMenuVisibility();
  }

  return (
    <>
      <Navbar onDrawerClick={updateMenuVisibility}/>
        <section 
          className={`menuBackground fullCover ${visibility ? 'visibleBackground' : 'hiddenBackground'}`}
          onClick={(e) => onBackgroundClick(e)}>
          <section id='menu' className={`${visibility ? 'openDrawer' : 'hideDrawer'}`}>
            <header>
              <h3>Table of Contents</h3>
              <div className='closeIcon' onClick={updateMenuVisibility}>
                <i className="fas fa-times"></i>
              </div>
            </header>
            <ul>
              <li>Introduction</li>
              <li>About</li>
              <li>Experience</li>
              <li>Portfolio</li>
              <li>Contact</li>
            </ul>
            <footer>
              <a href="#">GITHUB</a>
              <a href="#">LINKEDIN</a>
              <a href="#">MAIL</a>
            </footer>
          </section>
        </section>
    </>
  )
}

export default Menu;