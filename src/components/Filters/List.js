import React, { Component } from 'react'
import classnames from 'classnames'
import { Checkbox } from 'antd'

import Popup, { PopupContainer } from '../Popup'

const colorsMap = {
  'White': '#FFFFFF',
  'Matt White': '#FFFFFF',
  'Silver': 'radial-gradient(circle, #FFFEFE 0%, #CACACA 100%)',
  'Graphite': 'rgba(73,79,79,.4)',
  'Black': '#434848',
}

const FiltersListItem = ({
  item: {
    A_PopupName: title,
    Subcategory: type,
    A_PopupText_ENG: info = null
  },
  //shorter,
  onChange,
  activeList = [],
}) => (
  <li className={classnames("filters__filter", "filters__filter_checkbox", {
    //"filters__filter_shorter": shorter,
    "filters__filter_has-color": type === 'Color',
    "filters__filter_has-text": info,
  })} >
    <Checkbox
      onChange={() => onChange(title)}
      checked={activeList.indexOf(title) !== -1}
    >{title}</Checkbox>

    {/*item.color && <span className="filters__filter-color" style={{ background: item.color }}></span>*/}
    {info && <PopupContainer className="filters__filter-info">
        <Popup text={info} />
      </PopupContainer>
    }
  </li> 
)

const FiltersList = ({
  filter, 
  ...props
}) => {
  const {
    title,
    items,
    type,
    info = null,
  } = filter;

  return (
    <div className="filters__group">
      <h5 className="filters__group-title">
        {title}
        {info && <PopupContainer className="filters__info">
          <Popup text={info} />
        </PopupContainer>}
      </h5>
      <ul className="filters__list">
        { items && items.length && items.map((item, index) => (
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