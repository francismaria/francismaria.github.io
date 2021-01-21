import ProjectCard from '../card/ProjectCard'
import inesctecLogo from '../../../images/companies/inesc-tec_logo.png'
import feupLogo from '../../../images/companies/feup_logo.png'

const mathex2java = <ProjectCard 
                    key='mathex2java'
                    name='MaTheX2Java'
                    brief='Web-app focused on a free and open-source source-to-source compiler capable of efficiently translating latex mathematic equations to fully operational Java code.'
                    date='2019'
                    imgSrc={inesctecLogo}
                    alt='MaTheX2Java Logo'
                    links={['http://mathex2java.herokuapp.com', 'https://github.com/francismaria/MaTheX2Java']}/>;

const research = <ProjectCard
                    key='research-ros'
                    name='Research Assistant'
                    brief='Study ...'
                    date='July 2019 - December 2019'
                    imgSrc={inesctecLogo}
                    alt='INESC-TEC Logo'/>;

const thesis = <ProjectCard 
                key='dissertation'
                name='MSc Dissertation'
                brief='Study ...'
                date='July 2019 - December 2019'
                imgSrc={feupLogo}
                alt='FEUP Logo'/>;

const tdin_1 = <ProjectCard 
              key='tdin'
              name='Diner Distributed Application'
              brief='Study ...'
              date='March 2019 - April 2019'
              imgSrc={feupLogo}
              alt='FEUP Logo'
              links={['https://github.com/francismaria/TDIN_FEUP']}/>;

const cmov_1 = <ProjectCard 
                key='cmov_1'
                name='Supermarket Android App'
                brief='Study ...'
                date='October 2019 - November 2019'
                imgSrc={feupLogo}
                alt='FEUP Logo'
                links={['https://github.com/francismaria/Supermarket_Android_App']}/>;

const cmov_2 = <ProjectCard 
                key='cmov_2'
                name='Weather Cross-Platform App'
                brief='Study ...'
                date='November 2019 - December 2019'
                imgSrc={feupLogo}
                alt='FEUP Logo'
                links={['https://github.com/francismaria/Crossplatform_Weather_App']}/>;

const lpoo = <ProjectCard 
                key='lpoo'
                name='Galaxy Wars'
                brief='Study ...'
                date='April 2018 - June 2018'
                imgSrc={feupLogo}
                alt='FEUP Logo'
                links={['https://github.com/francismaria/GalaxyWars']}/>;

const mfes = <ProjectCard 
                key='mfes'
                name='Formal Verification'
                brief='Study ...'
                date='October 2018 - November 2018'
                imgSrc={feupLogo}
                alt='FEUP Logo'
                links={['https://github.com/francismaria/GalaxyWars']}/>;

const aeda = <ProjectCard 
                key='aeda'
                name='Moving Company Software'
                brief='Study ...'
                date='October 2018 - November 2018'
                imgSrc={feupLogo}
                alt='FEUP Logo'
                links={['https://github.com/francismaria/GalaxyWars']}/>;

const personal = <ProjectCard 
                key='personal'
                name='Personal Website'
                brief='Study ...'
                date='December 2018 - Present'
                imgSrc={feupLogo}
                alt='FEUP Logo'
                links={['https://github.com/francismaria/francismaria.github.io']}/>;

export const projectsMap = new Map([
  [0, thesis],
  [1, research],
  [2, mathex2java],
  [3, tdin_1],
  [4, cmov_1],
  [5, cmov_2],
  [6, lpoo],
  [7, mfes],
  [8, aeda],
  [9, personal]
])

export const filtersInfoMap = {
  'c-filter'      : { label: 'C',                 type: 'lang', projects: [] },
  'c#-filter'     : { label: 'C#',                type: 'lang', projects: [3] },
  'c++-filter'    : { label: 'C++',               type: 'lang', projects: [] },
  'java-filter'   : { label: 'Java',              type: 'lang', projects: [2,4,6] },
  'python-filter' : { label: 'Python',            type: 'lang', projects: [0,1] },
  'react-filter'  : { label: 'React',             type: 'framework', projects: [9] },
  'nodejs-filter' : { label: 'NodeJS',            type: 'framework', projects: [2] },
  'net-filter'    : { label: '.NET Remoting',     type: 'framework', projects: [3] },
  'ros-filter'    : { label: 'ROS',               type: 'framework', projects: [0,1] },
  'xamarin-filter': { label: 'Xamarin',           type: 'framework', projects: [5] },
  'android-filter': { label: 'Android',           type: 'framework', projects: [4] },
  'vdm++-filter'  : { label: 'VDM++',             type: 'framework', projects: [7] },
  '2021-filter'   : { label: '2021',              type: 'date', projects: [9] },
  '2020-filter'   : { label: '2020',              type: 'date', projects: [0,9] },
  '2019-filter'   : { label: '2019',              type: 'date', projects: [1,2,3,4,5,9] },
  '2018-filter'   : { label: '2018',              type: 'date', projects: [6,7,9] },
  '2017-filter'   : { label: '2017',              type: 'date', projects: [9] },
  'ml-filter'     : { label: 'Machine Learning',  type: 'type', projects: [0,1] },
  'webapp-filter' : { label: 'Web App',           type: 'type', projects: [2] },
  'mobile-filter' : { label: 'Mobile',            type: 'type', projects: [4,5] },
  'game-filter'   : { label: 'Game',              type: 'type', projects: [6] },
  'formal-verification-filter' : { label: 'Formal Verification', type: 'type', projects: [7] },
  'feup-filter'   : { label: 'FEUP',              type: 'type', projects: [0,2,3,4,5,6,7,8] },
  'inesc-tec-filter' : { label: 'INESC-TEC',      type: 'type', projects: [1] },
  'na-filter'     : { label: 'N/A',               type: 'type', projects: [9] }
}

export const filtersTypesMap = {
  LANGUAGES   : ['c-filter', 'c#-filter', 'c++-filter', 'java-filter', 'python-filter'],
  FRAMEWORKS  : ['react-filter', 'nodejs-filter', 'net-filter', 'ros-filter', 'xamarin-filter', 'android-filter', 'vdm++-filter'],
  DATES       : ['2021-filter', '2020-filter', '2019-filter', '2018-filter', '2017-filter'],
  TYPES       : ['ml-filter', 'webapp-filter', 'mobile-filter', 'game-filter', 'formal-verification-filter'],
  INSTITUTIONS: ['feup-filter', 'inesc-tec-filter', 'na-filter']
};