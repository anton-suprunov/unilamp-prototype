import React, { Component } from 'react'
import classnames from 'classnames'
import isEqual from 'lodash/isEqual'
import Link from 'gatsby-link'

import './sort-list.scss'

export default class SortList extends Component {
  constructor (props) {
    super(props);
    this.state = {
      activeSubmenus: props.activePath ? props.activePath.slice(0, props.activePath.length - 1) : [],
      lastActiveKey: props.activePath ? props.activePath[props.activePath.length - 1] : undefined
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    //return !isEqual(nextState, this.state);
    return true;
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.activePath && !isEqual(nextProps, this.props)) {
      this.setState({
        activeSubmenus: nextProps.activePath.slice(0, nextProps.activePath.length - 1),
        lastActiveKey: nextProps.activePath[nextProps.activePath.length - 1],
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
      activeSubmenus,
    });
  }

  onItemClick = item => {
    this.setState({
      lastActiveKey: item.key
    }, () => {
      if (this.props.onClick)
        this.props.onClick(item);
    });
  }

  render() {
    const { 
      onTitleClick,
      onTitleSpecialClick,
      isActive,
      linkTo,
    } = this.props;

    return (
      <div className={classnames("sort-list", {
        "sort-list_active": isActive
      })}>
        <h4 className="sort-list__title" onClick={() => {
          if (onTitleSpecialClick) {
            onTitleSpecialClick();
            this.setState({
              lastActiveKey: null
            })
          } else {
            onTitleClick();
          }
        }}>
          <span 
            className="sort-list__title-arrow"
            onClick={e => {
              onTitleClick();
              e.stopPropagation();
            }}
          ></span>
          { this.props.title }
        </h4>

        <ul className="sort-list__ul">
          { this.props.list.map(item => (

            <li className={classnames("sort-list__li", {
              "sort-list__li_active": (this.state.activeSubmenus.indexOf(item.key) !== -1) || 
                (this.state.lastActiveKey === item.key),
            })} key={item.key}>
              {linkTo ?
                <Link 
                  className={classnames("sort-list__link", {
                    "sort-list__link_dropdown": item.sublist
                  })}
                  to={`/${linkTo}/${item.key}`}
                  onClick={() => this.onItemClick(item)}
                >
                  {item.title}
                </Link>
                : <a 
                    href="#"
                    className={classnames("sort-list__link", {
                      "sort-list__link_dropdown": item.sublist
                    })}
                    onClick={e => { 
                      if (item.sublist) {
                        this.toggleSubmenu(item.key); 
                      } else {
                        this.onItemClick(item);
                      }
                      e.preventDefault(); 
                    }}
                  >{item.title}</a>
                }

                {item.sublist && item.sublist.length > 0 ? 
                  <ul className="sort-list__ul sort-list__ul_secondary">
                    {item.sublist.map(subitem => (
                      <li 
                        className={classnames("sort-list__li", {
                          "sort-list__li_active": this.state.lastActiveKey === subitem.key
                        })}
                        key={subitem.key}
                      >
                        <a 
                          href="#"
                          className="sort-list__link"
                          onClick={(e) => {
                            this.onItemClick(subitem);
                            e.preventDefault();
                          }}
                        >
                          {subitem.title}
                        </a>
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