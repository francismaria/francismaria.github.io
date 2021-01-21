import { useEffect, useState } from 'react';
import './FilterModal.css'

function FilterModal(props) {
  const filtersMap = props.filtersInfo;
  const filtersTypesMap = props.filtersTypes;
  const [ localFilters, setLocalFilters ] = useState([...props.activeFilters]);

  const setLocalFiltersAsParent = () =>
    setLocalFilters([...props.activeFilters]);

  // Triggers whenever the props.activefilters change - user removed filters - (because react doesn't use deep equality for this hook, json stringify (string) is used instead
  useEffect(() => setLocalFiltersAsParent(),
    [JSON.stringify([...props.activeFilters])],
  );

  const onCancel = () =>  {
    setLocalFiltersAsParent();
    props.onClose();
  }

  const onClickOutsideModal = (e) => {
    if(e.target.classList.contains('modalContainer'))
      onCancel();     
  }

  const onApply = () => {
    props.onSubmit(localFilters);
    props.onClose();
  }

  const onCheckboxSelectionChange = (e) => {
    const selected = e.target.checked;
    const filterId = e.target.id;
    let arr = localFilters;

    if(selected) {
      arr.push(filterId);
    } else {
      arr = arr.filter(id => id !== filterId);
    }
    setLocalFilters([...arr])
  }

  const filterConstruction = (id) => (
    <div className='checkboxContainer' key={`${id}-checkbox`}>
      <label className='checkboxLabel' key={`${id}-label`}>{filtersMap[id].label}</label>
      <input id={id} type='checkbox' checked={localFilters.includes(id) ? true : false} onChange={onCheckboxSelectionChange}/>
    </div>);

  const filterGroupConstruction = (groupTitle, filterTypes) => (
    <div className='filterSelectionGroup'>
      <h5>{groupTitle}</h5>
      {filterTypes.map(id => filterConstruction(id))}
    </div>);

  return (
    <>
      {props.visible ? 
        <section id='filterModal' className='fullCover'>
          <section className='modalContainer fullCover' onClick={(e) => onClickOutsideModal(e)}>
            <section className='modalBox'>
              <div className='modalTitle'>
                <h3>Filter Selection</h3>
                <div className='closeIcon' onClick={onCancel}>
                  <i className="fas fa-times"></i>
                </div>
              </div>
              <div className='modalSelection'>
                {filterGroupConstruction('Languages', filtersTypesMap.LANGUAGES)}
                {filterGroupConstruction('Frameworks', filtersTypesMap.FRAMEWORKS)}
                {filterGroupConstruction('Types', filtersTypesMap.TYPES)}
                {filterGroupConstruction('Dates', filtersTypesMap.DATES)}
                {filterGroupConstruction('Institutions', filtersTypesMap.INSTITUTIONS)}
              </div>
              <div className='modalConfirmation'>
                <button className='modalCancelBtn' onClick={onCancel}>Cancel</button>
                <button type='submit' className='modalApplyBtn' onClick={onApply}>Apply</button>
              </div>
            </section>
          </section>
        </section>
        : null}
    </>
  )
}

export default FilterModal;