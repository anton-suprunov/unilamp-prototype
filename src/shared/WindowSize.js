// higher-order component that passes the dimensions of the window as props to
// the wrapped component
import React, { Component } from 'react';

export default (ComposedComponent) => {

  class windowSize extends Component {

    constructor() {
      super();
      this.state = {
        width: window.innerWidth,
        height: window.innerHeight,
      };
    }

    handleResize  = () => {
      this.setState({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    componentDidMount() {
      window.addEventListener('resize', this.handleResize);
    }

    componentWillUnmount() {
      window.removeEventListener('resize', this.handleResize);
    }

    render() {
      return (
        <ComposedComponent
          {...this.props}
          windowWidth={this.state.width}
          windowHeight={this.state.height}
        />
      );
    }

  }

  const composedComponentName = ComposedComponent.displayName || ComposedComponent.name || 'Component';

  windowSize.displayName = `windowSize(${composedComponentName})`;
  return windowSize;

};