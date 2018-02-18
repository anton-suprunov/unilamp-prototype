import React, { Component } from 'react'
import Link from 'gatsby-link'
import classnames from 'classnames'

import ColorsList from '../ColorsList'
import './product-grid.scss'

class GridElement extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  onColorClicked = (color) => {
    this.setState({
      colorSelected: color
    })
  }

  render() {
    const { 
      index, 
      item,
      filteredColor
    } = this.props;

    let bgImage = item.bgImage;
    if (this.state.colorSelected) {
      bgImage = item.images[this.state.colorSelected.title.toLowerCase()];
    } else if (filteredColor) {
      bgImage = item.images[filteredColor.toLowerCase()];
    }

    return <li
      className="grid__li"
      style={{ 'backgroundImage': `url(${bgImage})` }}
    >
      {item.new && <span className="grid__badge">NEW</span>}
      <Link to="/product/" className="grid__link">{item.title}</Link>
      {item.colors && <ColorsList
        colors={item.colors}
        parentItemKey={index}
        onClick={this.onColorClicked}
        activeColor={this.state.colorSelected ? this.state.colorSelected : item.colors[0]}
      />}
    </li>
  }
}

export default class ProductGrid extends Component {
  constructor(props) {
    super(props);

    this.state = {
      bgImage: undefined
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
          {this.props.products.map((item, index) => 
            <GridElement 
              key={`product_${index}`} 
              item={item} 
              filteredColor={this.props.filteredColor}
            />
          )}
        </ul>
      </div>
    )
  }
}