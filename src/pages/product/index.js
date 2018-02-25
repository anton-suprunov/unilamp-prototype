import React, { Component } from 'react'
import Link from 'gatsby-link'

class IndexPage extends Component {
  componentDidMount() {
    console.log(this.props);
  }

  render() {
    return <div>
      product page
    </div>
  }
}

export default IndexPage
