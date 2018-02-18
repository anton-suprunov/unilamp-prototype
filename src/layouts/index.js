import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import './layout.scss';

import Header from '../components/Header'
import Footer from '../components/Footer'
import Subscribe from '../components/Subscribe'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet>
      <title>UNILAMP Prototype</title>
      <meta name="description" content="" />
      <meta name="keywords" content="" />
      <link href="https://fonts.googleapis.com/css?family=Muli:100,400,600,700" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css?family=Open+Sans:400,600" rel="stylesheet" />
    </Helmet>
    <Header />
    <div className="container">
      {children()} 
    </div>
    <Subscribe />
    <Footer />
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
