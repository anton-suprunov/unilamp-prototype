import React, { Component } from 'react'
import classnames from 'classnames'
import {
  Checkbox,
  Slider,
  Input
} from 'antd'

import Popup, { PopupContainer } from '../Popup'
import List from './List'
import {
  filtersSimple,
  filtersAdvanced,
} from './filters-config'

import './filters.scss'

class Filters extends Component {
  constructor(props) {
    super(props);

    this.state = {
      shown: true,
      lmSliderValues: [800, 1500],
    }
  }

  componentDidMount() {
    
  }

  render() {
    const {
      resetActiveFilters,
      onFilterChange,
      activeFilters,
    } = this.props;

    return <div className={classnames("filters", {
      "filter_active": this.state.shown
    })}>
      <h3
        className={classnames("section-title", "section-title_dropdown", {
          "section-title_active": this.state.shown
        })}
        onClick={() => this.setState({ shown: !this.state.shown })}
      >FILTERS</h3>
      <a
        href="#"
        className="filters__clear"
        onClick={e => {
          e.preventDefault();
          resetActiveFilters();
        }}
      >
        Clear
      </a>

      <div className="filters__wrap">
        {filtersSimple.map((group, index) => (
          <List
            key={`filter_group_${index}`}
            {...group}
            onChange={onFilterChange.bind(this, group.type)}
            activeList={activeFilters.filter(f => f.type === group.type).map(f => f.value)}
          />
        ))}
      </div>

      <div className="filters__wrap filters__wrap_top-margin">
        <h3 className="section-title section-title_sub">Expert Filters</h3>

        <div className="filters__group">
          <h5 className="filters__group-title">
            Power (W)
            <PopupContainer className="filters__info">
              <Popup text="The lumen(symbol: lm) is the SI derived unit of luminous flux, a measure of the total quantity of visible light emitted by a source." />
            </PopupContainer>
          </h5>
          <div className="filters__size">
            <label className="filters__input-wrap">
              <Input onChange={e => onFilterChange('powermin', e.target.value)} />
              <span>min W</span>
            </label>
            <label className="filters__input-wrap">
              <Input onChange={e => onFilterChange('powermax', e.target.value)} />
              <span>max W</span>
            </label>
          </div>
        </div>

        <div className="filters__group">
          <h5 className="filters__group-title">
            Brightness (lm)
            <PopupContainer className="filters__info">
              <Popup text="The lumen(symbol: lm) is the SI derived unit of luminous flux, a measure of the total quantity of visible light emitted by a source." />
            </PopupContainer>
          </h5>
          <div className="filters__slider">
            <Slider
              min={300}
              max={3000}
              step={100}
              value={this.state.lmSliderValues}
              range={true}
              onChange={v => {
                onFilterChange('brightness', v);
                this.setState({ lmSliderValues: v });
              }}
            />
          </div>
        </div>

        <div className="filters__group">
          <h5 className="filters__group-title">Size (mm)</h5>
          <div className="filters__size">
            <label className="filters__input-wrap">
              <Input onChange={e => onFilterChange('width', e.target.value)} />
              <span>width</span>
            </label>
            <label className="filters__input-wrap">
              <Input onChange={e => onFilterChange('length', e.target.value)} />
              <span>length</span>
            </label>
          </div>
        </div>

        <div className="filters__advanced-lists">
          {filtersAdvanced.map((group, index) => (
            <List
              key={`filter_group_${index}`}
              {...group}
              onChange={onFilterChange.bind(this, group.type)}
              activeList={activeFilters.filter(f => f.type === group.type).map(f => f.value)}
            />
          ))}
        </div>
      </div>


    </div>
  }
}

export default Filters;