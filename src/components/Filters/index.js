import React, { Component } from 'react'
import classnames from 'classnames'
import {
  Checkbox,
  Slider,
  Input
} from 'antd'
import findIndex from 'lodash/findIndex';

import { toggleArray } from '../../shared/helpers'
import List from './List'

import './filters.scss'

const filtersSimple = [
  {
    type: 'functionality',
    title: 'Functionality',
    list: [
      {
        title: 'EM03',
      },
      {
        title: 'Gyro',
      },
      {
        title: 'Sensor',
      },
      {
        title: 'LED'
      }
    ]
  },
  {
    type: 'color',
    title: 'Color',
    list: [
      {
        title: 'White',
        color: '#FFFFFF'
      },
      {
        title: 'Matt White',
        color: '#FFFFFF'
      },
      {
        title: 'Silver',
        color: 'radial-gradient(circle, #FFFEFE 0%, #CACACA 100%)'
      },
      {
        title: 'Graphite',
        color: 'rgba(73,79,79,.4)'
      },
      {
        title: 'Black',
        color: '#434848'
      }
    ]
  }
];

const filtersAdvanced = [
  {
    type: 'execution',
    title: 'Execution',
    info: 'info text',
    shorter: true,
    list: [
      {
        title: 'Soft',
      },
      {
        title: 'Solid',
      },
    ]
  },
  {
    type: 'protection',
    title: 'Protection',
    info: 'info text',
    shorter: true,
    list: [
      {
        title: 'IP 20',
      },
      {
        title: 'IP 21',
      },
      {
        title: 'IP 44',
      },
      {
        title: 'IP 65',
      },
    ]
  }
];

const temps = [
  '2700 K',
  '3500 K',
  '4000 K',
  '5500 K',
  '6000 K'
];

class Filters extends Component {
  constructor(props) {
    super(props);

    this.state = {
      shown: true,
      activeFilters: []
    }
  }

  onFilterChange = (type, value) => {
    let activeFilters = this.state.activeFilters.slice(0);
    let index;

    // single value filters
    if (type === 'temperature' || type === 'width' || type === 'length' || type === 'dim') {
      if (type === 'temperature') {
        value = temps[value];
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
            activeFilters: []
          })
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
            Warmth
        <span className="filters__info"></span>
          </h5>
          <div className="filters__slider">
            <Slider
              min={0}
              max={4}
              defaultValue={[1,3]}
              tipFormatter={v => temps[v]}
              range={true}
              onChange={v => this.onFilterChange('temperature', v)}
            />
            <span className="filters__note-text">Kelvin</span>
          </div>
        </div>

        <div className="filters__group">
          <label className="filters__label">
            <h5 className="filters__group-title">
              Dim
            <span className="filters__info"></span>
            </h5>
            <div className="filters__filter filters__filter_checkbox">
              <Checkbox
                onChange={v => this.onFilterChange('dim', v.target.checked)}
              ></Checkbox>
            </div>
          </label>
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