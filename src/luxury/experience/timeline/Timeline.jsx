import Element from './Element';
import './Timeline.css'

const companiesMap = new Map([
  ['FEUP', {name: 'FEUP', link: 'https://sigarra.up.pt/feup/pt/web_page.inicial'}],
  ['Amazon', {name: 'Amazon', link: 'https://www.amazon.es'}],
  ['INESC-TEC', {name: 'INESC-TEC', link: 'https://www.inesctec.pt/en'}],
  ['IST', {name: 'Instituto Superior Técnico', link: 'https://tecnico.ulisboa.pt/pt/'}]
])
function Timeline() {
  return (
    <div id='timeline'>
      <Element date='September 2016 - December 2020' title='MSc Degree' company={companiesMap.get('FEUP')} />
      <Element date='February 2016 - November 2020' title='Software Development Intern' company={companiesMap.get('Amazon')} />
      <Element date='June 2019 - December 2019' title='Research Assistant' company={companiesMap.get('INESC-TEC')} />
      <Element date='September 2015 - July 2016' title='BSc Degree' company={companiesMap.get('IST')} />
    </div>
  );
}

export default Timeline;