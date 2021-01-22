import ProjectCard from '../card/ProjectCard'
import inesctecLogo from '../../images/companies/inesc-tec_logo.png'
import feupLogo from '../../images/companies/feup_logo.png'

const ANDROID_ICON = 'fab fa-android';
const IOS_ICON = 'fab fa-apple';
const JAVA_ICON = 'fab fa-java';
const JS_ICON = 'fab fa-js';
const HTML_ICON = 'fab fa-html5';
const CSS_ICON = 'fab fa-css3-alt';
const PYTHON_ICON = 'fab fa-python';
const NODEJS_ICON = 'fab fa-node';
const REACT_ICON = 'fab fa-react';
const TERMINAL_ICON ='fas fa-terminal';

const mathex2java = <ProjectCard 
                    key='mathex2java'
                    name='MaTheX2Java'
                    brief='Web-app focused on a free and open-source source-to-source compiler capable of efficiently translating latex mathematic equations to fully operational Java code.'
                    date='March 2019 - Present'
                    imgSrc={inesctecLogo}
                    alt='MaTheX2Java Logo'
                    technologies={[JAVA_ICON, JS_ICON, NODEJS_ICON]}
                    links={['http://mathex2java.herokuapp.com', 'https://github.com/francismaria/MaTheX2Java']}/>;

const research = <ProjectCard
                    key='research-ros'
                    name='Research Assistant'
                    brief='Study the development of machine learning anomaly detectors targeting autonomous vehicles in order to understand how these can withstand dangerous situations and evaluate their robustness against state-of-the-art adversarial learning techniques.'
                    date='July 2019 - December 2019'
                    imgSrc={inesctecLogo}
                    technologies={[PYTHON_ICON]}
                    alt='INESC-TEC Logo'/>;

const thesis = <ProjectCard 
                key='dissertation'
                name='MSc Dissertation'
                brief='In-depth study of the creation of a robust machine learning model to detect anomalous braking behaviours using different common approaches as well as its vulnerability against state-of-the-art techniques for attacking machine learning models, known as adversarial learning.'
                date='July 2019 - December 2019'
                imgSrc={feupLogo}
                technologies={[PYTHON_ICON]}
                alt='FEUP Logo'
                links={['https://repositorio-aberto.up.pt/handle/10216/131404', 'https://github.com/francismaria/carla_anomaly_detector']}/>;

const tdin_1 = <ProjectCard 
              key='tdin'
              name='Diner Distributed Application'
              brief='.NET Remoting distributed application for easing the operation process within a diner.'
              date='March 2019 - April 2019'
              imgSrc={feupLogo}
              alt='FEUP Logo'
              technologies={[]}
              links={['https://github.com/francismaria/TDIN_FEUP']}/>;

const cmov_1 = <ProjectCard 
                key='cmov_1'
                name='Supermarket Android App'
                brief='Android application to simulate a supermarket app where the users could shop with their smartphones only.'
                date='October 2019 - November 2019'
                imgSrc={feupLogo}
                alt='FEUP Logo'
                technologies={[JAVA_ICON, ANDROID_ICON]}
                links={['https://github.com/francismaria/Supermarket_Android_App']}/>;

const cmov_2 = <ProjectCard 
                key='cmov_2'
                name='Weather Cross-Platform App'
                brief='Cross-platform (Android + iOS) weather app created using Xamarin.Forms.'
                date='November 2019 - December 2019'
                imgSrc={feupLogo}
                alt='FEUP Logo'
                technologies={[JAVA_ICON, ANDROID_ICON, IOS_ICON]}
                links={['https://github.com/francismaria/Crossplatform_Weather_App']}/>;

const lpoo = <ProjectCard 
                key='lpoo'
                name='Galaxy Wars'
                brief='Development of a game which plot consists in a space ship that continuously tries to reach further distance until infinity. Its main goal is to last for the longest time possible. Different difficulties levels (easy, medium, hard) are supported as well as different types of enemies.'
                date='April 2018 - June 2018'
                imgSrc={feupLogo}
                alt='FEUP Logo'
                technologies={[JAVA_ICON]}
                links={['https://github.com/francismaria/GalaxyWars']}/>;

const mfes = <ProjectCard 
                key='mfes'
                name='Formal Verification'
                brief='Development, testing and documentation of an executable formal model of a high integrity product-review collaborative software system in VDM++ using the Overture tool.'
                date='October 2018 - November 2018'
                imgSrc={feupLogo}
                alt='FEUP Logo'
                technologies={[]}
                links={['https://github.com/francismaria/MFES-FEUP']}/>;

const aeda = <ProjectCard 
                key='aeda'
                name='Moving Company Software'
                brief='Development of a moving company software which assembles all information about the company as well as to process new orders.'
                date='October 2018 - November 2018'
                imgSrc={feupLogo}
                alt='FEUP Logo'
                technologies={[TERMINAL_ICON]}
                links={['https://github.com/francismaria/GalaxyWars']}/>;

const personal = <ProjectCard 
                key='personal'
                name='Personal Website'
                brief='This website was constructed using the React framework, using functional components at its core. All the animations were manually implemented with CSS and JS. No additional JS library/framework was used.'
                date='December 2018 - Present'
                imgSrc={feupLogo}
                alt='FEUP Logo'
                technologies={[HTML_ICON, CSS_ICON, JS_ICON, REACT_ICON]}
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
  'c++-filter'    : { label: 'C++',               type: 'lang', projects: [8] },
  'java-filter'   : { label: 'Java',              type: 'lang', projects: [2,4,6] },
  'python-filter' : { label: 'Python',            type: 'lang', projects: [0,1] },
  'react-filter'  : { label: 'React',             type: 'framework', projects: [9] },
  'nodejs-filter' : { label: 'NodeJS',            type: 'framework', projects: [2] },
  'net-filter'    : { label: '.NET Remoting',     type: 'framework', projects: [3] },
  'ros-filter'    : { label: 'ROS',               type: 'framework', projects: [0,1] },
  'xamarin-filter': { label: 'Xamarin',           type: 'framework', projects: [5] },
  'android-filter': { label: 'Android',           type: 'framework', projects: [4,5] },
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