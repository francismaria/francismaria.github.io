import React, { useState, useEffect } from 'react';
import FilterCard from './FilterCard'
import FilterModal from './FilterModal'
import { projectsMap, filtersTypesMap, filtersInfoMap } from './ProjectFilterDetails';
import './Filter.css'

let ALL_PROJECTS_IDXS = [];
for(let i = 0; i < projectsMap.size; i++) 
  ALL_PROJECTS_IDXS.push(i);

function Filter() {
  const [ activeFilters, setActiveFilters ] = useState([]);
  const [ filteredProjects, setFilteredProjects ] = useState(ALL_PROJECTS_IDXS);
  const [ modalVisibility, setModalVisibility ] = useState(false);
  const [ filteringProcess, setFilteringProcess ] = useState(true);

  const updateModalVisibility = () => setModalVisibility(!modalVisibility);

  /* 
   * Filter project cards. 
   *
   * Triggered when activeFilters changes
   */
  useEffect(() => {
    setFilteringProcess(true);

    let filteredMerged = [];
    let allFilteredProjects = [];

    allFilteredProjects = activeFilters
      .map(e => allFilteredProjects.concat(filtersInfoMap[e].projects));

    if (allFilteredProjects.length) 
      // p : previous value (previous array) - will be passed to every iteration - final result
      // c : current value (current array)
      // idea: get the elements of the previous array which are included in the current: this is going to be used in the next iteration.
      filteredMerged = allFilteredProjects.reduce((p, c) => p.filter(e => c.includes(e)));
    else {
      filteredMerged = ALL_PROJECTS_IDXS // if no filters, all are shown
    }

    setFilteredProjects(filteredMerged);
    setFilteringProcess(false);
  }, [activeFilters])

  useEffect(() => {

  }, []);

  const updateFilters = (filters) =>
    setActiveFilters([...filters]);

  const handleRemoval = (filters) => {
    let arr = activeFilters;
    setActiveFilters([...arr.filter(id => !filters.includes(id))]);
  }

  const renderLoadingPanel = () => (
    <div className='loadingPanel'>
      <p>Filtering...</p>
    </div>
  );

  const renderCards = () =>  filteredProjects.length ?
    filteredProjects.map(idx => projectsMap.get(idx))
    : (
    <p>No Projects Found</p>
  );

  return (
    <>
      <section id='filter-section'>
        <p><strong>Filters:</strong></p>
        <div id='filtersHolder'>
          {activeFilters.map(filterId => (
            <FilterCard 
              type='FILTER' 
              key={`${filterId}-card`} 
              id={`${filterId}-card`}
              label={filtersInfoMap[filterId].label}
              onNewFilter={updateModalVisibility} 
              onRemoval={handleRemoval}
            />
          ))}
          <FilterCard 
            type='ADD' 
            key='Add' 
            id='Add' 
            onNewFilter={updateModalVisibility} 
            onRemoval={handleRemoval}
          />
        </div>
        <FilterModal
          activeFilters={activeFilters}
          filtersInfo={filtersInfoMap}
          filtersTypes={filtersTypesMap}
          visible={modalVisibility}
          onClose={updateModalVisibility}
          onSubmit={updateFilters}
        />
      </section>
      <section id='projects-contents'>
        {filteringProcess ? renderLoadingPanel() : renderCards()}
      </section>
    </>
  );
}

export default Filter;