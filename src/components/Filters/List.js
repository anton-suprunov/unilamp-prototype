import React, { Component } from 'react'
import classnames from 'classnames'
import { Checkbox } from 'antd'

import Popup, { PopupContainer } from '../Popup'

const FiltersListItem = ({
  item,
  type,
  shorter,
  onChange,
  activeList = [],
}) => (
  <li className={classnames("filters__filter", "filters__filter_checkbox", {
    "filters__filter_shorter": shorter
  })} >
    <Checkbox
      onChange={() => onChange(item.title)}
      checked={activeList.indexOf(item.title) !== -1}
    >{item.title}</Checkbox>

    {item.color
      ? <span className="filters__filter-color" style={{ background: item.color }}></span>
      : <PopupContainer className="filters__filter-info">
          <Popup text={item.text} />
        </PopupContainer>
    }
  </li> 
)

const FiltersList = (props) => {
  const {
    title,
    list,
    type,
    info = null,
  } = props;
  
  return (
    <div className="filters__group">
      <h5 className="filters__group-title">
        {title}
        {info && <PopupContainer className="filters__info">
          <Popup text={info} />
        </PopupContainer>}
      </h5>
      <ul className="filters__list">
        { list.length && list.map((item, index) => (
          <FiltersListItem 
            key={`filter_${type}_${index}`} 
            item={item}
            {...props}
          />
        )) }
      </ul>
    </div>
  )
}

export default FiltersList;