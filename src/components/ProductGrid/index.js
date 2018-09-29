import React, { Component } from 'react'
import Link, { navigateTo } from 'gatsby-link'
//import { navigate } from "gatsby"
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
      bgImage = item.images[this.state.colorSelected.toLowerCase()];
    } else if (filteredColor) {
      bgImage = item.images[filteredColor.toLowerCase()];
    }
    let productURL = `/product/${item.key}`;

    return <li
      className="grid__li"
      style={{ 'backgroundImage': `url(${bgImage})` }}
      onClick={() => navigateTo(productURL)}
    >
      {item.isNew && <span className="grid__badge">NY</span>}
      <Link to={productURL} className="grid__link">{item.title}</Link>
      {item.colors && <ColorsList
        colors={item.colors}
        //parentItemKey={`${index}_`}
        parentItemKey={item.subProducts[0].article}
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
    const {
      products,
      limit = 0,
    } = this.props;
    
    let list = products;

    if (limit > 0) {
      list = products.slice(0, limit);
    }

    return (
      <div
        className={classnames("grid", {
          "grid_active": this.props.shown
        })}
      >
        <ul className="grid__list">
          {list.map((item, index) => 
            <GridElement 
              key={`product_${index}`} 
              item={item}
              index={index} 
              filteredColor={this.props.filteredColor}
            />
          )}
        </ul>
      </div>
    )
  }
}