import React, { Component } from 'react'
import Popup, { PopupContainer } from '../Popup'

const SubTable = ({ products }) => (
  <div className="table table_sub">
    <ul className="table__body">
      
      <li className="table__row table__row_sub table__row_header">
      <div className="table__cell table__cell_sub table__cell_image"></div>

        <div className="table__cell table__cell_sub table__cell_sku">&nbsp;</div>

        <div className="table__cell table__cell_sub table__cell_features">
          <p className="table__cell-title">Features</p>
        </div>

        <div className="table__cell table__cell_sub table__cell_temp">
          <p className="table__cell-title">Temperature</p>
        </div>

        <div className="table__cell table__cell_sub table__cell_brightness">
          <p className="table__cell-title">Brigthness</p>
        </div>

        <div className="table__cell table__cell_sub table__cell_power">
          <p className="table__cell-title">LED Power</p>
        </div>

        <div className="table__cell table__cell_sub table__cell_protection">
          <p className="table__cell-title">Protection</p>
        </div>

        <div className="table__cell table__cell_sub table__cell_size">
          <p className="table__cell-title">Diameter/Width</p>
        </div>      
        
        <div className="table__cell table__cell_sub table__cell_downloads">
          <p className="table__cell-title">Downloads</p>
        </div>
      </li>

      {products.map((item, index) => (
        <li className="table__row table__row_sub" key={item.article}>
          <div className="table__cell table__cell_sub table__cell_image">
            <img src={item.image} className="table__photo-sub" />
          </div>
          
          <div className="table__cell table__cell_sub table__cell_sku">
            <p className="table__cell-data table__cell-data_highlight">
              {item.title}
              <span className="table__article">{item.article}</span>
            </p>
          </div>
          
          <div className="table__cell table__cell_sub table__cell_features">
            <p className="table__cell-data">
              {item.features ? item.features.join(', ') : ''}
            </p>
          </div>
          
          <div className="table__cell table__cell_sub table__cell_temp">
            <p className="table__cell-data">{item.temperature}</p>
          </div>

          <div className="table__cell table__cell_sub table__cell_brightness">
            <p className="table__cell-data">{item.brightness}</p>
          </div>

          <div className="table__cell table__cell_sub table__cell_power">
            <p className="table__cell-data">{item.power}</p>
          </div>

          <div className="table__cell table__cell_sub table__cell_protection">
            <p className="table__cell-data">{item.protection}</p>
          </div>

          <div className="table__cell table__cell_sub table__cell_size">
            {/*<p className="table__cell-data">{item.diameter}/{item.width}</p>*/}
            <p className="table__cell-data">{item.size}</p>
          </div>
          
          <div className="table__cell table__cell_sub table__cell_downloads">
            <a href="#" className="table__feature table__feature_manual table__feature_icon-only">Manual</a>
            <a href="#" className="table__feature table__feature_calc table__feature_icon-only">Light calc</a>
            <a href="#" className="table__feature table__feature_download table__feature_icon-only">Light calc</a>
          </div>
        </li>
      ))}
    </ul>
  </div>
)

export default SubTable