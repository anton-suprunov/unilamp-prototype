import React, { Component } from 'react'
import classnames from 'classnames'

import './view-toggles.scss'

class ViewToggles extends Component {
  render() {
    const {
      onClickGrid,
      onClickTable,
      gridShown,
      tableShown,
    } = this.props;

    return <nav className="view-toggles">
      <a
        href="#"
        onClick={onClickGrid}
        className={classnames("view-toggles__toggle", "view-toggles__toggle_card", {
          "view-toggles__toggle_active": gridShown
        })}>Card view</a>
      <a
        href="#"
        onClick={onClickTable}
        className={classnames("view-toggles__toggle", "view-toggles__toggle_table", {
          "view-toggles__toggle_active": tableShown
        })}>Table view</a>
    </nav>
  }
}

export default ViewToggles;