import React from 'react'
import Link from 'gatsby-link'

import './subscribe.scss';

const Subscribe = () => (
  <div className="subscribe">
    <div className="subscribe__container">
      <h5 className="subscribe__title">
        Subscribe to our newsletter
        <br />
        to get the latest product updates and special discounts? (once a month?)
      </h5>
      <form className="subscribe__form">
        <input className="subscribe__input" type="text" />
        <button type="submit" className="subscribe__btn">Submit</button>
      </form>
    </div>
  </div>
)

export default Subscribe