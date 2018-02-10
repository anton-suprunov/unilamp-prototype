import React from 'react'
import classnames from 'classnames'
import { Checkbox } from 'antd'

const onChange = (...args) => {
  console.log(args);
}

const FiltersList = ({
  title,
  list,
  type,
  info = null,
  shorter = false
}) => {
  return <div className="filters__group">
    <h5 className="filters__group-title">
      {title}
      {info && <span className="filters__info"></span>}
    </h5>
    <ul className="filters__list">
      { list.length ? list.map((item, index) => (
        <li className={classnames("filters__filter", "filters__filter_checkbox", {
          "filters__filter_shorter": shorter
        })} key={`filter_${type}_${index}`}>
          <Checkbox onChange={() => onChange(type, item.title)}>{item.title}</Checkbox>
          { item.color 
            ? <span className="filters__filter-color" style={{ background: item.color }}></span>
            : <span className="filters__filter-info"></span>
          }
        </li> 
      )) : '' }
    </ul>
  </div>
};

export default FiltersList;