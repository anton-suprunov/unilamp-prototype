import React, { Component } from 'react'

import './popup.scss'

const Popup = ({
  text
}) => (
  <div className="popup">
    <div className="popup__wrap">
      <span className="popup__triangle"></span>
      <div className="popup__content">
        <p className="popup__text">{text}</p>
        <a href="#" className="popup__link">Read More</a>
      </div>
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
    const {
      popupIcon,
      ...props,
    } = this.props;

    return <div
      {...props}
      onMouseEnter={() => this.setState({ open: true })}
      onMouseLeave={() => this.setState({ open: false })}
      
      className={"popup-container " + 
        (this.props.className ? this.props.className : "") + 
        (this.state.open ? " popup-container_open" : "")
      }
      style={{
        backgroundImage: (popupIcon ? `url(${popupIcon[0].url})` : null)
      }}
    >
      {this.props.children}
    </div>
  }
}

export { PopupContainer };

export default Popup;