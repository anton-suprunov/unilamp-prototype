//TODO: flatten subproducts in sample data and implemented subgroups and subgroups order based on object values

import React, { Component } from 'react'
import Link from 'gatsby-link'
import classnames from 'classnames'
import flatten from 'lodash/flatten'

import Search from '../components/Search'
import SortList from '../components/SortList'
import ProductGrid from '../components/ProductGrid'
import ProductTable from '../components/ProductTable'
import Filters from '../components/Filters'

import products from '../sample-products'

import './home.scss';

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
    subProducts.map(s => {
      if (s[filter.type] && s[filter.type] === filter.value) {
        res.push(product);
      }
    })
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
    let filteredProducts = activeFilters.reduce((products, filter) => {
      switch (filter.type) {
        case 'functionality':
          return filterProductsByFeature(products, filter.value);
          break;
        
          case 'dim':
          return filterProductsByFeature(products, 'dim');
        break;
        
        case 'color':
          return filterProductsByColor(products, filter.value);
        break;
        
        case 'temperature':
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
    
    //console.log('final res', filteredProducts);
    this.setState({
      products: filteredProducts
    })
  }

  render() {    
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
        <nav className="view-toggles">
          <a 
            href="#" 
            onClick={() => this.setState({
              'gridShown': true, 
              'tableShown': false
            })}
            className={classnames("view-toggles__toggle", "view-toggles__toggle_card", {
              "view-toggles__toggle_active": this.state.gridShown
            })}>Card view</a>
          <a 
            href="#" 
            onClick={() => this.setState({
              'gridShown': false,
              'tableShown': true
            })}
            className={classnames("view-toggles__toggle", "view-toggles__toggle_table", {
              "view-toggles__toggle_active": this.state.tableShown
            })}>Table view</a>
        </nav>

        <ProductGrid 
          products={this.state.products} 
          shown={this.state.gridShown}
        />

        <ProductTable 
          products={this.state.products} 
          shown={this.state.tableShown} 
        />
      </div>
    </div>
  }
}

export default IndexPage
