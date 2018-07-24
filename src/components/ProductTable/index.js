import React, { Component } from 'react'
import Link from 'gatsby-link'
import classnames from 'classnames'
import range from 'lodash/range'

import ProductRow from './ProductRow'

import './product-table.scss'

export default class ProductTable extends Component {
  constructor(props) {
    super(props);

    this.state = {
      allProductsExpanded: false,
      activeSlide: 0,
      expandedTables: [],
    }
  }

  toggleAllTables = () => {
    if (this.state.allProductsExpanded) {
      this.setState({ 
        allProductsExpanded: false,
        expandedTables: []
      })
    } else {
      this.setState({ 
        allProductsExpanded: true,
        expandedTables: range(this.props.products.length)
      })
    }
  }

  toggleRow = (i) => {
    let expandedTables = this.state.expandedTables.slice(0);
    
    if (this.state.expandedTables.indexOf(i) !== -1) {
      this.setState({
        expandedTables: expandedTables.filter(j => j !== i)
      })
    } else {
      expandedTables.push(i);
      this.setState({
        expandedTables: expandedTables
      })
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
          onClick={this.toggleAllTables}
        >
          { !this.state.allProductsExpanded ? "expand all" : "collapse all" }
        </a>

        <div className="table__body">
          {this.props.products.map((item, index) => (
            <ProductRow 
              key={`product_${index}`}
              item={item}
              index={index} // TODO: replace with product article
              expanded={(this.state.expandedTables.indexOf(index) !== -1)}
              activeSlide={this.state.activeSlide}
              onSlideChange={this.updateActiveSlide}
              onExpandClick={this.toggleRow.bind(this, index)}
            />
          ))}
        </div>
      </div>
    )
  }
}