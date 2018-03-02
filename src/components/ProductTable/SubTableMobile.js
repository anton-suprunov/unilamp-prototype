import React, { Component } from 'react'
import Link from 'gatsby-link'
import classnames from 'classnames'
import { Sticky } from 'react-sticky'
import Slick from 'react-slick'

import WindowSize from '../../shared/WindowSize'
import config from '../../shared/config'


const sliderSettings = {
  dots: true,
  infinite: false,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  variableWidth: true
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

const ProductNames = ({ 
    products,
    isMobile,
    expanded,
  }) => {
    return <div className="table table_sub table_sub-mobile table_sub-names">
      {isMobile && expanded ?
        <Sticky bottomOffset={156}>
          {({
            style,
            isSticky
          }) =>
            <p
              className={"table__cell-title " + (isSticky ? "table__cell-title_sticky" : "")}
              style={{
                ...style,
                top: 0,
                transform: (isSticky ? "translateY(" + (111 + style.top) + "px)" : "none") 
              }}>
                Product Names
            </p>
          }
        </Sticky> :
        <p className="table__cell-title">Product Names</p>
      }
      

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
}

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
  fields,
  expanded,
  isMobile,
  onlyTitles = false
}) => {
  
  const TitleFields = (
    fields.map(field => (
      <div className="table__cell" key={"table_header_" + field}>
        <p className="table__cell-title">{fieldsMap[field]}</p>
      </div>
    ))
  )

  return <div className="table table_sub table_sub-mobile table_sub-slide">  
  <div className="table__body">
    <div className="table__row">
      { isMobile && expanded ?    
        <Sticky bottomOffset={156}>
          {({
            style,
            isSticky,
            distanceFromTop 
          }) => {
            return <div 
              className={"table__row-wrap " + (isSticky ? "table__row-wrap_sticky" : "")}
              style={{
                ...style,
                top: 0,
                left: 'auto',
                transform: (isSticky ? "translateY(" + (-1 * (distanceFromTop)) + "px)" : "none"),
                //transform: (isSticky ? "translateY(" + (style.top) + "px)" : "none"),
              }}
            >
              {TitleFields}
            </div>
          }}
        </Sticky> :

        <div className="table__row-wrap">
          {TitleFields}
        </div>
      }
    </div>
    
    { !onlyTitles && products.map((item, index) => 
      <div className="table__row" key={item.article}>
        { fields.map(field => 
          <div className="table__cell" key={"table_cell_" + field}>
            <p className="table__cell-data">
              {item[field]}
            </p>
          </div>
        ) }
      </div>
    ) }

  </div>
  </div>
}


class SubTable extends Component { 
  render() { 
    const isMobile = (this.props.windowWidth <= config.breakpoints.mobile);

    return <div className="table__sublist-wrap">
      <ProductNames 
        {...this.props}
        isMobile={isMobile}
      />

      
      <div className="table__slider">

        { this.props.expanded && false &&
          <Sticky bottomOffset={76}>
            {({
              style,
              isSticky,
              distanceFromTop
            }) => (
              <div
                className={"table__sticky-row " + (isSticky ? "table__sticky-row" : "")}
                style={{
                  ...style,
                  top: 0,
                  transform: (isSticky ? "translateY(" + (111 + style.top) + "px)" : "none"),
                }}
              >
                <Slick {...sliderSettings}>
                  <ProductFields
                    {...this.props}
                    fields={['diameter', 'width', 'power']}
                    isMobile={isMobile}
                    onlyTitles={true}
                  />

                  <ProductFields
                    {...this.props}
                    fields={['brightness', 'temperature', 'protection']}
                    isMobile={isMobile}
                    onlyTitles={true}
                  />
                </Slick>
              </div>
            )}
          </Sticky> 
        }

        <div className="table__slider-wrap">
          <Slick { ...sliderSettings }>
            <ProductFields 
              {...this.props}
              fields={['diameter', 'width', 'power']} 
              isMobile={isMobile}
            />
            
            <ProductFields
              {...this.props}
              fields={['brightness', 'temperature', 'protection']}
              isMobile={isMobile}
            />
          </Slick>
        </div>
      </div>
    </div>
  }
}

export { SubTableHeader }

export default WindowSize(SubTable)

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