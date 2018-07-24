import React, { Component } from 'react'
import Popup, { PopupContainer } from '../Popup'

const SubTable = ({ products }) => (
  <div className="table table_sub">
    <ul className="table__body">
      
      <li className="table__row table__row_sub table__row_header">
      <div className="table__cell table__cell_sub table__cell_image"></div>

        <div className="table__cell table__cell_sub table__cell_sku">
          <p className="table__cell-title">SKU</p>
        </div>

        <div className="table__cell table__cell_sub table__cell_type">
          <p className="table__cell-title">Product Types</p>
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
            <p className="table__cell-data">{item.article}</p>
          </div>
          
          <div className="table__cell table__cell_sub table__cell_type">
            <p className="table__cell-data table__cell-data_highlight table__cell-data_name">
              {item.title}
            </p>
            <PopupContainer className="table__cell-info table__cell-info_right-align">
              <Popup
                text="LED is the biggest thing in light since electric light was invented.It shines for over 20 years, can be built into lamps for new designs, and uses a sliver of the energy of incandescent bulbs."
              />
            </PopupContainer>
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
            <a href="#" className="table__feature table__feature_calc table__feature_icon-only">Light calc</a>
          </div>
        </li>
      ))}
    </ul>
  </div>
)

export default SubTable