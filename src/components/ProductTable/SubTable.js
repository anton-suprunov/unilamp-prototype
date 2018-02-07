import React, { Component } from 'react'
import Link from 'gatsby-link'
import classnames from 'classnames'

const SubTableHeader = () => {
  return <div className="table table_sub table_header-only">
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

const SubTable = ({ list }) => (
  <div className="table table_sub">
    <ul className="table__body">
      {list.map((item, index) => (
        <li className="table__row" key={item.article}>
          <div className="table__cell table__cell_first">
            <p className="table__cell-data table__cell-data_highlight">
              <span className="table__article">{item.article}</span> 
              {item.title}
            </p>
          </div>
          <div className="table__cell">
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
          </div>
        </li>
      ))}
    </ul>
  </div>
)

export { SubTableHeader }

export default SubTable