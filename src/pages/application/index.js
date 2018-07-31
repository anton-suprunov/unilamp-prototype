import React, { Component } from 'react'
import Link from 'gatsby-link';

import Landing from '../../components/Landing'
import { filterProductByAttr } from '../../shared/products-api/product-filters';

class ApplicationPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [],
    };
  }

  componentDidMount() {
    let applicationKey = this.props.location.pathname.replace('/unilamp-prototype', '').replace('/application/', '');

    this.setState({
      'products': filterProductByAttr(this.props.initialProducts, {
        type: 'applicationKey',
        value: applicationKey,
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

export default ApplicationPage;
