import React, { Component } from 'react'
import Link from 'gatsby-link'
import classnames from 'classnames'
import { StickyContainer, Sticky } from 'react-sticky'
import _ from 'lodash'

import SubTable, { SubTableHeader } from './SubTable'
import SubTableMobile from './SubTableMobile'
import ColorsList from '../ColorsList'
import WindowSize from '../../shared/WindowSize'

function difference(object, base) {
  function changes(object, base) {
    return _.transform(object, function (result, value, key) {
      if (!_.isEqual(value, base[key])) {
        result[key] = (_.isObject(value) && _.isObject(base[key])) ? changes(value, base[key]) : value;
      }
    });
  }
  return changes(object, base);
}

class ProductRow extends Component {
  constructor(props) {
    super(props);

    this.state = {
      colorSelected: undefined,
      //expanded: props.expanded ? true : false,
      activeSlide: 0
    };
  }

  onColorClicked = (color) => {
    this.setState({
      colorSelected: color
    })
  }

  componentWillReceiveProps(newProps) {
    console.log('product row received props', difference(newProps, this.props));
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
      })}
      onClick={() => {
        if (isMobile) return;
        console.log('sticky container expand click desktop');
        //this.setState({ expanded: !this.state.expanded };
        onExpandClick();
      }}
      >

      {/* non mobile header */}
      {!isMobile && <div className="table__cell table__cell_first">
        <span
          style={{ 'backgroundImage': `url(${bgImage})` }}
          className="table__photo"
        />

        <Link to="/product/" className="table__product-title">
          {item.shortTitle ? item.shortTitle : item.title}
        </Link>
      </div>
      }

      {isMobile &&
        <div className="table__cell table__cell_first">
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
                  {TitlePhotoMobile}
                </div>
              }
            </Sticky> :
            <div>{TitlePhotoMobile}</div>
          }
        </div>
      }

      {isMobile &&
        <div className="table__cell table__cell_expand">
          {expanded ?
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
                      console.log('sticky container expand/collapse');
                      e.preventDefault();
                      //this.setState({ expanded: !this.state.expanded })
                      onExpandClick();
                    }}
                  >
                    {expanded ? "Collapse" : "Expand"} Product Family
                    </a>
                </div>
              }
            </Sticky> :

            <div className="table__product-expand">
              <a href="#"
                onClick={e => {
                  console.log('sticky container expand/collapse');
                  e.preventDefault();
                  //this.setState({ expanded: !this.state.expanded })
                  onExpandClick();
                }}
              >
                {expanded ? "Collapse" : "Expand"} Product Family
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

      {!isMobile ?
        <div className="table__sublist">
          <SubTableHeader />
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