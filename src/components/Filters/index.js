import React, { Component } from 'react'
import classnames from 'classnames'
import { Checkbox } from 'antd'

import Simple from './Simple'
import Advanced from './Advanced'

import './filters.scss'

class Filters extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shown: true
    }
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
      
      <Simple />
      <Advanced />
    </div>
  }
}

export default Filters;