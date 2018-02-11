import React, { Component } from 'react'
import classnames from 'classnames'
import { Checkbox } from 'antd'

class FiltersList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeCheckboxes: []
    }
  }

  render() {
    const {
      title,
      list,
      type,
      info = null,
      shorter = false,
      activeList = [],
      onChange
    } = this.props;
  
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
            
            <Checkbox 
              onChange={() => onChange(item.title)}
              checked={activeList.indexOf(item.title) !== -1}
            >{item.title}</Checkbox>
            
            { item.color 
              ? <span className="filters__filter-color" style={{ background: item.color }}></span>
              : <span className="filters__filter-info"></span>
            }

          </li> 
        )) : '' }
      </ul>
    </div>
  }
};

export default FiltersList;