import React, { Component } from 'react'
import Link from 'gatsby-link'
import classnames from 'classnames'
import some from 'lodash.some'

//import SubTable, { SubTableHeader } from './SubTable'
import SubTable, { SubTableHeader } from './SubTableMobile'
import ColorsList from '../ColorsList'

import './product-table.scss'

class ProductRow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      colorSelected: undefined,
      expanded: false
    };
  }

  onColorClicked = (color) => {
    this.setState({
      colorSelected: color
    })
  }

  render() {
    const { 
      index, 
      item,
    } = this.props;

    let bgImage = item.bgImage;
    if (this.state.colorSelected) {
      bgImage = item.images[this.state.colorSelected.title.toLowerCase()];
    }

    return <li
      className={classnames("table__row", {
        "table__row_active": this.state.expanded
      })}
      onClick={() => this.setState({ expanded: !this.state.expanded })}
    >
      <div className="table__cell table__cell_first">
        <span
          style={{ 'backgroundImage': `url(${bgImage})` }}
          className="table__photo"
        />

        <Link to="/product/" className="table__product-title">
          {item.shortTitle ? item.shortTitle : item.title}
        </Link>
      </div>

      <div className="table__cell table__cell_colors">
        {item.colors && <ColorsList
          colors={item.colors}
          parentItemKey={index}
          isVertical={true}
          onClick={this.onColorClicked}
          activeColor={this.state.colorSelected ? this.state.colorSelected : item.colors[0]}
        />}
      </div>

      <div className="table__cell">
        <p className="table__cell-title">Diameter</p>
        <p className="table__cell-data">260 mm</p>
        <p className="table__cell-data">340 mm</p>
        <p className="table__cell-data">400 mm</p>
      </div>

      <div className="table__cell">
        <p className="table__cell-title">Width</p>
        <p className="table__cell-data">107 mm</p>
      </div>

      <div className="table__cell">
        <p className="table__cell-title">LED Power</p>
        <p className="table__cell-data">30W</p>
      </div>

      <div className="table__cell">
        <p className="table__cell-title">Brigthness</p>
        <p className="table__cell-data">3000 lumen</p>
      </div>

      <div className="table__cell">
        <p className="table__cell-title">Protection</p>
        <p className="table__cell-data">IP44</p>
      </div>

      <div className="table__cell">
        <p className="table__cell-title">Temperature</p>
        <p className="table__cell-data">3000K</p>
      </div>

      <div className="table__cell table__cell_features">
        <p className="table__cell-title">Features</p>
        <div className="table__features">
          <p className="table__feature">EM03</p>
          <p className="table__feature">Dali</p>
          <p className="table__feature">Sendor</p>
          <p className="table__feature">Dim</p>
        </div>
      </div>

      <div className="table__cell table__cell_last">
        <p className="table__cell-title">View/Download</p>
        <div className="table__features table__features_single-col">
          <a href="#" className="table__feature table__feature_manual">Manual</a>
          <a href="#" className="table__feature table__feature_calc">Light Calc</a>
        </div>
      </div>

      <div className="table__sublist">
        { /* <SubTableHeader /> */ }
        {item.subProducts && item.subProducts.map((subProducts, subIndex) => (
          <SubTable
            products={subProducts}
            key={`product_${index}_sublist_${subIndex}`}
          />
        ))}

      </div>
    </li>
  }
}

export default class ProductTable extends Component {
  constructor(props) {
    super(props);

    this.state = {
      expandedTables: []
    }
  }

  render() {
    const { 
      renderSliders
    } = this.props;

    return (
      <div 
        className={classnames("table", "table_main", {
          "table_active": this.props.shown
        })}
      >
        <ul className="table__body">
          {this.props.products.map((item, index) => (
            <ProductRow 
              key={`product_${index}`}
              item={item}
              index={index} // TODO: replace with product article
            />
          ))}
        </ul>
      </div>
    )
  }
}