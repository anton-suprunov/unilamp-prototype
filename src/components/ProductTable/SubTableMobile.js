import React, { Component } from 'react'
import Link from 'gatsby-link'
import classnames from 'classnames'
import { Sticky } from 'react-sticky'
import Slick from 'react-slick'
import _ from 'lodash'

import WindowSize from '../../shared/WindowSize'
import config from '../../shared/config'


const sliderSettings = {
  dots: true,
  infinite: false,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  variableWidth: true,
};

const ProductNames = ({ 
    products,
    isMobile,
    expanded,
  }) => {
    return <div className="table table_sub table_sub-mobile table_sub-names">
      {isMobile && expanded ?
        <Sticky topOffset={-85} bottomOffset={241}>
          {({
            style,
            isSticky
          }) =>
            <p
              className={"table__cell-title " + (isSticky ? "table__cell-title_sticky" : "")}
              style={{
                ...style,
                top: 0,
                transform: isSticky ? "translateY(" + (111 + 85 + style.top) + "px)" : "none"
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

  "features": "Features",
  "downloads": "Downloads",
}

const ProductFields = ({ 
  products, 
  fields,
  expanded,
  isMobile,
}) => {
  
  const TitleFields = (
    fields.map(field => (
      <div className={"table__cell table__cell_" + field} key={"table_header_" + field}>
        <p className="table__cell-title">{fieldsMap[field]}</p>
      </div>
    ))
  )

  return <div className="table table_sub table_sub-mobile table_sub-slide">  
  <div className="table__body">
    <div className="table__row">
      { isMobile && expanded && false ?    
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
    
    { products.map((item, index) => 
      <div className="table__row" key={item.article}>
        { fields.map(field => {
          if (field === 'features') {
            return <div className={"table__cell table__cell_" + field} key={"table_cell_" + field}>
              <div className="table__cell-data">
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
            </div>
          }

          if (field === 'downloads') {
            return <div className="table__cell" key={"table_cell_" + field}>
              <p className="table__cell-data">
                <a href="#" className="table__feature table__feature_manual table__feature_icon-only">Manual</a>
                <a href="#" className="table__feature table__feature_calc table__feature_icon-only">Light calc</a>
              </p>
            </div>
          }

          return <div className="table__cell" key={"table_cell_" + field}>
            <p className="table__cell-data">
              {item[field]}
            </p>
          </div>
        }) }
      </div>
    ) }

  </div>
  </div>
}

class SubTableMobile extends Component {
  constructor(props) {
    super(props)
    this.state = {
      // flag set to identify the instance that was manually swiped to skip it in auto slide change
      slideInProgress: false,
      // flag set once the auto slide change is run to skip the callback execution in beforeChange handler
      autoSlideChange: false 
    }
  }

  componentWillReceiveProps(nextProps) {  
    if (nextProps.activeSlide !== undefined) {
      // check if this slider instance called the update
      if (this.state.slideInProgress) {
        this.setState({
          slideInProgress: false
        })

      } else if (nextProps.activeSlide !== this.slider.innerSlider.state.currentSlide) {
        this.setState({
          autoSlideChange: true
        }, () => this.slider.slickGoTo(nextProps.activeSlide, false))
      }
    }
  } 

  shouldComponentUpdate(nextProps, nextState) {
    /* Cancel component re-render for a smooth slide transition in case of slide change or autoSlideChange flag */
    if (nextProps.activeSlide !== this.props.activeSlide
        || nextState.autoSlideChange !== this.state.autoSlideChange) {
      return false;
    }

    return true;
  }

  render() { 
    const { 
      expanded,
      onSlideChange,
      activeSlide,
      windowWidth,
     } = this.props;
    
     const isMobile = (windowWidth <= config.breakpoints.mobile);

    return <div className="table__sublist-wrap">
      <ProductNames 
        {...this.props}
        isMobile={isMobile}
      />

      <div className="table__slider">
        <div className="table__slider-wrap">
          <Slick 
            ref={slider => this.slider = slider} 
            { ...sliderSettings }
            customPaging={i => {
              if (expanded) {
                return <Sticky topOffset={-85} bottomOffset={251}>
                  {({
                    isSticky,
                    style,
                  }) => (
                    <div 
                      className="sticky-dot"
                      style={{
                        ...style,
                        top: 0,
                        transform: (isSticky ? "translateY(" + (83 + 85 + style.top) + "px)" : "none")
                      }}
                    >
                      <button className="table__dot"></button>
                      <p className="table__dot-label">
                        {i === 0 && "specs"}
                        {i === 1 && "light"}
                        {i === 2 && "features"}
                      </p>
                    </div>
                  )}
                </Sticky>

              } else {
                return <div>
                  <button className="table__dot"></button>
                  <p className="table__dot-label">
                    {i === 0 && "specs"}
                    {i === 1 && "light"}
                    {i === 2 && "features"}
                  </p>
                </div>
              }
            }}
            beforeChange={(current, next) => {
              if (this.state.autoSlideChange) {
                this.setState({
                  autoSlideChange: false
                });
                return;  
              }
              this.setState({
                slideInProgress: true
              }, () => onSlideChange(next))
            }}
            //afterChange={(next) => { onSlideChange(next); }}
          >
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

            <ProductFields
              {...this.props}
              fields={['features', 'downloads']}
              isMobile={isMobile}
            />
            
          </Slick>
        </div>
      </div>
    </div>
  }
}

export default WindowSize(SubTableMobile)