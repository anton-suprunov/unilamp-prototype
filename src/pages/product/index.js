import React, { Component } from 'react'

import flatten from 'lodash/flatten';
import uniq from 'lodash/uniq';
import compact from 'lodash/compact';
import chunk from 'lodash/chunk';

import Popup, { PopupContainer } from '../../components/Popup'

import './product.scss';

class ProductPage extends Component {
  constructor(props) {
    super(props);
    //console.log(props);
    this.state = {product: {}};
  }

  initState = (props) => {
    let productKey = props.location.pathname.replace('/unilamp-prototype', '').replace('/product/', '');
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
    
    if (!product.title) {
      return null;
    }

    return <div className="product">
      <div className="product__top">
        <div className="product__photos">
          <span className="product__main-photo" style={{backgroundImage: `url(${product.bgImage})`}}></span>
          <div className="product__slider"></div>
        </div>

        <div className="product__desc">
          <h4 className="product__title product__title_main">{product['title']}</h4>
          <span className="product__cat">Bruksområde / Novodisc</span>
          <a href="#" className="product__product-data-link">Jump to Produkt data & Produkt nedlastinger</a>

          <p className="product__text">{product['description']}</p>

          <p className="product__list-title">Features:</p>
          {featuresList.map((f, i) =>
            <p className="product__list-item" key={i}>
              <PopupContainer
                className="product__list-popup"
                //popupIcon={popupIcon}
              >
                <Popup text={'A light-emitting diode (LED) is a two-lead semiconductor light source. It is a p–n junction diode that emits light when activated. When a suitable current is applied to the leads, electrons are able to recombine with electron holes within the device, releasing energy in the form of photons.'} />
              </PopupContainer>
              {f}
            </p>
          )}
        </div>
      </div>
      
      <div className="product__section">
        <h4 className="product__title product__title_center">Description</h4>
        <ul className="product__descr-list">
          {product.descriptionExtra1 && <li className="product__descr-li">
            <span className="product__descr-img" style={{ backgroundImage: `url(${product.bgImage})` }}></span>
            <p className="product__descr-text">{product.descriptionExtra1}</p>
          </li>}

          {product.descriptionExtra2 && <li className="product__descr-li">
            <span className="product__descr-img" style={{ backgroundImage: `url(${product.bgImage})` }}></span>
            <p className="product__descr-text">{product.descriptionExtra2}</p>
          </li>}

          {product.descriptionExtra3 && <li className="product__descr-li">
            <span className="product__descr-img" style={{ backgroundImage: `url(${product.bgImage})` }}></span>
            <p className="product__descr-text">{product.descriptionExtra3}</p>
          </li>}
        </ul>
      </div>

      <div className="warranty-container">
          <div className="warranty"></div>
      </div>

      <div className="product__section">
        <h4 className="product__title product__title_apps">Applications</h4>
        <div className="product__apps">
          <p className="product__apps-text">{product.applicationsText}</p>
          <div className="product__apps-photos">
            <img src={product.applicationsPhotos[0].url} className="product__apps-main-photo" />
            <div className="product__apps-photos-list">
              <img src={product.applicationsPhotos[0].url} className="product__apps-photo-small" />
              <img src={product.applicationsPhotos[1].url} className="product__apps-photo-small" />
              <img src={product.applicationsPhotos[2].url} className="product__apps-photo-small" />
              <img src={product.applicationsPhotos[0].url} className="product__apps-photo-small" />
              <img src={product.applicationsPhotos[1].url} className="product__apps-photo-small" />
            </div>
          </div>
        </div>
      </div>

      <div className="product__section">
        <h4 className="product__title product__title_center">Tech Details / Sensor</h4>
        <ul className="product__descr-list">
          {product.descriptionExtra1 && <li className="product__descr-li">
              <span className="product__descr-img" style={{ backgroundImage: `url(${product.bgImage})` }}></span>
              <p className="product__descr-text">{product.techDescription1}</p>
          </li>}

          {product.descriptionExtra2 && <li className="product__descr-li">
              <span className="product__descr-img" style={{ backgroundImage: `url(${product.bgImage})` }}></span>
              <p className="product__descr-text">{product.techDescription2}</p>
          </li>}

          {product.descriptionExtra3 && <li className="product__descr-li">
              <span className="product__descr-img" style={{ backgroundImage: `url(${product.bgImage})` }}></span>
              <p className="product__descr-text">{product.techDescription3}</p>
          </li>}
        </ul>
      </div>

      <div className="products-thumb"></div>

      <div className="related"></div>

      <div className="related-articles"></div>

      <div className="related-hardware"></div>

    </div>
  }
}

export default ProductPage
