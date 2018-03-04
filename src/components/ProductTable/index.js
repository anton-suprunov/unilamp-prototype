import React, { Component } from 'react'
import Link from 'gatsby-link'
import classnames from 'classnames'

import ProductRow from './ProductRow'

import './product-table.scss'

export default class ProductTable extends Component {
  constructor(props) {
    super(props);

    this.state = {
      allProductsExpanded: false,
      activeSlide: 0
    }
  }

  updateActiveSlide = i => {
    i !== this.state.activeSlide && 
      this.setState({ activeSlide: i })
  }

  render() {
    const { 
      renderSliders
    } = this.props;

    return (
      <div 
        className={classnames("table", "table_main", {
          "table_active": this.props.shown
        })}
      >        
        <a 
          href="#" 
          className={"expand-all " + (this.state.allProductsExpanded ? "expand-all_expanded" : "")}
          onClick={() => this.setState({ allProductsExpanded: !this.state.allProductsExpanded })}
        >
          { !this.state.allProductsExpanded ? "expand all" : "collapse all" }
        </a>

        <ul className="table__body">
          {this.props.products.map((item, index) => (
            <ProductRow 
              key={`product_${index}`}
              item={item}
              index={index} // TODO: replace with product article
              expanded={this.state.allProductsExpanded}
              activeSlide={this.state.activeSlide}
              onSlideChange={this.updateActiveSlide}
            />
          ))}
        </ul>
      </div>
    )
  }
}