import React, { Component } from 'react'
import { navigateTo } from "gatsby-link"
import isEqual from 'lodash/isEqual'

import SortList from './SortList'

class Categories extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeList: 'applications',
    };
  }

  componentDidMount() {
    this.updatePaths();
  }

  componentDidUpdate(prevProps, prevState) {
    if (!isEqual(this.props, prevProps)) {
      this.updatePaths(); 
    }
  }

  updatePaths = () => {
    let paths = this.getPaths();
    let path = paths[0];

    if (path === 'category') {
      path = 'categories';
    }

    if (paths.length && this.state.activeList !== paths[0]) {
      this.setState({
        activeList: path,
      }, () => console.log(this.state))
    }
  }

  onItemClick = (type, item) => {
    this.props.onCategorySelect(type, item.title);
  }

  getPaths = () => {
    let paths = [];
    paths = this.props.location.pathname.split('/').slice(1);

    if (paths.length === 1 && paths[0].length === 0) {
      return [];
    }

    return paths;
  }

  onTitleClick = listName => {
    let activeList = '';
    if (this.state.activeList !== listName) {
      activeList = listName;
    }
    this.setState({
      activeList,
    })
  }

  render() {
    const {
      categoriesList,
      location,
    } = this.props;

    const {
      activeList,
    } = this.state;

    let paths = this.getPaths();

    return <div>
      <SortList 
        title="My Saved Products"
        list={[
          { key: "1", title: "saved 1" },
          { key: "2", title: "saved 2" },
        ]}
        isActive={activeList === 'saved_products'}
        onTitleClick={this.onTitleClick.bind(this, 'saved_products')}
      />

      <SortList 
        title="New Products"
        list={[
          { key: "1", title: "new 1" },
          { key: "2", title: "new 2" },
        ]}
        isActive={activeList === 'new_products'}
        onTitleClick={this.onTitleClick.bind(this, 'new_products')}
      />

      <SortList
        title="Product Categories"
        list={categoriesList.map(v => ({
          "key": v.Name.replace(/ /g, '_'),
          "title": v.Name,
        }))}
        onClick={this.onItemClick.bind(this, 'categories')}
        isActive={activeList === 'categories'}
        onTitleClick={this.onTitleClick.bind(this, 'categories')}
        onTitleSpecialClick={() => navigateTo('/categories')}
        linkTo={'category'}
        activePath={(paths && paths[0] === 'category') ? [paths[1]] : []}
      />

      <SortList
        title="Product Applications"
        list={[
          { "key": "kitchen", "title": "Kitchen" },
          { "key": "outdoors", "title": "Outdoors" },
          { "key": "livingroom", "title": "Livingroom" },
          { "key": "bathroom", "title": "Bathroom" },
          {
            "key": "trade-housing", 
            "title": "Trade and Housing",
            "sublist": [
              { "key": "corridor", "title": "Korridor/Trapp" },
              { "key": "reception", "title": "Reception" },
              { "key": "office", "title": "Office and meeting rooms" },
              { "key": "subordinate", "title": "Subordinate room" }
            ]
          },
          { "key": "smarthome", "title": "Smarthome" },
          { "key": "other", "title": "Other" }
        ]}
        activePath={(paths.length === 0 || paths[0] === 'application') ? [
          'trade-housing',
          'corridor'
        ] : []}
        onClick={this.onItemClick.bind(this, 'application')}
        onTitleSpecialClick={() => this.props.onCategorySelect('application')}
        isActive={activeList === 'applications'}
        onTitleClick={this.onTitleClick.bind(this, 'applications')}
      />
    </div>
  }
}

export default Categories;