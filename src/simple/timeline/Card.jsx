import './Card.css'

const Card = (props) => {

  return (
    <div className='timelineCard'>
      <p className='role'>{props.role}</p>
      <p className='company'>{props.company}</p>
      <p className='description'>{props.description}</p>
      <p className='date'>{props.startDate} - {props.endDate}</p>
    </div>
  )
}

export default Card;