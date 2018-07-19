import React, { Component } from 'react'

import {
  Slider,
  Input
} from 'antd'

import Popup, {
  PopupContainer
} from '../Popup'

class Size extends Component {
  constructor(props) {
    super(props);
    
  }
  onChange = (type, val) => {
    //this.props.onChange
  }

  render() {
    const {
      filter,
    } = this.props;

    return  <div className="filters__group">
      <h5 className="filters__group-title">
        Size (mm)
        <PopupContainer className="filters__info">
          <Popup text={filter.info} />
        </PopupContainer>
      </h5>
      <div className="filters__size">
        <label className="filters__input-wrap">
          <Input onChange={e => onChange('width', e.target.value)} />
          <span>width</span>
        </label>
        <label className="filters__input-wrap">
          <Input onChange={e => onChange('length', e.target.value)} />
          <span>length</span>
        </label>
      </div>
    </div>
  }
}

class Power extends Component {
  onChange = (type, val) => {
    //this.props.onChange
  }

  render() {
    const {
      filter,
    } = this.props;

    return <div className="filters__group">
      <h5 className="filters__group-title">
        Power (W)
        <PopupContainer className="filters__info">
          <Popup text={filter.info} />
        </PopupContainer>
      </h5>
      <div className="filters__size">
        <label className="filters__input-wrap">
          <Input onChange={e => onChange('min', e.target.value)} />
          <span>min W</span>
        </label>
        <label className="filters__input-wrap">
          <Input onChange={e => onChange('max', e.target.value)} />
          <span>max W</span>
        </label>
      </div>
    </div>
  }
}

class Brightness extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      sliderValues: [800, 1500],
    }
  }

  render() {
    const {
      onChange,
      filter,
    } = this.props;
     
    return <div className="filters__group">
    <h5 className="filters__group-title">
      Brightness (lm)
      <PopupContainer className="filters__info">
        <Popup text={filter.info} />
      </PopupContainer>
    </h5>
    <div className="filters__slider">
      <Slider
        min={300}
        max={3000}
        step={100}
        value={this.state.sliderValues}
        range={true}
        onChange={v => {
          onChange(v);
          this.setState({ sliderValues: v });
        }}
      />
    </div>
  </div>
  }
}

export { Size, Power, Brightness };