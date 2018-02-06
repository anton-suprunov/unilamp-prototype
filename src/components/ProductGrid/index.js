import React, { Component } from 'react'
import Link from 'gatsby-link'
import classnames from 'classnames'

import ColorsList from '../ColorsList'
import './product-grid.scss'

export default class ProductGrid extends Component {
  constructor(props) {
    super(props);

    this.state = {
      
    }
  }

  render() {
    return (
      <div
        className={classnames("grid", {
          "grid_active": this.props.shown
        })}
      >
        <ul className="grid__list">
          {this.props.list.map((item, index) => (
            <li 
              className={classnames("grid__li", {
              
              })} 
              key={`product_${index}`}
              style={{ 'backgroundImage': `url(${item.bgImage})` }}
            >
              { item.new ? <span className="grid__badge">NEW</span> : '' }
              <Link to="/product/" className="grid__link">{item.title}</Link>
              <ColorsList 
                colors={item.colors}
                parentItemKey={item.key}
              />
            </li>
          ))}
        </ul>
      </div>
    )
  }
}