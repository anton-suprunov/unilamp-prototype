import React, { Component } from 'react'
import Link from 'gatsby-link'
import classnames from 'classnames'
import isString from 'lodash/isstring'

import './sort-list.scss'

export default class SortList extends Component {
  constructor (props) {
    super(props);
    
    this.state = {
      isActive: props.activePath && props.activePath.length,
      activeSubmenus: props.activePath ? props.activePath.slice(0, props.activePath.length - 1) : [],
      lastActiveKey: props.activePath ? props.activePath[props.activePath.length - 1] : undefined
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.activePath) {
      this.setState({
        activeSubmenus: nextProps.activePath.slice(0, nextProps.activePath.length - 1)
      });
    }
  }

  toggleSubmenu = (key) => {
    let activeSubmenus = this.state.activeSubmenus.slice(0);

    if (activeSubmenus.indexOf(key) !== -1) {
      activeSubmenus = activeSubmenus.filter(s => s !== key);
    } else {
      activeSubmenus.push(key);
    }
    this.setState({
      activeSubmenus: activeSubmenus
    });
  }

  render() {  
    const { isActive } = this.state;

    
    return (
      <div className={classnames("sort-list", {
        "sort-list_active": this.state.isActive
      })}>
        <h4 className="sort-list__title" onClick={() => {
          this.setState({ isActive: !this.state.isActive });
        }}>{ this.props.title }</h4>

        <ul className="sort-list__ul">
          { this.props.list.map(item => (
            <li className={classnames("sort-list__li", {
              "sort-list__li_active": this.state.activeSubmenus.indexOf(item.key) !== -1
            })} key={item.key}>

                <a 
                  href="#" 
                  className={classnames("sort-list__link", {
                    "sort-list__link_dropdown": item.sublist
                  })}
                  onClick={e => { this.toggleSubmenu(item.key); e.preventDefault(); }}
                >{item.title}</a>

                {item.sublist && item.sublist.length > 0 ? 
                  <ul className="sort-list__ul sort-list__ul_secondary">
                    {item.sublist.map(subitem => (
                      <li 
                        className={classnames("sort-list__li", {
                          "sort-list__li_active": this.state.lastActiveKey === subitem.key
                        })}
                        key={subitem.key}
                      >
                        <a href="#" className="sort-list__link">{subitem.title}</a>
                      </li>
                    ))}
                  </ul> 
                : ''}
            </li> 
          ))}
        </ul>
      </div>
    )
  }
}