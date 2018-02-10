import React from 'react'
import classnames from 'classnames'
import { Checkbox } from 'antd'

import List from './List'

const filtersGroups = [
  {
    type: 'execution',
    title: 'Execution',
    info: 'info text',
    shorter: true,
    list: [
      {
        title: 'Soft',
      },
      {
        title: 'Solid',
      },
    ]
  },
  {
    type: 'protection',
    title: 'Protection',
    info: 'info text',
    shorter: true,
    list: [
      {
        title: 'IP20',
      },
      {
        title: 'IP21',
      },
      {
        title: 'IP44',
      },
      {
        title: 'IP65',
      },
      {
        title: 'Black',
      }
    ]
  }
];

const AdvancedFilters = ({
  onChange
}) => {
  return <div className="filters__wrap filters__wrap_top-margin">
    <h3 className="section-title">Advanced Filters</h3>
    
    <div className="filters__group">
      <h5 className="filters__group-title">
        Warmth
        <span className="filters__info"></span>
      </h5>

    </div>

    <div className="filters__group">
      <h5 className="filters__group-title">
        Dim
        <span className="filters__info"></span>
      </h5>

    </div>

    <div className="filters__group">
      <h5 className="filters__group-title">Size (mm)</h5>

    </div>

    {filtersGroups.map((group, index) => (
      <List 
        key={`advanced_filter_group_${index}`}
        {...group}
      />
    ))}
  </div>
};

export default AdvancedFilters;

