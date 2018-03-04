import React, { Component } from 'react'
import Link from 'gatsby-link'
import classnames from 'classnames'
import some from 'lodash.some'
import { StickyContainer, Sticky } from 'react-sticky'

//import SubTable, { SubTableHeader } from './SubTable'
import SubTable, { SubTableHeader } from './SubTableMobile'
import ColorsList from '../ColorsList'
import WindowSize from '../../shared/WindowSize';

import './product-table.scss'

class ProductRow extends Component {
  constructor(props) {
    super(props);

    this.state = {
      colorSelected: undefined,
      expanded: props.expanded ? true : false,
      activeSlide: 0
    };
  }

  onColorClicked = (color) => {
    this.setState({
      colorSelected: color
    })
  }

  componentWillReceiveProps(newProps) {
    if (newProps.expanded !== this.state.expanded 
        && newProps.activeSlide === this.props.activeSlide) {
      this.setState({
        expanded: newProps.expanded
      })
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    /* Do not update component in case of slide update */
    if (nextProps.activeSlide !== this.props.activeSlide
        && nextProps.expanded !== this.state.expanded) {
      return false;
    }

    return true;
  }

  render() {
    const { 
      index, 
      item,
      windowWidth,
      onSlideChange,
      activeSlide,
    } = this.props;

    const isMobile = (windowWidth <= 600);

    let bgImage = item.bgImage;
    if (this.state.colorSelected) {
      bgImage = item.images[this.state.colorSelected.title.toLowerCase()];
    }

    const TitlePhotoMobile = <div>
      <Link to="/product/" className="table__product-title">
        {item.shortTitle ? item.shortTitle : item.title}
      </Link>

      <Link to="/product/">
        <span
          style={{ 'backgroundImage': `url(${bgImage})` }}
          className="table__photo"
        />
      </Link>
    </div>;

    return <StickyContainer
      className={classnames("table__row", "table__row_top-product", {
        "table__row_active": this.state.expanded,
        "table__row_collapsed": !this.state.expanded,
      })}>

        {/* non mobile header */}
        { !isMobile && <div className="table__cell table__cell_first">    
            <span
              style={{ 'backgroundImage': `url(${bgImage})` }}
              className="table__photo"
            />

            <Link to="/product/" className="table__product-title">
              {item.shortTitle ? item.shortTitle : item.title}
            </Link>
          </div>
        }

        { isMobile && 
          <div className="table__cell table__cell_first">
            {/* bottom offset should be equal height of "product names" label plus some extra space for padding */}
            { this.state.expanded ?
              <Sticky topOffset={-85} bottomOffset={161} className="sticky">
                {({
                  isSticky,
                  style,
                }) => <div className="table__sticky"
                  style={{
                    ...style,
                    top: 0,
                    transform: isSticky ? "translateY(" + (style.top + 85) + "px)" : "none"
                  }}>
                    {TitlePhotoMobile}
                  </div>
                }
              </Sticky> : 
              <div>{TitlePhotoMobile}</div>
            }
          </div>
        }

        { isMobile &&
          <div className="table__cell table__cell_expand">
            { this.state.expanded ? 
              <Sticky topOffset={-85} bottomOffset={161}>
                {({
                  isSticky,
                  style,
                }) => 
                <div 
                  className="table__product-expand table__product-expand_sticky"
                  style={{
                    ...style,
                    top: 0,
                    transform: isSticky ? "translateY(" + (style.top + 85) + "px)" : "none"
                  }}>
                    <a 
                      href="#" 
                      
                      onClick={e => {
                        e.preventDefault();
                        this.setState({ expanded: !this.state.expanded })
                      }}
                    >
                      {this.state.expanded ? "Collapse" : "Expand" } Product Family
                    </a>
                  </div>
                }
              </Sticky> :

              <div className="table__product-expand">
                <a href="#"
                  onClick={e => {
                    e.preventDefault();
                    this.setState({ expanded: !this.state.expanded })
                  }}
                >
                  {this.state.expanded ? "Collapse" : "Expand" } Product Family
                </a>
              </div>
            }
          </div>
        }

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
              expanded={this.state.expanded}
              onSlideChange={onSlideChange}
              activeSlide={activeSlide}
            />
          ))}

        </div>
      </StickyContainer>
  }
}
ProductRow = WindowSize(ProductRow);

export default class ProductTable extends Component {
  constructor(props) {
    super(props);

    this.state = {
      allProductsExpanded: false,
    }
  }

  updateActiveSlide = i => {
    i !== this.state.activeSlide && 
      this.setState({ activeSlide: i })
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
        <a 
          href="#" 
          className={"expand-all " + (this.state.allProductsExpanded ? "expand-all_expanded" : "")}
          onClick={() => this.setState({ allProductsExpanded: !this.state.allProductsExpanded })}
        >
          { !this.state.allProductsExpanded ? "expand all" : "collapse all" }
        </a>

        <ul className="table__body">
          {this.props.products.map((item, index) => (
            <ProductRow 
              key={`product_${index}`}
              item={item}
              index={index} // TODO: replace with product article
              expanded={this.state.allProductsExpanded}
              activeSlide={this.state.activeSlide}
              onSlideChange={this.updateActiveSlide}
            />
          ))}
        </ul>
      </div>
    )
  }
}