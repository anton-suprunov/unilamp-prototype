import React, { Component } from 'react'
import Link from 'gatsby-link'

class IndexPage extends Component {
  componentDidMount() {
    console.log(this.props);
  }

  render() {
    return <div>
      dis is my product page
    </div>
  }
}

export default IndexPage
