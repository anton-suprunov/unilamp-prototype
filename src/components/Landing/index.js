import React, { Component } from 'react'

import ProductGrid from '../ProductGrid'
import ProductTable from '../ProductTable'

import ViewToggles from '../ViewToggles'

class Landing extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gridShown: true,
      tableShown: false,
    };
  }

  render() {
    const {
      products,
      filteredColor,
    } = this.props;

    return <div>
      <ViewToggles
        onClickGrid={() => this.setState({
          'gridShown': true,
          'tableShown': false
        })}
        onClickTable={() => this.setState({
          'gridShown': false,
          'tableShown': true
        })}
        gridShown={this.state.gridShown}
        tableShown={this.state.tableShown}
      />

      {products.length > 0 ? <ProductGrid
        products={products}
        filteredColor={filteredColor}
        shown={this.state.gridShown}
      /> : ''}

      {products.length > 0 ? <ProductTable
        products={products}
        filteredColor={filteredColor}
        shown={this.state.tableShown}
      /> : ''}

      {!products.length && <span>No matching products found</span>}
    </div>
  }
}

export default Landing;