import React, { Component } from 'react'
import Search from '../components/Search'
import SortList from '../components/SortList'
import ProductGrid from '../components/ProductGrid'
import ProductTable from '../components/ProductTable'
import Filters from '../components/Filters'
import ViewToggles from '../components/ViewToggles'

import products from '../sample-products'
import {
  filterProductsByFeature,
  filterProductsByColor,
  filterProductByAttr
} from '../shared/products-api/product-filters';
import formatProductsData from '../shared/products-api/airtable-data-format';

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
      //products: products.slice(0)
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

export const query = graphql `
query Airtable {
  allAirtable {
    edges {
      node {
        SKU
        CardPhoto {
          url
        }
        Main_product
        ProductFamily1_ENG
        Applications
        SKUProductName
        Features
        Color
      }
    }
  }
}
`;

export default IndexPage
