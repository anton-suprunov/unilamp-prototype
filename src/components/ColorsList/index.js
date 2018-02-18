import React from 'react'
import classnames from 'classnames'
import isEqual from 'lodash/isEqual'

import './colors-list.scss'


const ColorsList = ({ 
  colors, 
  parentItemKey, 
  isVertical = false,
  onClick,
  activeColor
}) => {
  if (colors && colors.length) {
    return <ul className={classnames("colors-list", {
      "colors-list_vertical": isVertical
    })}>
      {colors.map(color => (
        <li
          className={classnames("colors-list__li", "colors-list__li_" + color.title.toLowerCase(), {
            "colors-list__li_active": isEqual(activeColor, color)
          })}
          key={`${parentItemKey}_${color.hex}`}
          style={{ backgroundColor: color.hex }} 
          onClick={e => {
            e.stopPropagation();
            onClick(color);
          }}
        />
      )
      )}
    </ul>
  }

  return null;
}

export default ColorsList;