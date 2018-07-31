import React, { Component } from 'react'
import Link from 'gatsby-link';
import sampleSize from 'lodash/sampleSize'

import ProductGrid from '../components/ProductGrid'
//import { filterProductByAttr } from '../shared/products-api/product-filters';
import './categories.scss';

class CategoriesPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      
    };
  }

  componentDidMount() {
   
  }

  render() {
    const { 
      categories,
      initialProducts,
    } = this.props;

    return <div className="cat-list">  
      { categories.map((cat, index) => {
        /*let products = filterProductByAttr(initialProducts, {
          type: 'category',
          value: cat.Name,
        });*/
        let products = sampleSize(initialProducts, 4);
        return <div className="cat-list__item" key={`category_${index}`}>
          <span className="cat-list__img" style={{
            backgroundImage: `url(${cat.Photo[0].url})`
          }}>

            <span>{cat.Name}</span>
            <Link to={`/category/${cat.Name.replace(/ /g, '_')}`} className="cat-list__link">(View all)</Link>
          </span>
          
          {products.length > 0 ? <ProductGrid
            products={products}
            shown={true}
            limit={4}
          /> : ''}
        </div>
      })}
    </div>
  }
}

export default CategoriesPage;
