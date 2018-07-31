// TODO: process categories and applications on receive, 
// so that they are same across app, and replace methods are only done once

import React, { Component } from 'react'

import Landing from '../components/Landing'

const IndexPage = (props) =>
  <div>
    <Landing {...props} />
  </div>

export default IndexPage;
