import React, { Component } from 'react'
import List from './List'
import {
  Power,
  Brightness,
  Size,
} from './CustomFilters'

const FiltersMap = {
  Power,
  Brightness,
  Size,
  'Color': List,
  'Features': List,
  'Warmth': List,
  'LUX': List,
  'Protection': List,
  'Execution': List,
  'Mounting': List,
};

const Filter = ({
  filter,
  ...props,
}) => {
  const F = FiltersMap[filter.Subcategory];

  if (!F) {
    return <div>no filter configured for {filter.Subcategory}</div>;
  }

  return <F 
    filter={{
      title: filter['A_PopupName'],
      items: filter.items,
      type: filter['Subcategory'],
      info: filter['A_PopupText_ENG'],
      popupIcon: filter['A_PopupIcon']
    }}
    {...props}
  />
}

export default Filter;