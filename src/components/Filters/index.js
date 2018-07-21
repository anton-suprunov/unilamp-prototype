import React, { Component } from 'react'
import classnames from 'classnames'

import orderBy from 'lodash/orderBy'

import fetchTable from '../../shared/products-api'
import Filter from './Filter'

import './filters.scss'

const parseFiltersData = filters => {
  let res = filters.reduce((res, filter) => {
    if (filter['Type'] === 'Group' && !filter['A_Order']) {
      return res;
    }

    if (filter['Type'] === 'Group') {
      res.push(filter);
    } else {
      let i = res.findIndex(f => f['Subcategory'] === filter['Subcategory']);
      if (i !== -1) {
        !res[i].items && (res[i].items = []);
        res[i].items = [ ...res[i].items, filter ];
      }
    }

    return res;
  }, []);

  res = res.map(f => ({ ...f, items: orderBy(f.items, ['Group_order']) }))
  return orderBy(res, ['A_Order']);
}

class Filters extends Component {
  constructor(props) {
    super(props);

    this.state = {
      shown: true,
      filtersBasic: [],
      filtersAdvanced: [],
    }
  }

  componentDidMount() {
    fetchTable(process.env.AIRTABLE_BASE_FILTERS, process.env.AIRTABLE_BASE_FILTERS_NAME, process.env.AIRTABLE_BASE_FILTERS_TABLE_VIEW)
      .then(filters => {
        let parsedFilters = parseFiltersData(filters);
        
        this.setState({
          filtersBasic: parsedFilters.filter(f => f['A_FilterCategory'] === 'Basic'),
          filtersAdvanced: parsedFilters.filter(f => f['A_FilterCategory'] === 'Expert'),
        });
      })
  }

  render() {
    const {
      resetActiveFilters,
      onFilterChange,
      activeFilters,
    } = this.props;

    const {
      filtersBasic,
      filtersAdvanced,
    } = this.state;

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
        {filtersBasic.map((filter, i) => 
          <Filter 
            key={`filter_basic_${i}`}
            filter={filter}
            onChange={onFilterChange.bind(this, filter.Subcategory)}
            activeList={activeFilters.filter(f => f.type === filter.Subcategory).map(f => f.value)}
          /> 
        )}
      </div>

      <div className="filters__wrap filters__wrap_top-margin">
        <h3 className="section-title section-title_sub">Expert Filters</h3>
        
        {filtersAdvanced.map((filter, i) => 
          <Filter 
            key={`filter_advanced_${i}`}
            filter={filter}
            onChange={onFilterChange.bind(this, filter.Subcategory)}
            activeList={activeFilters.filter(f => f.type === filter.Subcategory).map(f => f.value)}
          /> 
        )}

      </div>
    </div>
  }
}

export default Filters;