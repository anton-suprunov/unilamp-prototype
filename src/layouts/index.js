import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import findIndex from 'lodash/findIndex';

import Header from '../components/Header'
import Footer from '../components/Footer'
import Subscribe from '../components/Subscribe'
import Search from '../components/Search'

import Filters from '../components/Filters'
import Breadcrumbs from '../components/Breadcrumbs';
import Categories from '../components/Categories';

import fetchTable from '../shared/products-api';

import {
  filterProductsByFeature,
  filterProductsByColor,
  filterProductByAttr,
} from '../shared/products-api/product-filters';
import formatProductsData, {
  //extractCategories
} from '../shared/products-api/airtable-data-format';

import './layout.scss'

class Layout extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      initialProducts: [],
      products: [],
      categories: [],
      activeFilters: [],
      activePage: props.location.pathname.indexOf('/product/') !== -1 ? 'product' : 'landing',
    }
  }

  componentDidMount() {
    Promise.all([
      fetchTable(process.env.AIRTABLE_BASE_MAIN, process.env.AIRTABLE_BASE_MAIN_NAME, process.env.AIRTABLE_BASE_MAIN_VIEW),
      fetchTable(process.env.AIRTABLE_BASE_MAIN, process.env.AIRTABLE_BASE_CATEGORIES_NAME, process.env.AIRTABLE_BASE_CATEGORIES_VIEW),
      fetchTable(process.env.AIRTABLE_BASE_MAIN, process.env.AIRTABLE_BASE_APPLICATIONS_NAME, process.env.AIRTABLE_BASE_APPLICATIONS_VIEW),
    ])
      .then(([ products, categories, applications ]) => {
        let parsedProducts = formatProductsData(products);
        console.log('products', parsedProducts);
        console.log('categories', categories);
        console.log('applications', applications);
        this.setState({
          initialProducts: parsedProducts.slice(0),
          products: parsedProducts.slice(0),
          categories,
          applications,
        });
      });
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.location.pathname !== this.props.location.pathname) {
      this.setState({
        activePage: nextProps.location.pathname.indexOf('/product/') !== -1 ? 'product' : 'landing',
      })
    }
  }

  filterProducts = () => {
    let filteredColor = this.state.filteredColor;
    let filteredProducts = this.state.activeFilters.reduce((products, filter) => {

      switch (filter.type) {
        case 'Features':
          return filterProductsByFeature(products, filter.value);

        case 'Color':
          !filteredColor && (filteredColor = filter.value);
          return filterProductsByColor(products, filter.value);

        case 'Warmth':
        case 'Power':
        case 'Brightness':
        case 'Size':
        case 'Protection':
        case 'Execution':
        case 'Mounting':
        case 'LUX':
        case 'category':
        case 'application':
          return filterProductByAttr(products, filter);

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
    if (type === 'Size' ||
      type === 'Brightness' ||
      type === 'Power' ||
      type === 'category' ||
      type === 'application') {

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
    const { 
      children,
    } = this.props;

    const {
      initialProducts,
      products,
      categories,
      applications,
    } = this.state;

    const contents = () => {
      if (products.length > 0) {
        return children({
          ...this.props,
          initialProducts,
          products,
          categories,
          applications,
        })
      }
      return null;
    }

    return <div>
      <Helmet>
        <title>UNILAMP Prototype</title>
        <meta name="description" content="" />
        <meta name="keywords" content="" />
        <link href="https://fonts.googleapis.com/css?family=Muli:100,400,600,700" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css?family=Open+Sans:400,600" rel="stylesheet" />
      </Helmet>
      
      <Header />

      <div className="container">
        <div className="home-page col-container">
          
          {this.state.activePage === 'landing' ? [
            <div className="lcol">
              <h3 className="section-title">PRODUCTS</h3>
              <Categories
                categories={this.state.categories}
                applications={this.state.applications}
                onCategorySelect={(type, cat) => this.onFilterChange(type, cat)}
                location={this.props.location}
              />
              <Filters
                onFilterChange={this.onFilterChange}
                resetActiveFilters={this.resetActiveFilters}
                activeFilters={this.state.activeFilters}
              />
            </div>,

            <div className="rcol">
              <Breadcrumbs />
              <Search />
              {contents()}
            </div>
          ] : contents()}
        </div>
      </div>

      {/*<Subscribe /> */}
      <Footer />
    </div>
  }
}
Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout
