import React, { Component } from 'react'
import classnames from 'classnames'
import {
  Checkbox,
  Slider,
  Input
} from 'antd'
import findIndex from 'lodash/findIndex';

import Popup, { PopupContainer } from '../Popup'
import { toggleArray } from '../../shared/helpers'
import List from './List'
import {
  filtersSimple,
  filtersAdvanced,
  temps,
} from './filters-config'

import './filters.scss'


class Filters extends Component {
  constructor(props) {
    super(props);

    this.state = {
      shown: true,
      activeFilters: [],
      tempSliderValues: [1, 3],
      powerSliderValues: [25, 50],
      lmSliderValues: [800, 1500]
    }
  }

  onFilterChange = (type, value) => {
    let activeFilters = this.state.activeFilters.slice(0);
    let index;

    // single value filters
    if (type === 'temperature' ||
      type === 'width' ||
      type === 'length' ||
      type === 'brightness' ||
      type === 'power') {

      // provide all range of temps to filtering func
      if (type === 'temperature') {
        value = temps.slice(value[0], value[1] + 1);
      }

      if (type === 'power') {
        let tempValue = [];
        for (let i = value[0]; i <= value[1]; i++) {
          tempValue.push(i + 'W');
        }
        value = tempValue;
      }

      if (type === 'brightness') {
        let tempValue = [];
        for (let i = value[0]; i <= value[1]; i++) {
          tempValue.push(i + ' lm');
        }
        value = tempValue;
      }

      index = findIndex(activeFilters, { type });
      if (index === -1 && value) {
        activeFilters.push({ type, value });
      } else {
        if (!value) {
          activeFilters.splice(index, 1);
        } else {
          activeFilters[index] = { type, value };
        }
      }

      // checkboxes
    } else {
      index = findIndex(activeFilters, { type, value });
      if (index === -1) {
        activeFilters.push({ type, value });

      } else {
        activeFilters.splice(index, 1);
      }
    }

    this.setState({
      activeFilters: activeFilters
    });

    this.props.onFilterChange(activeFilters);
  }

  render() {
    return <div className={classnames("filters", {
      "filter_active": this.state.shown
    })}>
      <h3
        className={classnames("section-title", "section-title_dropdown", {
          "section-title_active": this.state.shown
        })}
        onClick={() => this.setState({ shown: !this.state.shown })}
      >Filter Products</h3>
      <a
        href="#"
        className="filters__clear"
        onClick={e => {
          e.preventDefault();
          this.setState({
            activeFilters: [],
            tempSliderValues: [1, 3]
          }, () => {
            this.props.onFilterChange(this.state.activeFilters);
          });
        }}
      >Clear Filters</a>

      <div className="filters__wrap">
        {filtersSimple.map((group, index) => (
          <List
            key={`filter_group_${index}`}
            {...group}
            onChange={this.onFilterChange.bind(this, group.type)}
            activeList={this.state.activeFilters.filter(f => f.type === group.type).map(f => f.value)}
          />
        ))}
      </div>

      <div className="filters__wrap filters__wrap_top-margin">
        <h3 className="section-title">Advanced Filters</h3>

        <div className="filters__group">
          <h5 className="filters__group-title">
            Power
            <span className="filters__note-text">W</span>
            <PopupContainer className="filters__info">
              <Popup text="The lumen(symbol: lm) is the SI derived unit of luminous flux, a measure of the total quantity of visible light emitted by a source." />
            </PopupContainer>
          </h5>
          <div className="filters__slider">
            <Slider
              min={10}
              max={75}
              step={5}
              value={this.state.powerSliderValues}
              //tipFormatter={v => temps[v]}
              range={true}
              onChange={v => {
                this.onFilterChange('power', v);
                this.setState({ powerSliderValues: v });
              }}
            />
          </div>
        </div>

        <div className="filters__group">
          <h5 className="filters__group-title">
            Warmth
            <span className="filters__note-text">Kelvin</span>
            <PopupContainer className="filters__info">
              <Popup text="The lumen(symbol: lm) is the SI derived unit of luminous flux, a measure of the total quantity of visible light emitted by a source." />
            </PopupContainer>
          </h5>
          <div className="filters__slider">
            <Slider
              min={0}
              max={4}
              value={this.state.tempSliderValues}
              tipFormatter={v => temps[v]}
              range={true}
              onChange={v => {
                this.onFilterChange('temperature', v);
                this.setState({ tempSliderValues: v });
              }}
            />
          </div>
        </div>

        <div className="filters__group">
          <h5 className="filters__group-title">
            Brightness
            <span className="filters__note-text">Lumen</span>
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
              //tipFormatter={v => temps[v]}
              range={true}
              onChange={v => {
                this.onFilterChange('brightness', v);
                this.setState({ lmSliderValues: v });
              }}
            />
          </div>
        </div>

        <div className="filters__group">
          <h5 className="filters__group-title">Size (mm)</h5>
          <div className="filters__size">
            <label className="filters__input-wrap">
              <Input onChange={e => this.onFilterChange('width', e.target.value)} />
              <span>width</span>
            </label>
            <label className="filters__input-wrap">
              <Input onChange={e => this.onFilterChange('length', e.target.value)} />
              <span>length</span>
            </label>
          </div>
        </div>

        <div className="filters__advanced-lists">
          {filtersAdvanced.map((group, index) => (
            <List
              key={`filter_group_${index}`}
              {...group}
              onChange={this.onFilterChange.bind(this, group.type)}
              activeList={this.state.activeFilters.filter(f => f.type === group.type).map(f => f.value)}
            />
          ))}
        </div>
      </div>


    </div>
  }
}

export default Filters;