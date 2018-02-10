import React from 'react'
import classnames from 'classnames'
import { Checkbox } from 'antd'

import List from './List'

const filtersGroups = [
  {
    type: 'functionality',
    title: 'Functionality',
    list: [
      {
        title: 'EM03',
      },
      {
        title: 'Gyro',
      }, 
      {
        title: 'Sensor',
      },
      {
        title: 'LED'
      }
    ]
  }, 
  {
    type: 'color',
    title: 'Color',
    list: [
      {
        title: 'White',
        color: '#FFFFFF'
      },
      {
        title: 'Matt White',
        color: '#FFFFFF'
      },
      {
        title: 'Silver',
        color: 'radial-gradient(circle, #FFFEFE 0%, #CACACA 100%)'
      },
      {
        title: 'Graphite',
        color: 'rgba(73,79,79,.4)'
      },
      {
        title: 'Black',
        color: '#434848'
      }
    ]
  }
];

const SimpleFilters = ({
  onChange
}) => {
  return <div className="filters__wrap">
    <a href="#" className="filters__clear">Clear Filters</a>
    {filtersGroups.map((group, index) => (
      <List 
        key={`filter_group_${index}`}  
        {...group}
      />
    ))}
  </div>
};

export default SimpleFilters;