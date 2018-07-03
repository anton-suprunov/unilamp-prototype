import React, { Component } from 'react'
import Search from '../components/Search'
import ProductGrid from '../components/ProductGrid'
import ProductTable from '../components/ProductTable'
import Filters from '../components/Filters'
import ViewToggles from '../components/ViewToggles'
import findIndex from 'lodash/findIndex';
//import airtable from 'airtable/build/airtable.browser';
import airtable from 'airtable';
import map from 'lodash/map';

import {
  filterProductsByFeature,
  filterProductsByColor,
  filterProductByAttr,
} from '../shared/products-api/product-filters';
import formatProductsData, {
  extractCategories
} from '../shared/products-api/airtable-data-format';
import Categories from '../components/Categories';

import './home.scss'

class IndexPage extends Component {
  constructor(props) {
    super(props);

    //let products = formatProductsData(initialProducts);

    this.state = {
      gridShown: true,
      tableShown: false,
      activeFilters: [],
      initialProducts:[],
      products: [],
      categories: [],
    };

    //console.log(this.state.products);
  }

  componentDidMount() {
    let products = [];

    airtable.configure({
      endpointUrl: 'https://api.airtable.com',
      apiKey: 'keylNnhWyJwtJp88R'
    });
    var base = airtable.base('appJzeZHla96AZbFA');
    base('Imported table').select({
      view: "Grid view"
    }).eachPage(function page(records, fetchNextPage) {
      products = products.concat(map(records, 'fields'));
      fetchNextPage();

    }, err => {
      if (err) {
        console.error(err);
        return;
      }
      
      let parsedProducts = formatProductsData(products);
      //console.log(parsedProducts);
      this.setState({
        initialProducts: parsedProducts.slice(0),
        products: parsedProducts.slice(0),
        categories: extractCategories(products),
      });
    });

  }
 
  filterProducts = () => {
    let filteredColor;
    let filteredProducts = this.state.activeFilters.reduce((products, filter) => {
      
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
        case 'category':
        case 'application':
          return filterProductByAttr(products, filter);
        break;

        /*case 'category': 
          return filterByCategory(products, filter.value);
        break;*/
        
        default: 
          return products;
      }
    }, this.state.initialProducts.slice(0));
    
    this.setState({
      products: filteredProducts,
      filteredColor
    })
  }

  resetActiveFilters = () => {
    this.setState({
      activeFilters: [],
    });
    this.filterProducts();
  }

  onFilterChange = (type, value) => {
    let activeFilters = this.state.activeFilters.slice(0);
    let index;

    // single value filters
    if (type === 'temperature' ||
      type === 'width' ||
      type === 'length' ||
      type === 'brightness' ||
      type === 'power' ||
      type === 'category' ||
      type === 'application') {

      // provide all range of temps to filtering func
      if (type === 'temperature') {
        value = temps.slice(value[0], value[1] + 1);
      }

      if (type === 'power') {
        let tempValue = [];
        for (let i = value[0]; i <= value[1]; i++) {
          tempValue.push(i + 'W');
        }
        value = tempValue;
      }

      if (type === 'brightness') {
        let tempValue = [];
        for (let i = value[0]; i <= value[1]; i++) {
          tempValue.push(i + ' lm');
        }
        value = tempValue;
      }

      index = findIndex(activeFilters, { type });
      if (index === -1 && value) {
        activeFilters.push({ type, value });
      } else {
        if (!value) {
          activeFilters.splice(index, 1);
        } else {
          activeFilters[index] = { type, value };
        }
      }

      // checkboxes 
    } else {
      index = findIndex(activeFilters, { type, value });
      if (index === -1) {
        activeFilters.push({ type, value });

      } else {
        activeFilters.splice(index, 1);
      }
    }

    this.setState({
      activeFilters: activeFilters
    }, () => this.filterProducts(activeFilters));
    console.log('active filters', activeFilters);
  }

  render() {
    return <div className="home-page col-container">
      <div className="lcol">
        <h3 className="section-title">Sort Products</h3>
    
        <Categories 
          categoriesList={this.state.categories}
          onCategorySelect={(type, cat) => this.onFilterChange(type, cat)}
          //onCategoryReset={type => this.onFilterChange(type)}
        />

        <Filters 
          onFilterChange={this.onFilterChange} 
          resetActiveFilters={this.resetActiveFilters}
          activeFilters={this.state.activeFilters}
        />
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

export default IndexPage;
