import React, { Component } from 'react'

import flatten from 'lodash/flatten';
import uniq from 'lodash/uniq';
import compact from 'lodash/compact';
import chunk from 'lodash/chunk';

import './product.scss';

class ProductPage extends Component {
  constructor(props) {
    super(props);
    //console.log(props);
    this.state = {product: {}};
  }

  initState = (props) => {
    let productKey = props.location.pathname.replace('/product/', '');
    console.log(props.initialProducts.find(p => p.key === productKey));
    this.setState({
      product: props.initialProducts ? props.initialProducts.find(p => p.key === productKey) : {}
    });
  }

  componentDidMount() {
    this.initState(this.props);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.initialProducts !== this.props.initialProducts) {
      this.initState(nextProps);
    }
  }

  render() {
    const { product } = this.state;
    //let features = this.state.product.subProducts.map(s => s.features);
    let featuresList = [];
    if (product && product.subProducts) {
      featuresList = uniq(flatten(compact(product.subProducts.map(s => s.features))));
    }
    
    return <div className="product">
      <div className="product__top">
        <div className="product__photos">
          <span className="product__main-photo" style={{backgroundImage: `url(${product.bgImage})`}}></span>

        </div>
        <div className="product__desc">
          <h4 className="product__title">{product['title']}</h4>
          <span className="product__cat">Bruksområde / Novodisc</span>
          <a href="#" className="product__product-data-link">Jump to Produkt data & Produkt nedlastinger</a>

          <p className="product__text">{product['description']}</p>

          <p className="product__list-title">Features:</p>
          {featuresList.map((f, i) =>
            <p className="product__list-item" key={i}>
              <span className="product__list-popup"></span>
              {f}
            </p>
          )}
        </div>
      </div>
    </div>
  }
}

export default ProductPage
