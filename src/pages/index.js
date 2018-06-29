import React, { Component } from 'react'
import Search from '../components/Search'
import ProductGrid from '../components/ProductGrid'
import ProductTable from '../components/ProductTable'
import Filters from '../components/Filters'
import ViewToggles from '../components/ViewToggles'

import {
  filterProductsByFeature,
  filterProductsByColor,
  filterProductByAttr
} from '../shared/products-api/product-filters';
import formatProductsData from '../shared/products-api/airtable-data-format';
import Categories from '../components/Categories';

import './home.scss'

class IndexPage extends Component {
  constructor(props) {
    super(props);

    const {
      data: {
        allAirtable: {
          edges: initialProducts
        }
      }
    } = props;

    this.state = {
      gridShown: true,
      tableShown: false,
      activeFilters: {},
      products: formatProductsData(initialProducts)
    };

    console.log(this.state.products);
  }

 
  filterProducts = (activeFilters) => {
    let filteredColor;
    let filteredProducts = activeFilters.reduce((products, filter) => {
      
      switch (filter.type) {
        case 'functionality':
          return filterProductsByFeature(products, filter.value);
          break;
        
        case 'color':
          !filteredColor && (filteredColor = filter.value);
          return filterProductsByColor(products, filter.value);
        break;
        
        case 'temperature':
        case 'power':
        case 'brightness':
        case 'width':
        case 'length':
        case 'protection':
        case 'execution':
          return filterProductByAttr(products, filter);
        break;
        
        default: 
          return products;
      }
    }, products.slice(0));
    
    this.setState({
      products: filteredProducts,
      filteredColor
    })
  }

  render() {
    return <div className="home-page col-container">
      <div className="lcol">
        <h3 className="section-title">Sort Products</h3>
    
        <Categories />

        <Filters onFilterChange={this.filterProducts} />
      </div>

      
        <div className="rcol">
          <Search />      
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
        

          {this.state.products && <ProductGrid 
            products={this.state.products}
            filteredColor={this.state.filteredColor}
            shown={this.state.gridShown}
          />}

          {this.state.products && <ProductTable 
            products={this.state.products}
            filteredColor={this.state.filteredColor}
            shown={this.state.tableShown} 
          />}
          
          {!this.state.products.length && <span>No matching products found</span>}
        </div>
      
    </div>
  }
}

export const query = graphql `
query Airtable {
  allAirtable {
    edges {
      node {
        A_SKU
        A_CardPhoto {
          url
        }
        Name_Original
        Name_stripped
        Main_product
        A_CardNameLive
        A_Applications1
        A_Features
        A_Color
        Socket
        Size
        Power
        Protection
        Temperature
        Brightness
        Current
        CRI
      }
    }
  }
}`;

export default IndexPage
