import React, { Component } from 'react'
import Link from 'gatsby-link';

import Landing from '../../components/Landing'
import { filterProductByAttr } from '../../shared/products-api/product-filters';

class CategoryPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [],
    };
  }

  componentDidMount() {
    let categoryKey = this.props.location.pathname.replace("/category/", "");
    this.setState({
      'products': filterProductByAttr(this.props.initialProducts, {
        type: 'categoryKey',
        value: categoryKey,
      })
    })
  }

  render() {
    const { 
      products,
      ...props
    } = this.props;

    return <div>
      <Landing products={this.state.products} {...props} />
    </div>
  }
}

export default CategoryPage;
