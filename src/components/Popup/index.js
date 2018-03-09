import React, { Component } from 'react'
import ClickOutside from 'react-click-outside'

import './popup.scss'

const Popup = ({
  text
}) => (
  <div className="popup">
    <span className="popup__triangle"></span>
    <div className="popup__content">
      <p className="popup__text">{text}</p>
      <a href="#" className="popup__link">Read More</a>
    </div>
  </div>
)

class PopupContainer extends Component {
  constructor(props) {
    super(props)

    this.state = {
      open: false
    }
  }

  render() {
    return <ClickOutside
      {...this.props}
      onClickOutside={() => this.setState({ open: false })}
      className={"popup-container " + 
        (this.props.className ? this.props.className : "") + 
        (this.state.open ? " popup-container_open" : "")
      }
      onClick={() => this.setState({ open: !this.state.open })}
    >
      {this.props.children}
    </ClickOutside>
  }
}

export { PopupContainer };

export default Popup;