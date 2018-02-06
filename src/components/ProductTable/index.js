import React, { Component } from 'react'
import Link from 'gatsby-link'
import classnames from 'classNames'

import ColorsList from '../ColorsList'

import './product-table.scss'

export default class ProductTable extends Component {
  constructor(props) {
    super(props);

    this.state = {

    }
  }

  render() {
    return (
      <div 
        className={classnames("table",{
          "table_active": this.props.shown
        })}
      >
        <ul className="table__body">
          {this.props.list.map((item, index) => (
            <li
              className="table__row"
              key={`product_${index}`}
            >
              <div className="table__cell table__cell_first">
                <span 
                  style={{ 'backgroundImage': `url(${item.bgImage})` }} 
                  className="table__photo"
                />

                <Link to="/product/" className="table__product-title">{item.title}</Link>
              </div>
              <div className="table__cell table__cell_colors">
                <ColorsList
                  colors={item.colors}
                  parentItemKey={item.parentItemKey}
                  isVertical={true}
                />
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
              
            </li>
          ))}
        </ul>
      </div>
    )
  }
}