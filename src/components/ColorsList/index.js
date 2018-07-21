import React from 'react'
import classnames from 'classnames'
import isEqual from 'lodash/isEqual'

import './colors-list.scss'

const colorsMap = {
  'Grafitt': '#b9b9b9',
  'Hvit': '#ffffff',
  'Sølv': 'silver',
  'Børstet Stål': '#caccce',
  'Matt Hvit': '#ffffff',
  'Matt Sort': '#434848',
  'Sort': '#434848',
  'Krom': '#D1DADD',
  'Klar/Prism': '#ffffff'
}

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
      {colors.map((color, index) => (
        <li
          className={classnames("colors-list__li", "colors-list__li_" + color.toLowerCase(), {
            "colors-list__li_active": isEqual(activeColor, color)
          })}
          key={`${parentItemKey}_${color}_${index}`}
          style={{ backgroundColor: colorsMap[color] }} 
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