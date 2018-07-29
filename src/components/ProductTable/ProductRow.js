import React, { Component } from 'react'
import Link from 'gatsby-link'
import classnames from 'classnames'
import { StickyContainer, Sticky } from 'react-sticky'

import SubTable from './SubTable'
import SubTableMobile from './SubTableMobile'
//import ColorsList from '../ColorsList'
import WindowSize from '../../shared/WindowSize'
import Popup, { PopupContainer } from '../Popup'

import flatten from 'lodash/flatten';
import uniq from 'lodash/uniq';
import compact from 'lodash/compact';
import chunk from 'lodash/chunk';

const ExpandLink = ({
  expanded = false,
  onExpandClick,
  className = '',
  style = {},
  itemsLength,
}) => 
  <div className={classnames('table__product-expand', className, {
    'table__product-expand': expanded,
  })}>
    <a href="#"
      onClick={e => {
        e.preventDefault();
        onExpandClick();
      }}
      style={style}
    >
      { expanded ? "Collapse" : `Expand (${itemsLength})` }
    </a>
  </div>


class ProductRow extends Component {
  constructor(props) {
    super(props);

    this.state = {
      colorSelected: undefined,
      activeSlide: 0,
      hovered: false,
    };
  }

  onColorClicked = (color) => {
    this.setState({
      colorSelected: color
    })
  }

  componentWillReceiveProps(newProps) {
    if (newProps.expanded !== this.props.expanded
      && newProps.activeSlide === this.props.activeSlide) {
      this.setState({
        expanded: newProps.expanded
      })
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    /* Do not update component in case of slide update */
    if (nextProps.activeSlide !== this.props.activeSlide
      && nextProps.expanded !== this.props.expanded) {
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
      onExpandClick,
      expanded,
    } = this.props;
    
    const isMobile = (windowWidth <= 600);

    let bgImage = item.bgImage;
    if (this.state.colorSelected) {
      bgImage = item.images[this.state.colorSelected.title.toLowerCase()];
    }

    let featuresList = uniq(flatten(compact(item.subProducts.map(s => s.features))));

    let tempsList = uniq(flatten(compact(item.subProducts.map(s => s.temperature))));

    let powerList = uniq(flatten(compact(item.subProducts.map(s => s.power)))).slice(0, 2);

    let protectionList = uniq(flatten(compact(item.subProducts.map(s => s.protection))));

    //let sizeList = uniq(flatten(compact(item.subProducts.map(s => `${s.diameter} / ${s.width}`)))).slice(0, 2);
    let sizeList = uniq(flatten(compact(item.subProducts.map(s => s.size))));
    
    const TitlePhoto = <div>
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
        "table__row_hovered": this.state.hovered,
      })}
    >

      {/* non mobile header */}
      {!isMobile && <div className="table__cell table__cell_first table__cell_main">
        {TitlePhoto}
      </div>
      }

      {isMobile &&
        <div className="table__cell table__cell_main table__cell_first">
          {/* bottom offset should be equal height of "product names" label plus some extra space for padding */}
          {expanded ?
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
                  {TitlePhoto}
                </div>
              }
            </Sticky> :
            <div>{TitlePhoto}</div>
          }
        </div>
      }

      <div 
        onMouseEnter={() => this.setState({ hovered: true })}
        onMouseLeave={() => this.setState({ hovered: false })}
        className="table__main-data-wrap" 
        onClick={() => onExpandClick()}>
        {isMobile ?
          <div className="table__cell table__cell_expand">
            {expanded ?
              <Sticky topOffset={-85} bottomOffset={161}>
                {({
                  isSticky,
                  style,
                }) =>
                  <ExpandLink 
                    className="table__product-expand_sticky"
                    style={{
                      ...style,
                      top: 0,
                      transform: isSticky ? "translateY(" + (style.top + 85) + "px)" : "none"
                    }}
                    onExpandClick={onExpandClick}
                    expanded={expanded}
                    itemsLength={item.subProducts.length}
                  />
                }
              </Sticky> :
              <ExpandLink 
                onExpandClick={onExpandClick}
                expanded={expanded}
                itemsLength={item.subProducts.length}
              />
            }
          </div> :
          <div className="table__cell table__cell_expand">
            <ExpandLink 
              onExpandClick={onExpandClick}
              expanded={expanded}
              itemsLength={item.subProducts.length}
            />
          </div>
        }

        <div className="table__cell table__cell_features table__cell_main">
          <p className="table__cell-title">Features</p>
          {chunk(featuresList, 2).map((f, i) => 
            <p className="table__features-inline" key={`${item.subProducts[0].article}_feature_${i}`}>
              {f.join(', ')}
              <br />
            </p>
          )}
        </div>

        <div className="table__cell table__cell_temp">
          <p className="table__cell-title">Temperature</p>
          <div className="table__cell-data table__cell-data_has-info">
            { tempsList.length === 1 ? <span>{tempsList[0]}</span> : "" }
            { tempsList.length === 2 ? <span>
              {tempsList[0]}
              <br />
              ...
              <br/>
              {tempsList[tempsList.length-1]}
            </span> : "" }
          </div>
        </div>

        <div className="table__cell table__cell_brightness">
          <p className="table__cell-title">Brigthness</p>
          <div className="table__cell-data table__cell-data_has-info">
            3000 lumen,
            <br />
            4000 lumen
          </div>
        </div>
        

        <div className="table__cell table__cell_power">
          <p className="table__cell-title">LED Power</p>
          <div className="table__cell-data table__cell-data_has-info">
            {powerList.map((f, i) => 
              <p className="table__cell-data" key={`${item.subProducts[0].article}_power_${i}`}>
                {f}
              </p>
            )}
          </div>
        </div>

        <div className="table__cell table__cell_protection">
          <p className="table__cell-title">Protection</p>
          <div className="table__cell-data table__cell-data_has-info">
            {chunk(protectionList,2).map((f, i) => 
              <p className="table__cell-data" key={`${item.subProducts[0].article}_protection_${i}`}>
                {f.join(', ')}
              </p>
            )}
          </div>
        </div>   
      
        <div className="table__cell table__cell_size">
          <p className="table__cell-title">Diameter/Width</p>
          {sizeList.map((f, i) => 
              <p className="table__cell-data" key={`${item.subProducts[0].article}_size_${i}`}>
                {f}
              </p>
            )}
        </div>

        <div className="table__cell table__cell_downloads">
          <p className="table__cell-title">Downloads</p>          
          <p className="table__cell-data">
            <a href="#"
              onClick={e => {
                e.preventDefault();
                onExpandClick();
              }}
            >
              See all
            </a>
          </p>
        </div>
      </div>

      {!isMobile ?
        <div className="table__sublist">
          {item.subProducts && 
            <SubTable
              products={item.subProducts}
              expanded={expanded}
              onSlideChange={onSlideChange}
              activeSlide={activeSlide}
            />
          }
        </div> :
        <div className="table__sublist">
          {item.subProducts &&
            <SubTableMobile
              products={item.subProducts}
              expanded={expanded}
              onSlideChange={onSlideChange}
              activeSlide={activeSlide}
            />
          }
        </div>
      }
    </StickyContainer>
  }
}

export default WindowSize(ProductRow);