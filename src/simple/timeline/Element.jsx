import CircleImage from '../common/circleImage/CircleImage'
import Card from './Card'
import './Element.css'

const Element = (props) => {
  const logoContainer =  <CircleImage imagePath={props.logo} alt={'Logo'} width={80} height={80}/>;
  const descriptionCard = <Card role={props.role} company={props.company} startDate={props.startDate} endDate={props.endDate} description={props.description}/>;
  let component;

  if(props.side === 'left') {
    component = 
      <div className='timelineElement leftElement'>
        <div className='leftElementGrid'>
          {descriptionCard}
        </div>
        <div className='rightElementGrid logoElementGrid'>
        {logoContainer}
        </div>
        <div className='timelineHighlight'>{props.highlight}</div>
      </div>;
  } else {
    component = 
      <div className='timelineElement rightElement'>
        <div className='leftElementGrid logoElementGrid'>
          {logoContainer}
        </div>
        <div className='rightElementGrid'>
          {descriptionCard}
        </div>
        <div className='timelineHighlight'>{props.highlight}</div>
      </div>;
  }

  return (
    <>
      {component}
    </>
  )
}

export default Element;