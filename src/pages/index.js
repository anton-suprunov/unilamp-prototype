import React, { Component } from 'react'
import findIndex from 'lodash/findIndex';

import Search from '../components/Search'
import ProductGrid from '../components/ProductGrid'
import ProductTable from '../components/ProductTable'
import Filters from '../components/Filters'
import ViewToggles from '../components/ViewToggles'
import Breadcrumbs from '../components/Breadcrumbs';
import Categories from '../components/Categories';

import fetchTable from '../shared/products-api';
import {
  filterProductsByFeature,
  filterProductsByColor,
  filterProductByAttr,
} from '../shared/products-api/product-filters';
import formatProductsData, {
  extractCategories
} from '../shared/products-api/airtable-data-format';

import './home.scss';

class IndexPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gridShown: true,
      tableShown: false,
      activeFilters: [],
      initialProducts:[],
      products: [],
      categories: [],
    };
  }

  componentDidMount() {
    fetchTable(process.env.AIRTABLE_BASE_MAIN, process.env.AIRTABLE_BASE_MAIN_NAME, process.env.AIRTABLE_BASE_MAIN_TABLE_VIEW)
      .then(products => {
        let parsedProducts = formatProductsData(products);

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
        <h3 className="section-title">PRODUCTS</h3>
    
        <Categories 
          categoriesList={this.state.categories}
          onCategorySelect={(type, cat) => this.onFilterChange(type, cat)}
        />

        <Filters 
          onFilterChange={this.onFilterChange} 
          resetActiveFilters={this.resetActiveFilters}
          activeFilters={this.state.activeFilters}
        />
      </div>

      
        <div className="rcol">
          <Breadcrumbs />
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
