import React, { Component } from 'react'
import Link from 'gatsby-link'
import classnames from 'classnames'
import flatten from 'lodash/flatten'

import config from '../shared/config'
import WindowSize from '../shared/WindowSize'
import Search from '../components/Search'
import SortList from '../components/SortList'
import ProductGrid from '../components/ProductGrid'
import ProductTable from '../components/ProductTable'
import Filters from '../components/Filters'
import ViewToggles from '../components/ViewToggles'

import products from '../sample-products'

import './home.scss'

const filterProductsByFeature = (products, feature) => {
  let res = [];

  products.map(product => {
    let subProducts = flatten(product.subProducts);
    let subProductsWithFeature = subProducts.filter(s => s.features && s.features.indexOf(feature) !== -1)
    
    if (subProductsWithFeature.length) {
      res.push(product);
    }
  });
  return res;
}

const filterProductsByColor = (products, color) => {
  let res = [];
  
  products.map(product => {
    if (product.colors && product.colors.find(c => c.title === color)) {
      res.push(product);
    }
  });
  return res;
}

const filterProductByAttr = (products, filter) => {
  let res = [];
  
  products.map(product => {
    let subProducts = flatten(product.subProducts);
    let passed = false;

    passed = subProducts.some(s => {
      if (filter.type === 'temperature' || filter.type === 'brightness' || filter.type === 'power') {
        console.log(filter);
        return filter.value.indexOf(s[filter.type]) !== -1;
      } else  {
        return s[filter.type] && s[filter.type] === filter.value;
      }
    });

    passed && res.push(product);
  });

  return res;
}

class IndexPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gridShown: true,
      tableShown: false,
      activeFilters: {},
      products: products.slice(0)
    };
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
    const { windowWidth } = this.props;
    const isMobile = (windowWidth <= config.breakpoints.mobile);

    return <div className="home-page col-container">
      <div className="lcol">
        <h3 className="section-title">Sort Products</h3>
    
        <SortList 
          title="New Products"
          list={[
            { key: "1", title: "new 1" },
            { key: "2", title: "new 2" },
          ]}
        />

        <SortList 
          title="Applications"
          list={[
            { "key": "kitchen", "title": "Kitchen" },
            { "key": "outdoors", "title": "Outdoors" },
            { "key": "livingroom", "title": "Livingroom" },
            { "key": "bathroom", "title": "Bathroom" },
            {
              "key": "trade-housing", 
              "title": "Trade and Housing",
              "sublist": [
                { "key": "corridor", "title": "Corridor / Staircase" },
                { "key": "reception", "title": "Reception" },
                { "key": "office", "title": "Office and meeting rooms" },
                { "key": "subordinate", "title": "Subordinate room" }
              ]
            },
            { "key": "smarthome", "title": "Smarthome" },
            { "key": "other", "title": "Other" }
          ]}
          activePath={[
            'trade-housing',
            'corridor'
          ]}
        />
        
        <SortList
          title="Categories"
          list={[
            { key: "1", title: "cat 1" },
            { key: "2", title: "cat 2" },
          ]}
        />

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

export default WindowSize(IndexPage)
