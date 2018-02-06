import React, { Component } from 'react'
import Link from 'gatsby-link'
import classnames from 'classnames'

import Search from '../components/Search'
import SortList from '../components/SortList'
import ProductGrid from '../components/ProductGrid'
import ProductTable from '../components/ProductTable'

import './home.scss';

const products = [
  {
    title: "NovoDisc - Static Landing",
    new: true,
    bgImage: "NovoDisc-White.png"
  },
  {
    title: "NovoDisc - Interactive Landing",
    bgImage: "NovoDisc-White.png"
  },
  {
    title: "Eden Eyelid",
    bgImage: "Eden-Eyelid-Black.png"
  },
  {
    title: "LED Panel",
    bgImage: "NovoDisc-White.png"
  },
  {
    title: "Tyfon",
    bgImage: "NovoDisc-White.png"
  },


  {
    title: "Retina Maxi LED",
    bgImage: "Retina-Stripe-White.png",
    colors: [
      '#fff',
      '#b9b9b9',
      '#434848'
    ]
  },
  {
    title: "Retina Stripe",
    new: true,
    bgImage: "Retina-Stripe-White.png",
    colors: [
      '#fff',
      '#b9b9b9',
      '#434848'
    ]
  },
  {
    title: "Retina Cross",
    bgImage: "Eden-Eyelid-Black.png",
    colors: [
      '#fff',
      '#b9b9b9',
      '#434848'
    ]
  },
  {
    title: "Retina Eyelid LED",
    bgImage: "Eden-Eyelid-Black.png",
    colors: [
      '#fff',
      '#b9b9b9',
      '#434848'
    ]
  },
  {
    title: "Retina Eyelid LED",
    bgImage: "Eden-Eyelid-Black.png",
    colors: [
      '#fff',
      '#b9b9b9',
      '#434848'
    ]
  },


  {
    title: "Juno Soft Pro",
    bgImage: "Drift-Flat-Graphite.png"
  },
  {
    title: "LED Compact (1 & 2)",
    bgImage: "Drift-Flat-Silver.png"
  },
  {
    title: "Ecoled",
    bgImage: "Drift-Flat-White.png"
  },
  {
    title: "Ecoled Maxi",
    new: true,
    bgImage: "Drift-Flat-Graphite.png"
  },
  {
    title: "Ecoled Alu",
    bgImage: "Drift-Flat-Silver.png"
  },
];

class IndexPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gridShown: true,
      tableShown: false
    };
  }
  render() {    
    return <div className="home-page col-container">
      <div className="lcol">
        <h3 className="section-title">Sort Products</h3>
    
        <SortList 
          title="New Products"
          list={[
            { key: "1", title: "new 1" },
            { key: "2", title: "new 2" },
          ]}
        />

        <SortList 
          title="Applications"
          list={[
            { "key": "kitchen", "title": "Kitchen" },
            { "key": "outdoors", "title": "Outdoors" },
            { "key": "livingroom", "title": "Livingroom" },
            { "key": "bathroom", "title": "Bathroom" },
            {
              "key": "trade-housing", 
              "title": "Trade and Housing",
              "sublist": [
                { "key": "corridor", "title": "Corridor / Staircase" },
                { "key": "reception", "title": "Reception" },
                { "key": "office", "title": "Office and meeting rooms" },
                { "key": "subordinate", "title": "Subordinate room" }
              ]
            },
            { "key": "smarthome", "title": "Smarthome" },
            { "key": "other", "title": "Other" }
          ]}
          activePath={[
            'trade-housing',
            'corridor'
          ]}
        />
        
        <SortList
          title="Categories"
          list={[
            { key: "1", title: "cat 1" },
            { key: "2", title: "cat 2" },
          ]}
        />

        <h3 className="section-title section-title_dropdown">Filter Products</h3>
      </div>
      <div className="rcol">
        <Search />
        <nav className="view-toggles">
          <a 
            href="#" 
            onClick={() => this.setState({
              'gridShown': true, 
              'tableShown': false
            })}
            className={classnames("view-toggles__toggle", "view-toggles__toggle_card", {
              "view-toggles__toggle_active": this.state.gridShown
            })}>Card view</a>
          <a 
            href="#" 
            onClick={() => this.setState({
              'gridShown': false,
              'tableShown': true
            })}
            className={classnames("view-toggles__toggle", "view-toggles__toggle_table", {
              "view-toggles__toggle_active": this.state.tableShown
            })}>Table view</a>
        </nav>
        <ProductGrid list={products} shown={this.state.gridShown} />
        <ProductTable list={products} shown={this.state.tableShown} />
      </div>
    </div>
  }
}

export default IndexPage
