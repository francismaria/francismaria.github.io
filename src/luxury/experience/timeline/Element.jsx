import './Element.css'

function Element(props) {
  const { date, title, company } = props;

  return (
    <div className='timeline-card'>
      <div className='timeline-card-bullet timeline-element-grid'>
        <div className='timeline-icon'>
          <div className='timeline-circle'/>
        </div>
        <div className='timeline-date'>
          <p>{date}</p>
        </div>
      </div>
      <div className='timeline-card-info timeline-element-grid'>
        <div className='timeline-icon'>
          <div className='timeline-line'/>
        </div>
        <div className='timeline-info'>
          <h3>{title}</h3>
          <strong><a href={company.link} rel='noreferrer' target='_blank'>{company.name}</a></strong>
        </div>
      </div>
    </div>
  );
}

export default Element;