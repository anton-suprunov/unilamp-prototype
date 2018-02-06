import React from 'react'
import classnames from 'classnames'

import './colors-list.scss'


const ColorsList = ({ 
  colors, 
  parentItemKey, 
  isVertical = false 
}) => {
  if (colors && colors.length) {
    return <ul className={classnames("colors-list", {
      "colors-list_vertical": isVertical
    })}>
      {colors.map(color => (
        <li
          className="colors-list__li"
          key={`${parentItemKey}_${color}`}
          style={{ backgroundColor: color }} />
      )
      )}
    </ul>
  }

  return null;
}

export default ColorsList;