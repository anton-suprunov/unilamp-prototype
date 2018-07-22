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
    this.state = {
      widthmin: 0,
      widthmax: null,
      lengthmin: 0,
      lengthmax: null,
    }
  }

  onChange = (type, val) => {
    this.setState({
      [type]: val
    }, () => {
      this.props.onChange({
        width: [this.state.widthmin, this.state.widthmax],
        length: [this.state.lengthmin, this.state.lengthmax],
      })
    });
  }

  render() {
    const {
      filter,
    } = this.props;

    return  <div className="filters__group">
      <h5 className="filters__group-title">
        Size
        <PopupContainer className="filters__info" popupIcon={filter.popupIcon}>
          <Popup text={filter.info} />
        </PopupContainer>
      </h5>
      <div className="filters__size">
        <label className="filters__input-wrap">
          <Input onChange={e => this.onChange('widthmin', e.target.value)} />
          <span>w/diam min</span>
        </label>
        <label className="filters__input-wrap">
          <Input onChange={e => this.onChange('widthmax', e.target.value)} />
          <span>w/diam max</span>
        </label>
      </div>
      <div className="filters__size">
        <label className="filters__input-wrap">
          <Input onChange={e => this.onChange('lengthmin', e.target.value)} />
          <span>length min</span>
        </label>
        <label className="filters__input-wrap">
          <Input onChange={e => this.onChange('lengthmax', e.target.value)} />
          <span>length max</span>
        </label>
      </div>
    </div>
  }
}

class Power extends Component {
  constructor(props) {
    super(props);
    this.state = {
      min: 0,
      max: null,
    }
  }

  onChange = (type, val) => {
    this.setState({
      [type]: val
    }, () => {
      this.props.onChange([this.state.min, this.state.max])
    });
  }

  render() {
    const {
      filter,
    } = this.props;

    return <div className="filters__group">
      <h5 className="filters__group-title">
        Power (W)
        <PopupContainer className="filters__info" popupIcon={filter.popupIcon}>
          <Popup text={filter.info} />
        </PopupContainer>
      </h5>
      <div className="filters__size">
        <label className="filters__input-wrap">
          <Input onChange={e => this.onChange('min', e.target.value)} />
          <span>min W</span>
        </label>
        <label className="filters__input-wrap">
          <Input onChange={e => this.onChange('max', e.target.value)} />
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
      <PopupContainer className="filters__info" popupIcon={filter.popupIcon}>
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
        tipFormatter={v => v + 'lm'}
      />
    </div>
  </div>
  }
}

export { Size, Power, Brightness };