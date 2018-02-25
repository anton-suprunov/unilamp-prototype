import React, { Component } from 'react'
import Link from 'gatsby-link'
import classnames from 'classnames'

import Slick from 'react-slick'

const sliderSettings = {
  dots: true,
  infinite: false,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false
};

const SubTableHeader = () => {
  return <div className="table table_sub-mobile table_header-only">
    <ul className="table__body">
      <li className="table__row">
        <div className="table__cell table__cell_first">
          <p className="table__cell-title">Novodisk Types</p>
        </div>
        <div className="table__cell">
          <p className="table__cell-title">Diameter</p>
        </div>
        <div className="table__cell">
          <p className="table__cell-title">Width</p>
        </div>
        <div className="table__cell">
          <p className="table__cell-title">LED Power</p>
        </div>
        <div className="table__cell">
          <p className="table__cell-title">Brigthness</p>
        </div>
        <div className="table__cell">
          <p className="table__cell-title">Protection</p>
        </div>
        <div className="table__cell">
          <p className="table__cell-title">Temperature</p>
        </div>
        <div className="table__cell table__cell_features">
          <p className="table__cell-title">Features</p>
        </div>
        <div className="table__cell table__cell_last">
          <p className="table__cell-title">&nbsp;</p>
        </div>
      </li>
    </ul>
  </div>
}

const ProductNames = ({ products }) => (
  <div className="table table_sub table_sub-mobile table_sub-names">
    <p className="table__cell-title">Product Names</p>
    <ul className="table__body">
      {products.map((item, index) => (
        <li className="table__row" key={item.article}>
          <div className="table__cell table__cell_first">
            <p className="table__cell-data table__cell-data_highlight">
              {item.title}
              <span className="table__article">{item.article}</span>
            </p>
          </div>
        </li>
      ))}
    </ul>
  </div>
)

const fieldsMap = {
  "diameter": "Diameter",
  "width": "Width",
  "power": "LED Power",
  
  "brightness": "Brightness",
  "temperature": "Temperature",
  "protection": "Protection",

}

const ProductFields = ({ 
  products, 
  fields
}) => (
  <div className="table table_sub table_sub-mobile table_sub-slide">
    <ul className="table__body">
      <li className="table__row">
        { fields.map(field => (
          <div className="table__cell" key={"table_header_" + field}>
            <p className="table__cell-title">{fieldsMap[field]}</p>
          </div>
        ))}        
      </li>

      { products.map((item, index) => 
        <li className="table__row" key={item.article}>
          { fields.map(field => 
            <div className="table__cell" key={"table_cell_" + field}>
              <p className="table__cell-data">
                {item[field]}
              </p>
            </div>
          ) }
        </li>
      ) }

    </ul>
  </div>
)

class SubTable extends Component { 
  componentDidMount() { setTimeout(() => { window.dispatchEvent(new Event('resize')) }, 0); }

  render() { 
    const { products } = this.props;
    return <div className="table__sublist-wrap">
      <ProductNames products={products} />
      <div className="table__slider">
        <div className="table__slider-wrap">
          <Slick { ...sliderSettings }>
            <ProductFields 
              products={products} 
              fields={['diameter', 'width', 'power']} 
            />
            <ProductFields
              products={products}
              fields={['brightness', 'temperature', 'protection']}
            />
          </Slick>
        </div>
      </div>
    </div>
  }
}

export { SubTableHeader }

export default SubTable

/*<div className="table__cell">
  <p className="table__cell-data">{item.diameter}</p>
</div>
<div className="table__cell">
  <p className="table__cell-data">{item.width}</p>
</div>
<div className="table__cell">
  <p className="table__cell-data">{item.power}</p>
</div>
<div className="table__cell">
  <p className="table__cell-data">{item.brightness}</p>
</div>
<div className="table__cell">
  <p className="table__cell-data">{item.protection}</p>
</div>
<div className="table__cell">
  <p className="table__cell-data">{item.temperature}</p>
</div>
<div className="table__cell table__cell_features">
  <div className="table__features">
    {item.features && item.features.map((feature, index) => (
      <a
        href="#"
        key={`${item.article}_features_${index}`}
        className={`table__feature table__feature_${feature}`}
      >
        {feature}
      </a>
    ))}
  </div>
</div>
<div className="table__cell table__cell_last">
  <a href="#" className="table__feature table__feature_manual table__feature_icon-only">Manual</a>
  <a href="#" className="table__feature table__feature_calc table__feature_icon-only">Light calc</a>
  </div> */