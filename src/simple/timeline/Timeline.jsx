import Element from './Element'
import './Timeline.css'

import amazonLogo from '../images/companies/amazon_logo.png'
import feupLogo from '../images/companies/feup_logo.png'
import inesctecLogo from '../images/companies/inesc-tec_logo.png'
import istLogo from '../images/companies/ist_logo.png'

function Timeline() {
  return (
    <>
      <div className='timeline'></div>
      <Element 
        side='left' logo={feupLogo} role='MSc Degree - MIEIC' 
        company='FEUP' startDate='September 2016' endDate='December 2020' highlight='Present' 
        description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
      />
      <Element 
        side='right' logo={amazonLogo} role='Software Development Intern' 
        company='Amazon' startDate='February 2020' endDate='November 2020' highlight='2020'
        description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
      />
      <Element 
        side='left' logo={inesctecLogo} role='Research Assistant'
        company='INESC-TEC' startDate='June 2019' endDate='December 2019' highlight='2019'
        description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
      />
      <Element 
        side='right' logo={istLogo} role='BSc Degree - LEIC'
        company='Instituto Superior Técnico' startDate='September 2015' endDate='July 2016' highlight='2016'
        description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
      />
    </>
  )
}

export default Timeline;