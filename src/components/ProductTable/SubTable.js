import React, { Component } from 'react'

const SubTable = ({ products }) => (
  <div className="table table_sub">
    <ul className="table__body">
      
      <li className="table__row table__row_header">
        <div className="table__cell table__cell_first table__cell_sub">
          <p className="table__cell-title">Novodisk Types</p>
        </div>

        <div className="table__cell table__cell_sub">
          <p className="table__cell-title">Diameter</p>
        </div>
        <div className="table__cell table__cell_sub">
          <p className="table__cell-title">Width</p>
        </div>
        <div className="table__cell table__cell_sub">
          <p className="table__cell-title">LED Power</p>
        </div>
        <div className="table__cell table__cell_sub">
          <p className="table__cell-title">Brigthness</p>
        </div>
        <div className="table__cell table__cell_sub">
          <p className="table__cell-title">Protection</p>
        </div>
        <div className="table__cell table__cell_sub">
          <p className="table__cell-title">Temperature</p>
        </div>
        <div className="table__cell table__cell_features table__cell_sub">
          <p className="table__cell-title">Features</p>
        </div>
        <div className="table__cell table__cell_last table__cell_sub">
          <p className="table__cell-title">Downloads</p>
        </div>
      </li>

      {products.map((item, index) => (
        <li className="table__row" key={item.article}>
          <div className="table__cell table__cell_first table__cell_sub">
            <p className="table__cell-data table__cell-data_highlight">
              {item.title}
              <span className="table__article">{item.article}</span>
            </p>
          </div>
          
          <div className="table__cell table__cell_sub">
            <p className="table__cell-data">{item.diameter}</p>
          </div>
          <div className="table__cell table__cell_sub">
            <p className="table__cell-data">{item.width}</p>
          </div>
          <div className="table__cell table__cell_sub">
            <p className="table__cell-data">{item.power}</p>
          </div>
          <div className="table__cell table__cell_sub">
            <p className="table__cell-data">{item.brightness}</p>
          </div>
          <div className="table__cell table__cell_sub">
            <p className="table__cell-data">{item.protection}</p>
          </div>
          <div className="table__cell table__cell_sub">
            <p className="table__cell-data">{item.temperature}</p>
          </div>
          <div className="table__cell table__cell_features table__cell_sub">
            <div className="table__features">
              {item.features && item.features.map((feature, index) => (
                <a 
                  key={`feature-${index}`}
                  href="#" 
                  key={`${item.article}_features_${index}`}
                  className={`table__feature table__feature_${feature}`}
                >
                  {feature}
                </a>
              ))}
            </div>
          </div>
          <div className="table__cell table__cell_last table__cell_sub">
            <a href="#" className="table__feature table__feature_manual table__feature_icon-only">Manual</a>
            <a href="#" className="table__feature table__feature_calc table__feature_icon-only">Light calc</a>
          </div>
        </li>
      ))}
    </ul>
  </div>
)

export default SubTable