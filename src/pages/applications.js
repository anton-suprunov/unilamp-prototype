import React, { Component } from 'react'
import Link from 'gatsby-link';

import ProductGrid from '../components/ProductGrid'

import './applications.scss';

const ApplicationsList = ({
  list,
  title,
  productsTitle,
  products,
}) => 
  <div className="applications">
    <h5 className="applications__title">{title}</h5>
    <div className="applications__list">
      {list.map(application => 
        <div className="applications__item" key={`application_${application['Name']}`}>
          <span className="applications__img" style={{
            backgroundImage: `url(${application['Photo'][0].url})`
          }}>
            <span>{application['Name']}</span>
            <Link to={`/application/${application['Name'].replace(/ /g, '_').replace(/\//g, '_')}`} className="applications__link">(View all)</Link>
          </span>
        </div>
      )}
    </div>
    <h5 className="applications__product-title">{productsTitle}</h5>
    <ProductGrid
      products={products}
      shown={true}
      limit={12}
    />
  </div>

const ApplicationsPage = ({
  applications = [],
  initialProducts,
}) => {
    
  let homeAplications = applications.filter(a => (!a['is_parent'] && a['Category'] === 'Home'));
  let businessAplications = applications.filter(a => (!a['is_parent'] && a['Category'] === 'Business'));

  return <div className="application">  
    <ApplicationsList 
      list={homeAplications} 
      title="Home Owners - Product Categories" 
      productsTitle="Home - Best Sellers"
      products={initialProducts}
    />

    <ApplicationsList 
      list={businessAplications} 
      title="Business Owners" 
      productsTitle="Business - Best sellers"
      products={initialProducts}
    />
  </div>
}

export default ApplicationsPage;
