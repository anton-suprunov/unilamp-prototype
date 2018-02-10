import React from 'react'
import classnames from 'classnames'
import { 
  Checkbox, 
  Slider,
  Input 
} from 'antd'

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

const temps = [
  '2700K',
  '3500K',
  '4000K',
  '5500K',
  '6000K'
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
      <div className="filters__slider">
        <Slider
          min={0}
          max={4}
          defaultValue={2}
          tipFormatter={v => temps[v]} 
        />
        <span className="filters__note-text">Kelvin</span>
      </div>
    </div>

    <div className="filters__group">
      <label for="dim" className="filters__label">
          <h5 className="filters__group-title">
            Dim
            <span className="filters__info"></span>
        </h5>
        <div className="filters__filter filters__filter_checkbox">
          <Checkbox onChange={() => {}} id="dim"></Checkbox>
        </div>
      </label>
    </div>

    <div className="filters__group">
      <h5 className="filters__group-title">Size (mm)</h5>
      <div className="filters__size">
        <label for="width" className="filters__input-wrap">
          <Input id="width" />
          <span>width</span>
        </label>
        <label for="length" className="filters__input-wrap">
          <Input id="length" />
          <span>length</span>
        </label>
      </div>
    </div>

    <div className="filters__advanced-lists">
      {filtersGroups.map((group, index) => (
        <List 
          key={`advanced_filter_group_${index}`}
          {...group}
        />
      ))}
    </div>
  </div>
};

export default AdvancedFilters;

