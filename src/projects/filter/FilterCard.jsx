import PropTypes from 'prop-types';
import './FilterCard.css'

function FilterCard(props) {
  const filterComponent = (
      <div className='filterCard removeAction'>
        <p className='filterId'>{props.label}</p>
        <div className='closeIcon' onClick={() => props.onRemoval(props.id)}>
          <i className="fas fa-times"></i>
        </div>
      </div>
    );

  const newFilterComponent = (
      <div className='filterCard addAction' onClick={props.onNewFilter}>
        <div className='plusIcon'>
          <i className="fas fa-plus"></i>
        </div>
      </div>
    );

  return props.type === 'FILTER' ? filterComponent : newFilterComponent;
}

FilterCard.propTypes = {
  type: PropTypes.oneOf(['ADD', 'FILTER'])
}

export default FilterCard;